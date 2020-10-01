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

// var a = 'masai'
// var vowels = 'aeiou'
// var cnt = 0
// for(i=0;i<a.length;i++){
//   if(vowels.indexOf(a[i]) != -1){                Method 2 of counting number of vowels
//     cnt++
//   }
// }
// console.log(cnt)
