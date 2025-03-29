const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://virajrao665:viraj123@cluster0.yowu9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}