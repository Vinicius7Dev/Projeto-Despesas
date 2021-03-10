/**
 * Persons repository
 */

import ICreatePersonDTO from '@modules/persons/dtos/ICreatePersonDTO';
import IPersonsRepository from '@modules/persons/repositories/IPersonsRepository';
import { getRepository, Repository } from 'typeorm';
import Person from '../entities/Person';

class PersonsRepository implements IPersonsRepository {
    private repository: Repository<Person>;

    constructor() {
        this.repository = getRepository(Person);
    }

    // Getting all persons
    public async index(): Promise<Person[]> {
        const persons = await this.repository.find();

        return persons;
    }

    // Creating a new person
    public async create({ name }: ICreatePersonDTO): Promise<Person> {
        const createdPerson = await this.repository.create({
            name,
        });

        await this.repository.save(createdPerson);

        return createdPerson;
    }

    // Updating person data
    public async update(person: Person): Promise<Person> {
        const updatedPerson = await this.repository.save(person);

        return updatedPerson;
    }

    // Delete person (setting enabled as false)
    public async delete(id: string): Promise<void> {
        const findedPerson = await this.repository.findOne({ where: { id } });

        if (findedPerson) {
            findedPerson.enabled = false;

            await this.repository.save(findedPerson);
        }
    }
}

export default PersonsRepository;
