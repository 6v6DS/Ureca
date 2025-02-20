function Knapsack(maxWeight, itmes){
    itmes.sort((a,b) => (b[1] / b[0]) - (a[1] / a[0]));

    let count = 0;
    for(let [weight, value] of items){
        if(maxWeight >= weight){
            count += value;
            maxWeight -= weight;
        }else{
            count += (value / weight) * maxWeight;
            break;
        }
    }
    return count;
}

let items = [[3, 60], [2, 100], [4, 120]];
let maxWeight = 7;
console.log(Knapsack(maxWeight, items));