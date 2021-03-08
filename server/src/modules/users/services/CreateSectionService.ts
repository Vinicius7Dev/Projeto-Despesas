/**
 * Create section service
 */

import { injectable, inject } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/authConfig.ts';
import ICreateSectionDTO from '../dtos/ICreateSectionDTO';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface IServiceResponse {
    user: User;
    token: string;
}

@injectable()
class CreateSectionService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) {}

    public async execute({
        password,
        username,
    }: ICreateSectionDTO): Promise<IServiceResponse> {
        // Find user with this username
        const findedUser = await this.usersRepository.findByUsername(username);

        if (!findedUser) {
            throw new Error('this user does not exists.');
        }

        // Compare password with hash
        const isValid = await this.hashProvider.compare(
            password,
            findedUser.password,
        );

        if (!isValid) {
            throw new Error('password incorrect.');
        }

        // Create section token
        const { token } = authConfig;

        const sectionToken = sign({}, token.secret, {
            subject: findedUser.id,
            expiresIn: token.expiresIn,
        });

        return {
            user: findedUser,
            token: sectionToken,
        };
    }
}

export default CreateSectionService;
