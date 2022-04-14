'use strict';
const dynamoManager = require('./databasePort')
const response = require('./response');
const request = require('./request');

module.exports.crearPelicula = async (event, context, callback) => {
  const film = request.createRequest(JSON.parse(event.body));
  const res = await dynamoManager.saveFilm(film);
  // return createResponse(200, res);
  return response._200(res);
};

module.exports.getPelicula = async event => {
  // console.log('event', event);
  if (!event.pathParameters || !event.pathParameters.ID_FILM) {
    // failed without an ID
    return response._400({ message: 'missing the ID from the path' });
  }

  let ID = Number(event.pathParameters.ID_FILM);
  console.log('ID ', typeof ID);
  const pelicula = await dynamoManager.getFilm(ID).catch(err => {
    console.log('error in Dynamo Get', err);
    return null;
  });
  if (!pelicula) {
      return response._500({ message: 'Failed to get pelicula by ID' });
  }
  return response._200({ pelicula });
};