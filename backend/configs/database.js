const mongoose = require("mongoose")

const dbURL = "mongodb+srv://athmakurukavya8_db_user:Akinnera%408oa@vault-database.rdo8ry0.mongodb.net/";

//connecting to databse
const connectDb = async ()=>{
    await mongoose.connect(dbURL)
    .then(()=>{
        console.log("Connected to database...");  
    })
    .catch((err)=>{
        console.log("Unable to connect database...");
    })
}

module.exports = {connectDb};