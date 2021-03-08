/**
 * Api
 */

import 'reflect-metadata';
import express from 'express';
import mainRoutes from '../routes';
import '@shared/containers/index';

// Creating api object
const api = express();

// Using JSON
api.use(express.json());

// Using the main file routes
api.use(mainRoutes);

export default api;
