const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
class MongoDB{
    static connect = async(uri) => {
        if(this.client)
            return this.client;
        this.client = await MongoClient.connect(uri);
        return this.client;
    };
}

module.exports = MongoDB;