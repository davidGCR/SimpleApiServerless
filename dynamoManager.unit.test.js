const ddb = require('./dynamoManager')

const item_test = { episodio_id: 100, titulo: 'test' };
const params = { TableName: 'Peliculas', Item: item_test }

it('should insert Film into table', async () => {
    const res = await ddb.saveFilm(params);
    expect(res.episodio_id).toBe(item_test.episodio_id);

    // const {Item} = await ddb.get({TableName: 'files', Key: {id: '1'}}).promise();
    const Item = await ddb.getFilm({
        TableName: params.TableName,
        Key: {
            episodio_id: item_test.episodio_id
        }
    });

    expect(Item).toEqual(item_test);
});

test('should get Film', async () => {
    const Item = await ddb.getFilm({
        TableName: params.TableName,
        Key: {
            episodio_id: item_test.episodio_id
        }
    });

    expect(Item).toEqual(item_test);
});

