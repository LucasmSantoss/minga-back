import chai from 'chai'
import { request } from 'supertest'
import app from '../app.js';



const assert = chai.assert;
const expect = chai.expect; 

describe('GET /api/chapters/:id', () => {
  it('should return an object with an array of urls for pages when chapter is found', async () => {
    const res = await request(app)
      .get('/api/chapters/valid_id_here');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('pages').that.is.an('array');
    expect(res.body.pages.every(page => typeof page === 'string' && page.startsWith('http'))).to.be.true;
  });
});
