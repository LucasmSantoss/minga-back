import chai from 'chai'
import { request } from 'supertest'
import app from '../app.js';



const assert = chai.assert;
const expect = chai.expect; 

describe('GET /api/chapters', () => {
    it('should return a 401 unauthorized if no token is provided', async () => {
      const res = await request(app)
        .get('/api/chapters');
      expect(res.status).to.equal(401);
    });
  
    it('should return a 200 OK if a valid token is provided in headers', async () => {
      const res = await request(app)
        .get('/api/chapters')
        .set('Authorization', 'Bearer valid_token_here');
      expect(res.status).to.equal(200);
    });
  });
