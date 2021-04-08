const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app.js');


describe('API Endpoint Test', () => {
    it('GET /api/search/:keyword/:page', async () => {
        const keyword = 'batman';
        const page = 1;
        const response = await request(app).get(`/api/search/${keyword}/${page}`);
        // console.log(response);
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.have.property('Search');
    });

    it('GET /api/detail/:movieid', async () => {
        const movieId = 'tt0059742'

        const response = await request(app).get(`/api/detail/${movieId}`);
        
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.have.property('Title');
        expect(response.body).to.have.property('Year');
        expect(response.body).to.have.property('Director');
        expect(response.body).to.have.property('Actors');
    });
});