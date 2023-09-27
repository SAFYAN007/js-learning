
let arr = [2,3,2,4,2,4,1,5,2,6,7]
let duplicate = {}; // create duplicate object
for(let i=0;i<arr.length;i++){
    let item = arr[i];
    if(arr.indexOf(item, i+1) !== -1){
        if(duplicate[item]){
    duplicate[item]++;
}else{
    duplicate[item] = 1;
}
    }
    console.log(duplicate)
}