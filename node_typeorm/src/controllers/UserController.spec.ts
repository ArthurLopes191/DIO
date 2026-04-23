import { Request } from 'express';
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { UserController } from "./UserController";

const mockUserService = {
    createUser: jest.fn()
}

jest.mock('../services/UserService', () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return mockUserService
        })
    }
})
describe('UserController', () => {
    
    const userController = new UserController();

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@test.com',
                password: 'password'
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
                email: 'nath@test.com',
                password: 'password'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Todos os campos são obrigatórios' })
    })

    it('Deve mostrar mensagem de erro caso o usuario não informe o email', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: '',
                password: 'password'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Todos os campos são obrigatórios' })
    })

    it('Deve mostrar mensagem de erro caso o usuario não informe o password', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@dio.com',
                password: ''
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Todos os campos são obrigatórios' })
    })

    // it('Deve deletar um usuário', () => {
    //     const mockRequest = {
    //         body: {
    //             email: 'nath@test.com'
    //         }
    //     } as Request
    //     const mockResponse = makeMockResponse()
    //     userController.deleteUser(mockRequest, mockResponse)
    //     expect(mockResponse.state.status).toBe(200)
    //     expect(mockResponse.state.json).toMatchObject({message: 'Usuário deletado'})
    // })
})
