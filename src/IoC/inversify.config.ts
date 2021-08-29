import { Container } from 'inversify';

import TYPES from './types';

import UserRepository from '../interfaces/user.repository';

import SqliteUserRepository from "../repositories/user.sqlite";
import MySqlUserRepository from "../repositories/user.mysql";
import UserControllerDi from "../controllers/user.di";

const container = new Container();

container.bind<UserRepository>(TYPES.SqliteUserRepository).to(SqliteUserRepository);
container.bind<UserRepository>(TYPES.MySqlUserRepository).to(MySqlUserRepository);
container.bind<UserControllerDi>(UserControllerDi).toSelf();

export default container;
