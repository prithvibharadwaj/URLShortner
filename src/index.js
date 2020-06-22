import express from 'express'
import mongoose, { Mongoose } from 'mongoose'
import ShortUrl from './shortUrl'
const app = express();

mongoose.connect('mongodb://mongo:27017/urlshort',{
  useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
// app.use(rateLimiter)

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('main',{shortUrls: shortUrls})
})

app.post('/shortUrls', async (req,res) =>{
    const shortUrl = await ShortUrl.findOne({short: req.body.shortValue})
    console.log(shortUrl)
    await ShortUrl.create({full: req.body.fullUrl})
    res.redirect('/')
    res.status(200).send(shortUrl)
})

app.get('/:shortUrl', async (req, res) =>{
    const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl})
    if(shortUrl == null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})

app.listen(process.env.PORT || 5000)