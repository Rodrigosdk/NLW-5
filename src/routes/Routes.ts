import { SettingsController } from '../controller/SettingController';
import { UserController } from '../controller/UserController'


export class Routes {
    private settingsController: SettingsController = new SettingsController();
    private userController: UserController = new UserController();
    
    public router(app): void {
        app.post('/settings', this.settingsController.create);
        app.post('/users', this.userController.create);

    }
}