//En esta libreria deberian ir las demas funciones matematicas...

const fibonacci = (n) => {

    if (n <= 1) return 1
    

    return  fibonacci(n - 1) +  fibonacci(n - 2)

}

module.exports = {
    fibonacci
}