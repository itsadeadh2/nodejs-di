import UserRepository from "../interfaces/user.repository";
import {inject, injectable} from "inversify";
import TYPES from "../IoC/types";

@injectable()
export default class UserControllerDi {
    constructor(@inject(TYPES.SqliteUserRepository) private readonly userRepository: UserRepository) {
    }

    createUser(name: string) {
        this.userRepository.save(name);
    }
}
