import mongoose from 'mongoose'
import shortId from 'shortid'

const shortUrlSchema = new mongoose.Schema({
    full: {
      type: String,
      required: true
    },
    short: {
      type: String,
      required: true,
      default: shortId.generate
    },
    clicks: {
      type: Number,
      required: true,
      default: 0
    },
    createdAt: { 
        type: Date, 
        expires: '30m', 
        default: Date.now }
  })
  
  module.exports = mongoose.model('ShortUrl', shortUrlSchema)