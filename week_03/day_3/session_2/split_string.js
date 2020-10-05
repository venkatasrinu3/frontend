let str = 'Peetu*is*a*male*talent*intelligent*guy'
let split_char = '*'
let res = ''
let arr = []
for(let i=0;i<str.length;i++){
    if(str[i] != split_char){
        res+=str[i]
    }else{
        arr.push(res)
        res=''
    }
}
console.log(arr)