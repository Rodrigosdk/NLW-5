import {SettingsController} from '../controller/SettingController';

export class Routes {
    private settingsController: SettingsController = new SettingsController();
    
    public router(app){
        app.post('/settings', this.settingsController.create)
    }
}