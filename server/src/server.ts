import express from 'express'
import router from './router'
import db from './config/db'
import colors from 'colors'
import cors, { CorsOptions } from 'cors'
import swaggerUi from "swagger-ui-express";
import swaggerSpec, { swaggerUiOptions } from './config/swagger'
import morgan from 'morgan'

// Connect DB

export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log( colors.blue.bold( 'DB Connected' ));
    } catch (error) {
        console.log( colors.red.bold( 'DB Connection Failed' ));
    }
}

connectDB()

// Express Instance
const server = express()

const corsOptions : CorsOptions = {
    origin: function(origin, callback) {
        if(origin === process.env.FRONTEND_URL) {
            callback(null, true)
        }else {
            callback(new Error('CORS error'))
        }
    } 
}

server.use(cors(corsOptions))

// Reading data from forms
server.use(express.json())

server.use(morgan('dev'))

// ROUTING

server.use('/api/products', router)

// DOCS
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server

