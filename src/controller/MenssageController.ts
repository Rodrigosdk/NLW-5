import { Request, Response } from "express";

import { MenssagesServices } from "../services/MenssagesServices";

export class MenssageController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { admin_id, user_id, text } = request.body;

        const menssagesServices = new MenssagesServices();

        const menssage = await menssagesServices.create({
            admin_id,
            user_id,
            text
        });
        
        return response.json(menssage);
    }
}