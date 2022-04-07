/*const promisseA = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('result');
    }, 1000);
})

promisseA
.then((result) => console.log('resolvida', result))
.catch((error) => console.log('error', error))*/

const a = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('result od a')
    },1000)
})

const b = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('result od b')
    }, 500)
})

const c = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('result od c')
    }, 1200)
})

const jobs = async () =>{
    const resultA = await a();
    const resultB = await b();
    const resultC = await c();

    return [ resultA, resultB, resultC]
}

jobs().then((result) =>{
    console.log('resolvida', result)
}).catch((error)=>{
    console.log('error', error)
})









