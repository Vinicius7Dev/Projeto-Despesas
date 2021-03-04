/**
 * Main routes
 */

import { Router } from 'express';

const mainRouter = Router();

mainRouter.get('/', (request, response) => {
    return response.json({ message: 'Request complete!' });
});

export default mainRouter;
