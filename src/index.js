import express from 'express';
import auth from './routes/auth';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost:27017/login', {useNewUrlParser: true});

app.use(bodyParser.json());

/*
*Routes define
*/
app.use('/api/auth', auth);




app.listen(8080, () => console.log('Port is on 8080'));
