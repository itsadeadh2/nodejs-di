import UserRepository from "../interfaces/user.repository";
import {injectable} from "inversify";

@injectable()
export default class MySqlUserRepository implements UserRepository{
    save(name: string) {
        console.log(`User '${name}' saved using the MySql Repository!`)
    }
}
