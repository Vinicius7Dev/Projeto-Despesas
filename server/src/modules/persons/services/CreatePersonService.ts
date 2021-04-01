/**
 * Create person service
 */
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import ICreatePersonDTO from '../dtos/ICreatePersonDTO';
import Person from '../infra/typeorm/entities/Person';
import IPersonsRepository from '../repositories/IPersonsRepository';
import ITransactionFormsRepository from '../repositories/ITransactionFormsRepository';

@injectable()
class CreatePersonService {
    constructor(
        @inject('PersonsRepository')
        private personsRepository: IPersonsRepository,

        @inject('TransactionFormsRepository')
        private transactionFormsRepository: ITransactionFormsRepository,
    ) {}

    public async execute({
        name,
        transaction_forms,
    }: ICreatePersonDTO): Promise<Person> {
        // Check if exists person with same name
        const personWithSameName = await this.personsRepository.findByName(
            name,
        );

        if (personWithSameName) {
            throw new AppError('person name already exists.');
        }

        // Creating person
        const createdPerson = await this.personsRepository.create({
            name,
        });

        // Creating transaction forms
        transaction_forms.forEach(async transaction => {
            await this.transactionFormsRepository.create({
                title: transaction,
                person_id: createdPerson.id,
            });
        });

        return createdPerson;
    }
}

export default CreatePersonService;
