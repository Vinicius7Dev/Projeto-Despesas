/**
 * Interface: Users repository
 */

import User from 'modules/infra/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

interface IUsersRepository {
    findByUsername(username: string): Promise<User | undefined>;
    create(data: ICreateUserDTO): Promise<User>;
}

export default IUsersRepository;
