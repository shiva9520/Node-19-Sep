const mongoose = require('mongoose')

const connectToMongoDB = async () => {
    try {
       let connect= await mongoose.connect(`mongodb://localhost:27017/batch-new`)
        console.log("connection created...");        
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectToMongoDB