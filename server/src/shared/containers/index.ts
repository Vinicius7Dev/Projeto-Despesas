/**
 * Main containers controller
 */

import { container } from 'tsyringe';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import PersonsRepository from '@modules/persons/infra/typeorm/repositories/PersonsRepository';

import '@modules/users/providers';
import ITransactionFormsRepository from '@modules/persons/repositories/ITransactionFormsRepository';
import TransactionFormsRepository from '@modules/persons/infra/typeorm/repositories/TransactionFormsRepository';

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
);

container.registerSingleton<IPersonsRepository>(
    'PersonsRepository',
    PersonsRepository,
);

container.registerSingleton<ITransactionFormsRepository>(
    'TransactionFormsRepository',
    TransactionFormsRepository,
);
