function mirrorImage(input){
    var input
    var small = 'abcdefghijklmnopqrstuvwxyz'
    var cap = small.toUpperCase()
    var res = ''
    for(i=0;i<input.length;i++){
        for(j=0;j<small.length;j++){
            if(input[i]==small[j]){
                res += small[25-j]
            }
            else if(input[i]==cap[j]){
                res += cap[25-j]
            }
        }
    }
    return res
}
console.log(mirrorImage('AyzB'))