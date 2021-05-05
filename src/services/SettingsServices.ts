import { getCustomRepository } from "typeorm";
import { SettingRepository } from "../repository/SettingRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsServices {
  async create({ chat, username }: ISettingsCreate) {
    const settingRepository = getCustomRepository(SettingRepository);

    const settings = settingRepository.create({
      chat,
      username,
    });

    await settingRepository.save(settings); 
    return settings
  }
}

export { SettingsServices };
