function union(arr1,arr2){
var ans = []
var res = []
for(i=0;i<arr1.length;i++){
    ans.push(arr1[i])
}
for(j=0;j<arr2.length;j++){
    ans.push(arr2[j])
}
for(k=0;k<ans.length;k++){
    flag = false
    for(l=0;l<res.length;l++){
        if(ans[k] == res[l]){
            flag = true
            break
        }
        }
        if(flag == false){
            res.push(ans[k])
    }
}
return res
}
console.log(union([1,2,5,4,7],[2,5,4,1,3,6]))