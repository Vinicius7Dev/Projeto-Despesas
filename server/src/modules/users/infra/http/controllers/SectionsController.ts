/**
 * Sections controller
 */

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSectionService from '@modules/users/services/CreateSectionService';

class SectionsController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            // Instantiate service
            const createSectionService = container.resolve(
                CreateSectionService,
            );

            // Getting section data from request body
            const { username, password } = req.body;

            // Creating a new section
            const userToken = await createSectionService.execute({
                username,
                password,
            });

            return res.json(userToken).status(201);
        } catch (error) {
            return res.json({ error: error.message }).status(400);
        }
    }
}

export default SectionsController;
