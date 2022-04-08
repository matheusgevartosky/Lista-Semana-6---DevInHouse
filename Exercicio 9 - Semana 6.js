const getBitcoin = async () =>{
    const data1 = await fetch ('https://api.coincap.io/v2/assets/bitcoin')
    const returnedData = await data1.json()
    const {data:{symbol, priceUsd}} = returnedData
    console.log(`O preço do Bitcoin - ${symbol}  em dólares hoje é $ ${priceUsd}`)
}  

getBitcoin()