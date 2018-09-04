import express from 'express';
import auth from './routes/auth';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});

/*
*Routes define
*/
app.use('/api/auth', auth);




app.listen(8080, () => console.log('Port is on 8080'));
