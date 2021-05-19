import express from 'express';

import {Routes} from "./routes/Routes";
import './database';

class App {
    public app: express.Application;
    private routes: Routes = new Routes();

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes.router(this.app);
    }

    private middlewares(){
        this.app.use(express.json());
    }
}

export default new App().app