/**
 * Persons controller
 */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePersonService from '@modules/persons/services/CreatePersonService';

class PersonsController {
    public async index(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ message: 'list persons' });
    }

    public async create(req: Request, res: Response): Promise<Response> {
        // Create instance of service
        const createPersonService = container.resolve(CreatePersonService);

        // Getting data from request body
        const { name, transaction_forms } = req.body;
        const { permission_level } = req.user;

        // Create person
        const personCreated = await createPersonService.execute(
            {
                name,
                transaction_forms,
            },
            permission_level,
        );

        return res.status(201).json(personCreated);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        return res.status(201).json({ message: 'update person' });
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        return res.status(204).json({ message: 'delete person' });
    }
}

export default PersonsController;
