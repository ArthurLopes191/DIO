import { describe, expect, it, jest } from '@jest/globals';
import { Request } from 'express';
import { makeMockResponse } from '../__mocks__/mockResponse.mock.js';
import { UserService } from "../services/UserService.js";
import { UserController } from "./UserController.js";

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn()
    }
    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@dio.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({message: 'Usuário Criado'})
    })
})