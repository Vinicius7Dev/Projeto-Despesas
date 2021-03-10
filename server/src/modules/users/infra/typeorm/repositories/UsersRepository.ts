/**
 * Users repository
 */

import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    // Find by id
    public async findById(id: string): Promise<User | undefined> {
        const findedUser = await this.repository.findOne({ where: { id } });

        return findedUser;
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
    }: Omit<ICreateUserDTO, 'permission_code'>): Promise<User> {
        const createdUser = await this.repository.create({
            username,
            password,
            permission_level,
        });

        await this.repository.save(createdUser);

        return createdUser;
    }

    // Remove user
    public async delete(id: string): Promise<void> {
        // Check if this user exists
        const findedUser = await this.repository.findOne({ where: { id } });

        if (findedUser) {
            // Delete user
            await this.repository.remove(findedUser);
        }
    }
}

export default UsersRepository;
