import request from "supertest";
import app from '../index'
describe('post endpoint', () => {
    test('should create a new post', () => {
        const res = request(app).post('/shortUrls').send(
            {full:'https://www.amazon.in/b/ref=PLYPC?node=21559515031&pf_rd_r=5X8BGZ0XHQTWRG905QCG&pf_rd_p=277ccf4b-a5bc-4b56-8bf1-a07e6a3e39ec'
        })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('post')
    })  
})