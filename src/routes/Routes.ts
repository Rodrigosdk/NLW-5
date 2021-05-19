import { SettingsController } from '../controller/SettingController';
import { UserController } from '../controller/UserController';
import { MenssageController } from '../controller/MenssageController';

export class Routes {
    private settingsController: SettingsController = new SettingsController();
    private userController: UserController = new UserController();
    private menssageController: MenssageController = new MenssageController();

    public router(app): void {
        app.post('/settings', this.settingsController.create);
        app.post('/users', this.userController.create);
        app.post('/menssages', this.menssageController.create);

    }
}