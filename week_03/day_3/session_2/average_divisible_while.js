var target = 5
var limit = 50
var sum = 0 
var cnt = 0
i=0
while(i<=limit){
    if(i%5==0){
        sum+=i
        cnt++
    }
    i++
}
console.log(sum/cnt)
