import { Request } from 'express';
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { UserService } from '../services/UserService';
import { UserController } from "./UserController";

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn().mockReturnValue([]),
        deleteUser: jest.fn()
    }
    
    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
    })

    it('Deve mostrar mensagem de erro caso o usuario não informe o name', () => {
        const mockRequest = {
            body: {
                name: '',
                email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Name obrigatório' })
    })

    it('Deve mostrar mensagem de erro caso o usuario não informe o email', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: ''
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Email obrigatório' })
    })


    it('Deve chamar a função getAllUsers', () => {
        const mockRequest = {} as Request
        const mockResponse = makeMockResponse()
        userController.getAllUsers(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(200)
    })

    it('Deve deletar um usuário', () => {
        const mockRequest = {
            body: {
                email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.deleteUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({message: 'Usuário deletado'})
    })
})
