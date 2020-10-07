function intersetion(arr1,arr2){
var res = []
var ans = []
for(i=0;i<arr1.length;i++){
    for(j=0;j<arr2.length;j++){
        if(arr1[i] == arr2[j]){
            res.push(arr1[i])
        }
    }
}
for(k=0;k<res.length;k++){
    flag = false
    for(l=0;l<ans.length;l++){
        if(res[k] == ans[l]){
            flag = true
            break
        }
    }
    if(flag == false){
        ans.push(res[k])
    }
}
return ans
}
console.log(intersetion([1,2,3,1,4,5,8],[1,2,4,8,8,8,8,8,9,6]))

