import { Request, Response } from 'express';
import { registerUser } from '../service/userService';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { uid, password, name } = req.body;
        const user = await registerUser(uid, password, name);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};