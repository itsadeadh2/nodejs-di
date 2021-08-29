import UserRepository from "../interfaces/user.repository";
import SqliteUserRepository from "../repositories/user.sqlite";

export default class UserController {
    public userRepository: UserRepository;
    constructor() {
        this.userRepository= new SqliteUserRepository();
    }
    createUser(name: string) {
        this.userRepository.save(name);
    }
}
