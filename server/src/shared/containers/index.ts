/**
 * Main containers controller
 */

import { container } from 'tsyringe';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import '@modules/users/providers';

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
);
