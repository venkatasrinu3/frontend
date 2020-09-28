var total
var price = 500
if(price>300){
    var discount = price*0.1
    if(discount>100){
        discount=100
        total = price-discount
    }
    else {
        total = price-price*0.1
    }
    console.log('Final price :' +total, 'Discount price :' +discount)
}

else{
    console.log('Discount is Invalid, FInal price :' +price)
}