import { getCustomRepository } from "typeorm";
import { SettingRepository } from "../repository/SettingRepository";

interface ISettingsCreate {
  chat: boolean;
  userName: string;
}

class SettingsServices {
  async create({ chat, userName }: ISettingsCreate) {
    const settingRepository = getCustomRepository(SettingRepository);

    const userAlreadyExists = await settingRepository.findOne({
      userName,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const settings = settingRepository.create({
      chat,
      userName,
    });

    await settingRepository.save(settings);

    return settings;
  }
}

export { SettingsServices };
