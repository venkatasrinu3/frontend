var arr1 = [1,2,3,1,4,5,8]
var arr2 = [1,2,4,8,8,8,8,8,9,6]
var res = []
var ans = []
for(i=0;i<arr1.length;i++){
    for(j=0;j<arr2.length;j++){
        if(arr1[i] != arr2[j]){
            res.push(arr1[i])
        }
    }
}
console.log(res)
