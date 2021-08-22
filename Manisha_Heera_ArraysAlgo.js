var sum = 0;
var Arr = [6,3,5,1,2,4];
for (var i=0; i<Arr.length; i++){
sum = sum + Arr[i];
console.log("num",i, "sum",sum);
}

for (var i=0; i<Arr.length; i++){
Arr[i]= i * Arr[i];}
console.log(Arr);