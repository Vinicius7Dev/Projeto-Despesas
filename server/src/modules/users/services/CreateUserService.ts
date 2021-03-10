/**
 * Create user service
 */

import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import permissionConfig from '@config/permissionConfig';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) {}

    public async execute({
        username,
        password,
        permission_level,
        permission_code,
    }: ICreateUserDTO): Promise<User> {
        // Check if permission code is correct
        const { permissionCodes } = permissionConfig;

        if (permission_code !== permissionCodes.adm) {
            throw new AppError('Invalid adm permission code.', 401);
        }

        // Check if username is alread register in database
        const findedUserWithSameUsername = await this.usersRepository.findByUsername(
            username,
        );

        if (findedUserWithSameUsername) {
            throw new AppError('this username is already exists.');
        }

        // Generate password hash
        const passwordHashed = await this.hashProvider.generate(password);

        // Creating a new user
        const createdUser = await this.usersRepository.create({
            username,
            password: passwordHashed,
            permission_level,
        });

        return createdUser;
    }
}

export default CreateUserService;
