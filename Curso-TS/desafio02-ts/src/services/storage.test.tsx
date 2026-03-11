import { getAllLocalStorage } from "./storage"

describe('storage', () => {

    const getItem = jest.spyOn(Storage.prototype, 'getItem')

    it('Deve retornar o objeto no LocalStorage', () => {
        getAllLocalStorage()
        expect(getItem).toHaveBeenCalled()
    })
})