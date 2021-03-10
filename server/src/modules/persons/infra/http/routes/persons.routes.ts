/**
 * Persons routes
 */

import { Router } from 'express';
import authMiddleware from '@modules/users/infra/http/middlewares/authMiddleware';
import saveUserPermission from '@shared/infra/http/middlewares/saveUserPermission';
import PersonsController from '../controllers/PersonsController';

const personsRouter = Router();
const personsController = new PersonsController();

personsRouter.get(
    '/',
    authMiddleware,
    saveUserPermission,
    personsController.index,
);
personsRouter.post(
    '/',
    authMiddleware,
    saveUserPermission,
    personsController.create,
);
personsRouter.put(
    '/:id',
    authMiddleware,
    saveUserPermission,
    personsController.update,
);
personsRouter.delete(
    '/:id',
    authMiddleware,
    saveUserPermission,
    personsController.delete,
);

export default personsRouter;
