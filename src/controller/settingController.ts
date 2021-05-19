import { Request, Response } from "express";

import { SettingsServices } from "./../services/SettingsServices";

class SettingsController {
  public async create(request: Request, response: Response) {
    const { chat, userName } = request.body;

    const settingsServices = new SettingsServices();

    try {
      const settings = await settingsServices.create({ chat, userName });
      return response.json(settings);
    } catch (error) {
      return response.status(400).json({
        menssage: error.menssage,
      });
    }
  }
}
export { SettingsController };
