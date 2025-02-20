// 가장 많은 회의를 진행할 수 있게 해주기.

function meeting(times){
    times.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let EndTime = 0;

    for(let [start, end] of times){
        if(start >= EndTime){
            count++;
            EndTime = end;
        }
    }
    return count;
}

const times = [
    [1, 4], [3, 5], [0, 6], [5, 7], [3, 8], 
    [5, 9], [6, 10], [8, 11], [8, 12], [2, 13], [12, 14]
];

console.log(meeting(times)); 