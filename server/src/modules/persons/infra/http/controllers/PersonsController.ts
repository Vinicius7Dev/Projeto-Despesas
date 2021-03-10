/**
 * Persons controller
 */
import { Request, Response } from 'express';

class PersonsController {
    public async index(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ message: 'list persons' });
    }

    public async create(req: Request, res: Response): Promise<Response> {
        return res.status(201).json({ message: 'create person' });
    }

    public async update(req: Request, res: Response): Promise<Response> {
        return res.status(201).json({ message: 'update person' });
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        return res.status(204).json({ message: 'delete person' });
    }
}

export default PersonsController;
