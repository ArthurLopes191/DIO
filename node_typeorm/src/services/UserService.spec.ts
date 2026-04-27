import { UserService } from "./UserService";
import * as jwt from 'jsonwebtoken'

jest.mock('../repository/UserRepository')
jest.mock('../database', () => {
    initialize: jest.fn()
})
jest.mock('jsonwebtoken')

const mockUserRepository = require('../repository/UserRepository')
describe('UserService', () => {
    const userService = new UserService(mockUserRepository);
    const mockUser = {
        id_user: '123456',
        name: 'Nath',
        email: 'nath@dio.com',
        password: 'password'
    }

    it('Deve adicionar um novo usuário', async () => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
        const response = await userService.createUser('nath', 'nath@test.com', '12345');
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject({
            id_user: '123456',
            name: 'Nath',
            email: 'nath@dio.com',
            password: 'password'
        })
    })

    it('Devo retornar um token de usuário', async () => {
        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(mockUser))
        jest.spyOn(jwt, 'sign').mockImplementation(()=> 'token')
        const token = await userService.getToken('nath@test.com', '123456')
        expect(token).toBe('token')
    })

    it('Deve retornar um erro, caso não encontre um usuario', async () => {
        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(null))
        await expect(userService.getToken('invalid@test.com', '123456')).rejects.toThrowError(new Error('Email/password invalid!'))
    })

})
