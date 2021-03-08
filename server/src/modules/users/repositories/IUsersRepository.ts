/**
 * Interface: Users repository
 */

import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

interface IUsersRepository {
    findByUsername(username: string): Promise<User | undefined>; // Find user by username
    create(data: ICreateUserDTO): Promise<User>; // Create a new user
}

export default IUsersRepository;
