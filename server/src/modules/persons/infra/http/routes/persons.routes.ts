/**
 * Persons routes
 */

import { Router } from 'express';
import checkADMCredentials from '@shared/infra/http/middlewares/checkADMCredentials';
import PersonsController from '../controllers/PersonsController';

const personsRouter = Router();
const personsController = new PersonsController();

personsRouter.get('/', checkADMCredentials, personsController.index);
personsRouter.post('/', checkADMCredentials, personsController.create);
personsRouter.put('/:id', checkADMCredentials, personsController.update);
personsRouter.delete('/:id', checkADMCredentials, personsController.delete);

export default personsRouter;
