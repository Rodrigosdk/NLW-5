import express from 'express';
import {home} from './router/home'
const app = express();

app.get('/',home)

app.listen(3333, () => console.log('server online'));