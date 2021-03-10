/**
 * Api
 */

import 'dotenv/config';
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import AppError from '@shared/errors/AppError';
import mainRoutes from '../routes';
import '@shared/containers/index';

// Creating api object
const api = express();

// Using JSON
api.use(express.json());

// Using the main file routes
api.use(mainRoutes);

// Using App Error when requests fails
api.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.status).json({ error: error.message });
    }

    return res.status(500).json({ error: 'Internal server error' });
});

export default api;
