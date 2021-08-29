import 'reflect-metadata';

import UserController from "./controllers/user";
import container  from './IoC/inversify.config';
import UserControllerDi from "./controllers/user.di";
import SqliteUserRepository from './repositories/user.sqlite';
import MySqlUserRepository from './repositories/user.mysql';
import PostgresUserRepository from './repositories/user.postgres';

const bootstrap = () => {
    const userController = new UserController();
    userController.createUser('Jonathan');
}

const bootstrapWithDi = () => {
    const connectionString = 'myFakeConnectionString:666';
    const userRepository = new PostgresUserRepository(connectionString);    
    const userController = new UserControllerDi(userRepository);
    userController.createUser('Joseph');
}

const bootstrapWithDiWithInversify = () => {
    const userController = container.get<UserControllerDi>(UserControllerDi);
    userController.createUser('Jotaro');
}


//bootstrap();
bootstrapWithDi();
//bootstrapWithDiWithInversify();
