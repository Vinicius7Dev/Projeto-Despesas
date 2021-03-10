/**
 * Interface: Persons repository
 */

import ICreatePersonDTO from '../dtos/ICreatePersonDTO';
import Person from '../infra/typeorm/entities/Person';

interface IPersonsRepository {
    index(): Promise<Person[]>;
    create(data: ICreatePersonDTO): Promise<Person>;
    update(person: Person): Promise<Person>;
    delete(id: string): Promise<void>;
}

export default IPersonsRepository;
