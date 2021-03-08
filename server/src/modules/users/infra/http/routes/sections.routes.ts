/**
 * Sections routes
 */

import { Router } from 'express';
import SectionsController from '../controllers/SectionsController';

const sectionsRouter = Router();
const sectionsController = new SectionsController();

sectionsRouter.post('/', sectionsController.create);

export default sectionsRouter;
