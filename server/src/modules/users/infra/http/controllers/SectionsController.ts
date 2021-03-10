/**
 * Sections controller
 */

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSectionService from '@modules/users/services/CreateSectionService';

class SectionsController {
    public async create(req: Request, res: Response): Promise<Response> {
        // Instantiate service
        const createSectionService = container.resolve(CreateSectionService);

        // Getting section data from request body
        const { username, password } = req.body;

        // Creating a new section
        const userToken = await createSectionService.execute({
            username,
            password,
        });

        return res.status(201).json(userToken);
    }
}

export default SectionsController;
