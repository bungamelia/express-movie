const ApiCall = require("../models/appModel.js");
const fetch = require('node-fetch');
require('dotenv').config()

exports.search = async (request, response) => {
    try {
        const keyword = request.params.keyword;
        const page = request.params.page;
        const apiKey = process.env.API_KEY;
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&page=${page}`;
        const fetchRes = await fetch(url);
        const result = await fetchRes.json();

        const apiCall = new ApiCall({
            endpoint: "GET /search",
            parameter: `${keyword}, ${page}`
        });

        ApiCall.create(apiCall, (err, data) => {
            if (err){
                response.status(500).send({ message: err.message || "Some error occurred while creating." });
            }
        });

        response.status(200).send(result)
    } catch(error) {
        console.error(error);
    }
};

exports.detail = async (request, response) => {
    try {
        const movieId = request.params.movieid;
        const apiKey = process.env.API_KEY;
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`;
        const fetchRes = await fetch(url);
        const result = await fetchRes.json();

        const apiCall = new ApiCall({
            endpoint: "GET /detail",
            parameter: movieId
        });
          
        ApiCall.create(apiCall, (err, data) => {
            if (err){
                response.status(500).send({ message: err.message || "Some error occurred while creating." });
            }
        });

        response.status(200).send(result)
    } catch(error) {
        console.error(error);
    }
};
