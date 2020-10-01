var str = 'education'
var vowels = 'aeiou'
var cnt = 0
for(i=0;i<str.length;i++){
  for(j=0;j<vowels.length;j++){
    if(str[i] == vowels[j]){
      cnt++
    }
  }
}
console.log(cnt)