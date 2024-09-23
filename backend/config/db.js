
import mongoose from "mongoose"
import dotenv from "dotenv"

export const ConnectDB = async function () {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongodb connected: ${conn.connection.host}`)
    }
    catch(err) {
        console.log("error: " + err)
        process.exit(1)
    }
}
