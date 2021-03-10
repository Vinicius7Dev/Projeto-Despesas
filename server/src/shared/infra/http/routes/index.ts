/**
 * Main routes
 */

import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sectionsRouter from '@modules/users/infra/http/routes/sections.routes';
import personsRouter from '@modules/persons/infra/http/routes/persons.routes';

const mainRouter = Router();

mainRouter.use('/users', usersRouter);
mainRouter.use('/sections', sectionsRouter);
mainRouter.use('/persons', personsRouter);

export default mainRouter;
