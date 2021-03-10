/**
 * Persons routes
 */

import { Router } from 'express';
import PersonsController from '../controllers/PersonsController';

const personsRouter = Router();
const personsController = new PersonsController();

personsRouter.get('/', personsController.index);
personsRouter.post('/', personsController.create);
personsRouter.put('/:id', personsController.update);
personsRouter.delete('/:id', personsController.delete);

export default personsRouter;
