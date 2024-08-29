import express from 'express';
import cors from 'cors';
import route from './registerRoutes.js';
import dotenv from 'dotenv';

const app = express()

app.use(cors());
app.use(express.urlencoded({extended: true}));

dotenv.config({ path: '.env' });
route(app);

export default app;