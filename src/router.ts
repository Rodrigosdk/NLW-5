import { Router} from 'express';

import {home} from './controller/home';

const router = Router();

router.get('/', home)

export default router