import { getCustomRepository } from "typeorm";
import { MenssageRepository } from "../repository/MenssageRepository";

interface IMenssageCreate {
    admin_id?: string;
    user_id: string;
    text: string;
}

export class MenssagesServices {
    public async create({ admin_id, user_id, text }: IMenssageCreate) {
        const menssageRepository = getCustomRepository(MenssageRepository);

        const menssage = menssageRepository.create({
            admin_id,
            user_id,
            text
        });

        await menssageRepository.save(menssage);

        return menssage;
    }
}
