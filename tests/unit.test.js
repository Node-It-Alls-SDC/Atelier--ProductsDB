const request = require('supertest');
const { expect } = require('chai');
const { app } = require('../server/index.js');

describe('GET requests', () => {
  it('Should respond with 200 status to /products', () => {
    request(app)
      .get('/products')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      })
  });

  it('Should respond with 200 status to /products/:product_id', () => {
    request(app)
      .get('/products/935454')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      })
  });

  it('Should respond with a 200 status to /products/:product_id/styles', () => {
    request(app)
      .get('/products/935454/styles')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      })
  });

  it('Should respond with a 200 status to /products/:product_id/related', () => {
    request(app)
      .get('/products/935454/related')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
      })
  });
});

describe('Invalid or missing product_id\'', () => {
  it('Should respond with a 404 status to /products/:product_id', () => {
    request(app)
      .get('/products/2935454')
      .expect(404)
      .end((err, res) => {
        if (err) throw err;
      })
  });

  it('Should respond with a 404 status to /products/:product_id/styles', () => {
    request(app)
      .get('/products/2935454/styles')
      .expect(404)
      .end((err, res) => {
        if (err) throw err;
      })
  });

  it('Should respond with a 404 status to /products/:product_id/related', () => {
    request(app)
      .get('/products/2935454/related')
      .expect(404)
      .end((err, res) => {
        if (err) throw err;
      })
  });
})