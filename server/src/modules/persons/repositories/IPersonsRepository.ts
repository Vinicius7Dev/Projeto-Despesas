/**
 * Interface: Persons repository
 */

import ICreatePersonDTO from '../dtos/ICreatePersonDTO';
import IUpdatePersonDTO from '../dtos/IUpdatePersonDTO';
import Person from '../infra/typeorm/entities/Person';

interface IPersonsRepository {
    index(id?: string): Promise<Person[]>;
    create(data: ICreatePersonDTO): Promise<Person>;
    update(data: IUpdatePersonDTO): Promise<Person>;
    delete(id: string): Promise<void>;
}

export default IPersonsRepository;
