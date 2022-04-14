const request = {
    createRequest(body) {
        FilmObject = {
            episodio_id: body.episodio_id,
            titulo: body.titulo,
            creado: Date.now().toString(),
            editado: Date.now().toString(),
            url: body.url
        }
        return FilmObject;
    },
}

module.exports = request;