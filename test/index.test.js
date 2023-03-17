import chai from 'chai'
import { request } from 'supertest'
import app from '../app.js';



const assert = chai.assert;
const expect = chai.expect; 

describe('POST /api/chapters', () => {
    it('should return an array of strings for pages', async () => {
      const res = await request(app)
        .post('/api/chapters')
        .send({ pages: ['page1', 'page2', 'page3'] });
      expect(res.status).to.equal(200);
      expect(res.body.pages).to.be.an('array').that.includes('page1', 'page2', 'page3');
      expect(res.body.pages.every(page => typeof page === 'string')).to.be.true;
    });
  });