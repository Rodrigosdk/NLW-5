import {SettingsController} from '../controller/settingController';

export class Routes {
    public settingsController: SettingsController = new SettingsController();
    
    public router(app){
        app.post('/settings', this.settingsController.create)
    }
}