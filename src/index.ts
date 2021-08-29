import 'reflect-metadata';

import UserController from "./controllers/user";
import container  from './IoC/inversify.config';
import UserControllerDi from "./controllers/user.di";

const bootstrap = () => {
 const userController = new UserController();
 userController.createUser('Jotaro');
}

const bootstrapWithDi = () => {
 const userController = container.get<UserControllerDi>(UserControllerDi);
 userController.createUser('Josuke');
}


bootstrap();
bootstrapWithDi();
