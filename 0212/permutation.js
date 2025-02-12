console.log(permutation([1, 2, 3], 3));

function permutation(arr, r, tmp=[], ans=[], isUsed = new Set()){
    if(tmp.length == r){
        ans.push([...tmp]);
        return ans;
    }

    for(let i = 0; i < arr.length; i++){
        if(isUsed.has(i)) continue;
        isUsed.add(i);
        tmp.push(arr[i]);
        permutation(arr, r, tmp, ans, isUsed);
        tmp.pop();
        isUsed.delete(i);
    }
    return ans;
}