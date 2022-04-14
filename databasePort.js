const dynamoManager = require('./dynamoManager');

module.exports.saveFilm = async item => {
    const params = {
        TableName: process.env.TABLE_NAME,
        Item: item
    };
    return await dynamoManager.saveFilm(params);
}

module.exports.saveFilm2 = async item => {
    const params = {
        TableName: 'Peliculas',
        Item: item
    };
    return await dynamoManager.saveFilm(params);
}

module.exports.getFilm = async id => {
    const params = {
        Key: {
            episodio_id: id
        },
        TableName: process.env.TABLE_NAME,
    };
    return await dynamoManager.getFilm(params);
}