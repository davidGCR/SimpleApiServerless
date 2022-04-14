const response = require('./response');
test('Response is an object', ()=>{
    expect(typeof response).toBe('object');
});

test('200 works', () => {
    const res = response._200({name: 'David'});
    expect(res.statusCode).toBe(200);
    expect(typeof res.body).toBe('string');
});

test('400 works', () => {
    const res = response._400({name: 'David'});
    expect(res.statusCode).toBe(400);
    expect(typeof res.body).toBe('string');
});

test('500 works', () => {
    const res = response._500({name: 'David'});
    expect(res.statusCode).toBe(500);
    expect(typeof res.body).toBe('string');
});


test('500 works', () => {
    const res = response.createResponse(300, {name: 'David'});
    expect(res.statusCode).toBe(300);
    expect(res.body).toBe(JSON.stringify({name: 'David'}));
});