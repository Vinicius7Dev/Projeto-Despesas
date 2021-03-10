/**
 * Interface: Transaction Forms repository
 */

import ICreateTransactionFormDTO from '../dtos/ICreateTransactionFormDTO';
import TransactionForm from '../infra/typeorm/entities/TransactionForm';

interface ITransactionFormsRepository {
    create(data: ICreateTransactionFormDTO): Promise<TransactionForm>;
    delete(id: string): Promise<void>;
}

export default ITransactionFormsRepository;
