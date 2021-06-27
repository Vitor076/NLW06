import { EntityRepository, Repository } from "typeorm";
import { Compliments } from "../entities/Compliments"

@EntityRepository(Compliments)
class complimentRepositories extends Repository<Compliments>{ }


export { complimentRepositories }