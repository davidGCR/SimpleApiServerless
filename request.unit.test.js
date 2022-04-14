const request = require('./request');
test('Request is an object', ()=>{
    expect(typeof request).toBe('object');
});

test('Request object correct', () => {
    const res = request.createRequest(
        {
            titulo: "My test movie",
            episodio_id: 100,
            creado: "2021-12-10T14:23:31.880000Z",
            editado: "2021-12-20T19:49:45.256000Z",
            url: "url.test.pe"
        }
    );
    // expect(res.statusCode).toBe(200);
    expect(typeof res).toBe('object');
    expect(typeof res.titulo).toBe('string');
    expect(typeof res.episodio_id).toBe('number');
    expect(typeof res.creado).toBe('string');
    expect(typeof res.editado).toBe('string');
    expect(typeof res.url).toBe('string');
});
