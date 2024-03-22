// require('dotenv').config()
import dotenv from "dotenv"
dotenv.config()

import connectDB from "./db/index.js";
import {app} from "./app.js"

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is listening on ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("Mongo DB Connection Failed! ", err)
})









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