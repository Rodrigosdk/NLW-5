import {SettingsController} from '../controller/settingController';

export class Routes {
    private settingsController: SettingsController = new SettingsController();
    
    public router(app){
        app.post('/settings', this.settingsController.create)
    }
}