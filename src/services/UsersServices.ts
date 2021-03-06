import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repository/UserRepository";

export class UsersServices {
    public async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);

        const userExists = await usersRepository.findOne({ email });

        if (userExists) {
            return userExists
        }

        const user = usersRepository.create({ email });

        await usersRepository.save(user);

        return user
    }
}