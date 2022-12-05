import routes from './router/index.js'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDatabase from './config/db.js';



const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(cors({
    origin:"*",
}));
routes(app);

dotenv.config({ path: './config/config.env' });
connectDatabase();



app.listen(4000);