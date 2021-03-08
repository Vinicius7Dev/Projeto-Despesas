/**
 * Users Controller
 */
import { Request, Response } from 'express';

class UsersController {
    public async create(req: Request, res: Response): Promise<Response> {
        return res.json({ message: 'creating a new user.' }).status(201);
    }
}

export default UsersController;
