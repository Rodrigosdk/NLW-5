import {Request, Response} from 'express'
import { getCustomRepository } from 'typeorm';

import {SettingRepository} from "../repository/SettingRepository"

class SettingsController{
    async create(request:Request, response:Response) {
    const {chat, userName} =  request.body
    const settingRepository = getCustomRepository(SettingRepository);
   
    const settings = settingRepository.create({
        chat,
        userName
    });
    
    await settingRepository.save(settings);

    return response.json(settings)
}}
export {SettingsController}