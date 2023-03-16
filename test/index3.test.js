import chai from 'chai'
import { request } from 'supertest'
import app from '../app.js';



const assert = chai.assert;
const expect = chai.expect; 

describe('POST /api/chapters/:id', () => {
  it('should return an object with an empty array for pages when chapter is not found', async () => {
    const res = await request(app)
      .post('/api/chapters/invalid_id_here');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('pages').that.is.an('array').that.is.empty;
  });
});
