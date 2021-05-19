import { Repository, EntityRepository } from "typeorm";
import { Menssages } from "../entities/Menssages";

@EntityRepository(Menssages)
export class MenssageRepository extends Repository<Menssages> {

}
