const conta = {
    email: 'arthur@dio.bank',
    password: '123456',
    name: 'Arthur Lopes',
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})