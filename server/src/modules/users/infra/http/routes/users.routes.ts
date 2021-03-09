/**
 * Users routes
 */

import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

// User routes
usersRouter.post('/', usersController.create);
usersRouter.delete('/:id', authMiddleware, usersController.delete);

export default usersRouter;
