var arr = ['html','css','javascript','bootstrap']
var res = ''
var str = '$'
for(i=0;i<arr.length;i++){
    if(i != arr.length-1){
        res+= arr[i]+str
    }
    else{
        res+=arr[i]
    }
}
console.log(res)