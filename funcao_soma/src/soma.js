function soma (a,b){
    if (arguments.length>2){
        return new Error('Voce deve informar apenas dois numeros, meu querido')
    }

    if (typeof a !== 'number' ||
     typeof b !== 'number'){
        return new Error('Voce deve inserir numeros')
    }

    return a+b

}

module.exports = soma;