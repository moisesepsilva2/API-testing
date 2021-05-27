const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;
const app = express();

app.get('/first', (err, res) => {
    res.status(200).json({ "ok": "response" });
});

describe('First test', () => {

    it('Ok response', () => {

        request(app)
            .get('/first')
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200);
            });
    });

    it('Mocky test', (done) => {
        request('https://run.mocky.io')
            .get('/v3/00d18946-6935-4319-8000-9359e4a2207c')
            .expect(200, done)
    })

});