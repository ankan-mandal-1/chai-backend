// require('dotenv').config()
import dotenv from "dotenv"
dotenv.config()

import connectDB from "./db/index.js";



console.log(process.env.PORT)
connectDB()


/*
(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("ERR: ", error)
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on PORT ${process.env.PORT}`);
       })

    } catch (error) {
        console.error("ERROR ", error)
        throw err
    }
})()

*/