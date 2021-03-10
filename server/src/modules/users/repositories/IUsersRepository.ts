/**
 * Interface: Users repository
 */

import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

interface IUsersRepository {
    findById(id: string): Promise<User | undefined>; // Find user by id
    findByUsername(username: string): Promise<User | undefined>; // Find user by username
    create(data: Omit<ICreateUserDTO, 'permission_code'>): Promise<User>; // Create a new user
    delete(id: string): Promise<void>; // Delete user
}

export default IUsersRepository;
