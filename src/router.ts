import { Router} from 'express';

import {SettingsController} from './controller/settingController';

const routers = Router();

const settingsController = new SettingsController()

routers.post('/settings', settingsController.create)

export {routers}