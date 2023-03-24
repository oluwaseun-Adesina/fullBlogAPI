const mongoose = require("mongoose");


const dbConnect = async () =>{
    try {
        await mongoose.connect(process.env.dbURL)
        console.log(`Database Connection was successful`)
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

dbConnect()