/**
 * Delete user service
 */

import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class DeleteUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async execute(
        delete_user_id: string,
        authenticated_user_id: string,
    ): Promise<void> {
        // Getting authenticated user id
        const authenticatedUser = await this.usersRepository.findById(
            authenticated_user_id,
        );

        // Check if user exists
        if (!authenticatedUser) {
            throw new AppError('no user authenticated.');
        }

        // Check if user have permission
        if (authenticatedUser.permission_level !== 'ADM') {
            throw new AppError('do you no have permission.');
        }

        await this.usersRepository.delete(delete_user_id);
    }
}

export default DeleteUserService;
