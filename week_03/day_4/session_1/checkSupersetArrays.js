function subset(arr1,arr2){
    // var arr1 = [1,2,3,4,5,8,7]
    // var arr2 = [1,2,4,8]
    var cnt = 0
    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                cnt++
            }
        }
    }
    if(cnt == arr2.length){
        return 'arr1 is superset of arr2'
    }
    else {
        return 'arr1 is not a superset of arr2'
    }
    }
    console.log(subset([1,2,3,4,5,8,7],[1,2,5,4,8]))