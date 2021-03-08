/**
 * Authentication middleware
 */

import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import authConfig from '@config/authConfig';

interface ITokenProps {
    sub: string;
    exp: number;
    iap: number;
}

const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction,
): Response | void => {
    // Getting authorization token
    const { authorization } = req.headers;

    if (!authorization) {
        throw new Error('token not found.');
    }

    // Removing "Bearer" from token
    const [, token] = authorization.split(' ');

    try {
        // Getting token secret
        const { secret } = authConfig.token;

        // Verify token and getting user data
        const decoded = verify(token, secret) as ITokenProps;

        const { sub: user_id } = decoded;

        req.user = {
            id: user_id,
        };

        return next();
    } catch (error) {
        return res.json({ error: error.message }).status(401);
    }
};

export default authMiddleware;
