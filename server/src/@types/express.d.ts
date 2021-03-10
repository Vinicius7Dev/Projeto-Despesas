declare namespace Express {
    export interface Request {
        user: {
            id: string;
            permission_level?: string;
        };
    }
}
