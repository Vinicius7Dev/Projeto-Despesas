/**
 * Sections controller
 */

import { Request, Response } from 'express';

class SectionsController {
    public async create(req: Request, res: Response): Promise<Response> {
        return res.json({ message: 'creating section' }).status(201);
    }
}

export default SectionsController;
