/**
 * Save user permission level
 */

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { Request, Response, NextFunction } from 'express';

const savePermissionLevel = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    const { id } = req.user;

    const usersRepository = new UsersRepository();

    const userData = await usersRepository.findById(id);

    req.user.permission_level = userData?.permission_level;

    return next();
};

export default savePermissionLevel;
