module.exports = {
    tables: [
        {
            TableName: "PeliculasTest",
            BillingMode: "PAY_PER_REQUEST",
            AttributeDefinitions: [
                {
                    AttributeName: "episodio_id",
                    AttributeType: "N"
                }
            ],
            KeySchema: [
                {
                    AttributeName: "episodio_id",
                    KeyType: "HASH"
                }
            ]
        }
    ]
}