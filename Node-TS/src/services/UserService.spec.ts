import { jest } from '@jest/globals';
import { UserService } from "./UserService.js";

describe('UserService', () => {
    const userService = new UserService();

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.createUser('Nath', 'nath@test.com');
        expect(mockConsole).toHaveBeenCalled
    })
})