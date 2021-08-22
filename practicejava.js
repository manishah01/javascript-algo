function findmax(){
    var arr = [ 3,8,5,2,4];
    max = arr [0];
    for (var i = 0; i<arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
        return max;
    }
}
console.log(findmax());