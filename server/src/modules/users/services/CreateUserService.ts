/**
 * Create user service
 */

import { injectable, inject } from 'tsyringe';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepositoru: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) {}

    public async execute({
        username,
        password,
        permission_level,
    }: ICreateUserDTO): Promise<User> {
        // Check if username is alread register in database
        const findedUserWithSameUsername = await this.usersRepositoru.findByUsername(
            username,
        );

        if (findedUserWithSameUsername) {
            throw new Error('this username is already exists.');
        }

        // Generate password hash
        const passwordHashed = await this.hashProvider.generate(password);

        // Creating a new user
        const createdUser = await this.usersRepositoru.create({
            username,
            password: passwordHashed,
            permission_level,
        });

        return createdUser;
    }
}

export default CreateUserService;