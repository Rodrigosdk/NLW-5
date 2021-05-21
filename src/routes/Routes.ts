import { Application } from 'express';

import { SettingsController } from '../controller/SettingController';
import { UserController } from '../controller/UserController';
import { MenssageController } from '../controller/MenssageController';

export class A {
    private settingsController: SettingsController = new SettingsController();
    private userController: UserController = new UserController();
    private menssageController: MenssageController = new MenssageController();

    public init(app: Application): void {
        app.post('/settings', this.settingsController.create);
        app.post('/users', this.userController.create);
        app.post('/menssages', this.menssageController.create);

    }
}