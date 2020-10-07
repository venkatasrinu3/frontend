function disjoint(arr1,arr2){
    var cnt = 0
    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                cnt++
            } 
        }
    }
    if(cnt == 0){
        return 'Disjoint Arrays'
    }
    else{
        return 'Not Disjoint Arrays'
    }
}
console.log(disjoint([1,2,5,4,7,8],[2,5,4,7,8,4]))