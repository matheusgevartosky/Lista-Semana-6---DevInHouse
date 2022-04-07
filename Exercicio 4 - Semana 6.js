const envolve = (...param) =>{
    return ['<html>',...param]
}

console.log(envolve('div', 'h1', 'button'))