import { Request, Response, Router } from 'express';

import { UserController } from './controller/UserController.js';

const userController = new UserController();

export const router = Router();

router.post('/user', userController.createUser)
router.get('/user', userController.getAllUsers)
router.delete('/user', (request: Request, response: Response) => {
    const user = request.body
    return response.status(200).json({message: 'Usuário deletado'})
})
