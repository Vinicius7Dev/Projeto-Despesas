/**
 * Save user permission level
 */

import { Request, Response, NextFunction } from 'express';
import accessCredentials from '@config/accesCredentials';
import AppError from '@shared/errors/AppError';

const checkADMCredentials = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    const { username, password } = req.headers;

    const {
        username: usernameCredential,
        password: passwordCredential,
    } = accessCredentials.adm;

    if (username === usernameCredential && password === passwordCredential) {
        return next();
    }

    throw new AppError('Invalid permission credentials.');
};

export default checkADMCredentials;
