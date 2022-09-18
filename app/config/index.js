const config = {
    app: {
        port: process.env.PORT || 3000,
    },

    db:{
        uri:process.env.MONGODB_URI || "mongodb+srv://contactbook:contactbook@cluster0.1xqw2gr.mongodb.net/contactbook?retryWrites=true&w=majority"
    }
};
module.exports = config;