import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import db from './config/db';
import configuration from './config/stripe';
dotenv.config({path: path.resolve(__dirname , "./config/.env")})
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
db()
configuration()











const PORT =  process.env.PORT || 8000 
const server = app.listen(PORT, () => {
    console.log(`Server is listing on port ${PORT}`);
  });
 server.on('error', e => console.error("Error", e));







