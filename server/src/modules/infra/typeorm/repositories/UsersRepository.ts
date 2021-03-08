/**
 * Users repository
 */

import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from 'modules/dtos/ICreateUserDTO';
import IUsersRepository from 'modules/repositories/IUsersRepository';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    // Find user by username
    public async findByUsername(username: string): Promise<User | undefined> {
        const findedUser = await this.repository.findOne({
            where: { username },
        });

        return findedUser;
    }

    // Creating a new user
    public async create({
        username,
        password,
        permission_level,
    }: ICreateUserDTO): Promise<User> {
        const createdUser = await this.repository.create({
            username,
            password,
            permission_level,
        });

        await this.repository.save(createdUser);

        return createdUser;
    }
}

export default UsersRepository;
