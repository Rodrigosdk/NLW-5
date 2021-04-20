import express from 'express';
import router from './router'
const app = express();

app.get('/', router)

app.listen(3333, () => console.log('server online'));