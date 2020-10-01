var str = 'masai'
var vowels = 'aeiou'
var cnt = 0
for(i=0;i<str.length;i++){
    if(vowels.indexOf(str[i]) == -1){
      cnt++
    }
}
console.log(cnt)