/**
 * Interface: Persons repository
 */

import ICreatePersonDTO from '../dtos/ICreatePersonDTO';
import Person from '../infra/typeorm/entities/Person';

interface IPersonsRepository {
    findById(id: string): Promise<Person | undefined>;
    findByName(name: string): Promise<Person | undefined>;
    index(): Promise<Person[]>;
    create(data: Omit<ICreatePersonDTO, 'transaction_forms'>): Promise<Person>;
    update(person: Person): Promise<Person>;
    delete(id: string): Promise<void>;
}

export default IPersonsRepository;
