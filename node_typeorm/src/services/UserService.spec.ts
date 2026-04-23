import {UserService } from "./UserService";

jest.mock('../repository/UserRepository')
jest.mock('../database', () => {
    initialize: jest.fn()
})

const mockUserRepository = require('../repository/UserRepository')
describe('UserService', () => {
    const userService = new UserService(mockUserRepository);

    it('Deve adicionar um novo usuário', async () => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({
            user_id: '12345',
            name: 'Nath',
            email: 'nath@dio.com',
            password: 'password'
        }))
        const response = await userService.createUser('nath', 'nath@test.com', '12345');
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject({
            user_id: '12345',
            name: 'Nath',
            email: 'nath@dio.com',
            password: 'password'
        })
    })

})
