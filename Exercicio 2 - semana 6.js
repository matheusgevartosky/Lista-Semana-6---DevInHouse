
function somaNum(...param){
    let soma = 0
    for(let e of param){
        if(typeof(e) === Number ){
            soma += e
            console.log(soma)
        }else{
            console.log('passou')
        }
    }
    return soma
}

somaNum(1,2,'teste','ornitorrinco', 1)