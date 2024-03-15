import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    // auth: {
    //     username: process.env.MONGO_USER,
    //     password: process.env.MONGO_PASS
    // },
    // authSource: 'admin'
})
.then((db) => console.log('Database connected'))
.catch((err) => console.error(err))