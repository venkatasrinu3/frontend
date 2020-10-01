var target = 5
var limit = 50
var sum = 0
var cnt = 0
for(i=0;i<=limit;i++){
    if(i%5==0){
        sum=sum+i
        cnt++
    }
}
console.log(sum/cnt)