/**
 * Main containers controller
 */

import { container } from 'tsyringe';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import PersonsRepository from '@modules/persons/infra/typeorm/repositories/PersonsRepository';

import ITransactionFormsRepository from '@modules/persons/repositories/ITransactionFormsRepository';
import TransactionFormsRepository from '@modules/persons/infra/typeorm/repositories/TransactionFormsRepository';

container.registerSingleton<IPersonsRepository>(
    'PersonsRepository',
    PersonsRepository,
);

container.registerSingleton<ITransactionFormsRepository>(
    'TransactionFormsRepository',
    TransactionFormsRepository,
);
