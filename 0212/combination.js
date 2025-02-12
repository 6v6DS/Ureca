console.log(combination([1,2,3,4,5], 3));

function combination(arr, r, tmp=[], ans=[]){
    if(tmp.length == r){
        ans.push([...tmp]);
        return ans;
    }

    const lastIndex = tmp.length === 0 ? -1 : arr.indexOf(tmp[tmp.length - 1]);

    for(let i = lastIndex + 1; i < arr.length; i++){
        tmp.push(arr[i]);
        combination(arr, r, tmp, ans);
        tmp.pop();
    }
    return ans;
}