import UserRepository from "../interfaces/user.repository";

export default class PostgresUserRepository implements UserRepository {
    constructor(private readonly connectionString: string) {};

    save(name: string): void {
        console.log(`Accessing database using connection: ${this.connectionString}`);
        console.log(`User '${name}' was saved using PostGres!`)
    }

}