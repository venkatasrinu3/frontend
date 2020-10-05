var str = 'html is not a progrmming language '
var split_char = ' '
var res = ''
var arr = []
for (i=0;i<str.length;i++){
  if(str[i] != split_char){
    res+=str[i]
  }
  else{
    arr.push(res)
    res = ''
  }
}
console.log(arr)

