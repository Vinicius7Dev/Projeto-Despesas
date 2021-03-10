/**
 * Users Controller
 */

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';

class UsersController {
    public async create(req: Request, res: Response): Promise<Response> {
        // Create instance of service
        const createUserService = container.resolve(CreateUserService);

        // Getting user data from request body
        const {
            username,
            password,
            permission_level,
            permission_code,
        } = req.body;

        // Create a new user
        const createdUser = await createUserService.execute({
            username,
            password,
            permission_level,
            permission_code,
        });

        return res.status(201).json(createdUser);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        // Create instance of service
        const deleteUserService = container.resolve(DeleteUserService);

        // Getting data from request
        const { id: delete_user_id } = req.params;
        const { id: authenticated_user_id } = req.user;

        // Deleting user
        await deleteUserService.execute(delete_user_id, authenticated_user_id);

        return res.status(204).send();
    }
}

export default UsersController;
