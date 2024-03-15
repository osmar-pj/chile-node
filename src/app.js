// # CHILE PROJECT
// # by Osmar Palomino
// # GUNJOP COMPANY

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'

import './database.js'

import testRoutes from './routes/test.route.js'
import dataRoutes from './routes/data.route.js'

const app = express()
dotenv.config()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', testRoutes)
app.use('/api', dataRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
}) 

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})