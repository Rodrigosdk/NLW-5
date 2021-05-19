import { Request, Response } from "express";

import { UsersServices } from "../services/UsersServices";

export class UserController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;

        const usersServices = new UsersServices();

        try {
            const user = await usersServices.create(email);
            return response.json(user);
        } catch (error) {
            return response.status(400).json({
                menssage: error.menssage,
            });
        }
    }
}