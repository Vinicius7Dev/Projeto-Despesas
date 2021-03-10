/**
 * Transaction forms repository
 */

import ICreateTransactionFormDTO from '@modules/persons/dtos/ICreateTransactionFormDTO';
import ITransactionFormsRepository from '@modules/persons/repositories/ITransactionFormsRepository';
import { getRepository, Repository } from 'typeorm';
import TransactionForm from '../entities/TransactionForm';

class TransactionFormsRepository implements ITransactionFormsRepository {
    private repository: Repository<TransactionForm>;

    constructor() {
        this.repository = getRepository(TransactionForm);
    }

    // Create a new transaction form
    public async create({
        title,
        person_id,
    }: ICreateTransactionFormDTO): Promise<TransactionForm> {
        const createdTransactionForm = await this.repository.create({
            title,
            person_id,
        });

        await this.repository.save(createdTransactionForm);

        return createdTransactionForm;
    }

    // Delete transaction form (setting enabled as false)
    public async delete(id: string): Promise<void> {
        const findedTransactionForm = await this.repository.findOne({
            where: { id },
        });

        if (findedTransactionForm) {
            findedTransactionForm.enabled = false;

            await this.repository.save(findedTransactionForm);
        }
    }
}

export default TransactionFormsRepository;
