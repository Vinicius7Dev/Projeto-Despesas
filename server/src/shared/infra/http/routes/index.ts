/**
 * Main routes
 */

import { Router } from 'express';
import personsRouter from '@modules/persons/infra/http/routes/persons.routes';

const mainRouter = Router();

mainRouter.use('/persons', personsRouter);

export default mainRouter;
