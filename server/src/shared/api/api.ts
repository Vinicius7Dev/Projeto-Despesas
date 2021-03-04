/**
 * Api
 */

import express from 'express';
import mainRoutes from '../routes';

// Creating api object
const api = express();

// Using JSON
api.use(express.json());

// Using the main file routes
api.use(mainRoutes);

export default api;
