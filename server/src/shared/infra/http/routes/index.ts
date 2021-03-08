/**
 * Main routes
 */

import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

const mainRouter = Router();

mainRouter.use('/users', usersRouter);

export default mainRouter;
