import express from 'express';

import {routers} from "./router";
import './database';

const app = express();

app.use(express.json());
app.use(routers)

app.listen(3333, () => console.log('server online'));