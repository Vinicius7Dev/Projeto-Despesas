/**
 * Users Controller
 */

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';

class UsersController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            // Create instance of service
            const createUserService = container.resolve(CreateUserService);

            // Getting user data from request body
            const { username, password, permission_level } = req.body;

            // Create a new user
            const createdUser = await createUserService.execute({
                username,
                password,
                permission_level,
            });

            return res.json(createdUser).status(201);
        } catch (error) {
            return res.json({ error: error.message }).status(400);
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            // Create instance of service
            const deleteUserService = container.resolve(DeleteUserService);

            // Getting data from request
            const { id: delete_user_id } = req.params;
            const { id: authenticated_user_id } = req.user;

            // Deleting user
            await deleteUserService.execute(
                delete_user_id,
                authenticated_user_id,
            );

            return res.send().status(204);
        } catch (error) {
            return res.json({ error: error.message }).status(400);
        }
    }
}

export default UsersController;
