const AWS = require('aws-sdk');

// const {DocumentClient} = require('aws-sdk/clients/dynamodb');

const isTest = process.env.JEST_WORKER_ID;
const config = {
  convertEmptyValues: true,
  ...(isTest && {
    endpoint: 'localhost:8000',
    sslEnabled: false,
    region: 'local-env',
  }),
};

// const ddb = new DocumentClient(config);
const dynamodb = new AWS.DynamoDB.DocumentClient(config);

// const TABLE_NAME = process.env.TABLE_NAME

const dynamoManager = {
    async getFilm(params) {
        return await dynamodb.get(params).promise().then(res=>{
            console.log('Success response dynamo get: ', res);
            return res.Item;
        });
    },
    async saveFilm(params){
        return await dynamodb.put(params).promise().then(res=>{
            console.log('Success response dynamo put: ', res);
            return {episodio_id: params.Item.episodio_id};
        });
    },
    // async createFilm(item){
    //     const params = {
    //         TableName: TABLE_NAME,
    //         Item: item
    //     };
    
    //     try {
    //         data = await dynamodb.put(params).promise();
    //     } catch (error) {
    //         console.log('error en dynamo: ',error);
    //         return {err: error, result: null};
    //     }
    //     return {result: params.Item};
    // }
    
};

module.exports = dynamoManager;

