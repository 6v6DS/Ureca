function getCoin(money, coins){
    coins.sort((a,b) => b - a);
    let result = [];

    for(let coin of coins){
        result.push(Math.floor(money / coin));
        money %= coin;
    }
    return result;
}

const coins = [100, 50, 10, 500];
const money = 1030;
console.log(getCoin(money, coins)); // [2, 0, 0, 3]