/**
 * Persons routes
 */

import { Router } from 'express';
import authMiddleware from '@modules/users/infra/http/middlewares/authMiddleware';
import PersonsController from '../controllers/PersonsController';

const personsRouter = Router();
const personsController = new PersonsController();

personsRouter.get('/', authMiddleware, personsController.index);
personsRouter.post('/', authMiddleware, personsController.create);
personsRouter.put('/:id', authMiddleware, personsController.update);
personsRouter.delete('/:id', authMiddleware, personsController.delete);

export default personsRouter;
