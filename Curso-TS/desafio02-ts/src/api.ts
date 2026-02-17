const conta = {
    email: 'arthur@dio.bank',
    password: '123456',
    name: 'Arthur Lopes'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})