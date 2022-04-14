const response = {
    createResponse(statusCode, data={}) {
        return {
          statusCode: statusCode,
          body: JSON.stringify(data)
        };
    },
    _200(data={}){
        return this.createResponse(200, data)
    },
    _400(data={}){
        return this.createResponse(400, data)
    },
    _500(data={}){
        return this.createResponse(500, data)
    }
}

module.exports = response;