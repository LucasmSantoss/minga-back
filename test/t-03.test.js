import app from "../app.js";
import chai from "chai";
import request from 'supertest'

const assert = chai.assert
const expect = chai.expect

describe( 'Test to chapters', () => {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTg2NzFjNWU4OTExMGMzN2Y5YWRhOCIsImlhdCI6MTY3OTQyMTExMCwiZXhwIjoxNjc5NTA3NTEwfQ.3H2dBwlgD5wvom8mHVFy_Tc_xNDa3uNnxVVnmXqVNF0'

    // it( 'REQ-TEST: POST api/chapters verify that pages is a strings array', async () => {
    //     const chapter = {
    //         manga_id: '641867205e89110c37f9ae1b',
    //         title: 'test chapter',
    //         pages: ['https://i.postimg.cc/nzVN4bVH/bleach-004-01.jpg','https://i.postimg.cc/cJBVt4S9/bleach-004-02.jpg',
    //         'https://i.postimg.cc/1tW2MC4D/bleach-004-03.jpg','https://i.postimg.cc/FHtqPJFC/bleach-004-04.jpg',
    //         'https://i.postimg.cc/L5w7FJtX/bleach-004-05.jpg','https://i.postimg.cc/MKfNbYwj/bleach-004-06.jpg',
    //         'https://i.postimg.cc/BZVRKVr0/bleach-004-07.jpg','https://i.postimg.cc/vTcjKr6k/bleach-004-08.jpg'
    //         ,'https://i.postimg.cc/K8nWCvRG/bleach-004-09.jpg','https://i.postimg.cc/8CNYGQ6h/bleach-004-10.jpg',
    //         'https://i.postimg.cc/fbCrT2c1/bleach-004-11.jpg','https://i.postimg.cc/sX20BYKx/bleach-004-12.jpg',
    //         'https://i.postimg.cc/XJD19rD8/bleach-004-13.jpg','https://i.postimg.cc/gjXSsGCP/bleach-004-14.jpg',
    //         'https://i.postimg.cc/hvkC3HnQ/bleach-004-15.jpg','https://i.postimg.cc/RCW4yK9v/bleach-004-16.jpg',
    //         'https://i.postimg.cc/bY4phrNk/bleach-004-17.jpg','https://i.postimg.cc/GmCR4fDp/bleach-004-18.jpg',
    //         'https://i.postimg.cc/3Jp7Jhd6/bleach-004-19.jpg'],
    //         order: 4
    //     }

    //     expect(chapter.pages).to.be.a('array')
    //     chapter.pages.forEach( page => assert.isString(page))

    //     const response = await request(app)
    //     .post('/api/chapters/')
    //     .send(chapter)
    //     .auth(token, { type: 'bearer'})

    //     assert.equal(response.status, 201)
    // })

    it( 'REQ-TEST: GET api/chapters verify that token through by header', async () => {
        
        const response = await request(app)
        .get('/api/chapters/')
        .auth(token, { type: 'bearer'})
        
        expect(response.request.header.Authorization).to.equal(`Bearer ${token}`)
    } )

})

