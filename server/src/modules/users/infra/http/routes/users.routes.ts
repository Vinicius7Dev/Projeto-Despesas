/**
 * Users routes
 */

import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

// Create user route
usersRouter.post('/', usersController.create);

export default usersRouter;
