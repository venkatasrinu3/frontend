//****************Submit Button*********************/
function expense_manag(){
    var inc1=document.getElementById("sal").value
    var inc2=document.getElementById("other").value
    var exp1=document.getElementById("groc").value
    var exp2=document.getElementById("elect").value
    var exp3=document.getElementById("trav").value
    var exp4=document.getElementById("food").value
    var exp5=document.getElementById("misc").value
    var total_inc=Number(inc1)+Number(inc2)
    var total_exp=Number(exp1)+Number(exp2)+Number(exp3)+Number(exp4)+Number(exp5);
    var balance=(Number(inc1)+Number(inc2))-(Number(exp1)+Number(exp2)+Number(exp3)+Number(exp4)+Number(exp5))
    if(balance<2000){
        alert("Your Balance is running Low!")
    }
    document.getElementById("inc_amount").innerHTML="Total Income: "+total_inc;
    document.getElementById("exp_amount").innerHTML="Total Expenditure: "+total_exp;
    document.getElementById("bal_amount").innerHTML="Total Balance Left: "+balance;
    var out=document.querySelector(".output")
    out.style.border="2px dashed black";
}

//*****************Reset Button**************************/
function reset_data(){
    document.getElementById("sal").value=""
    document.getElementById("other").value=""
    document.getElementById("groc").value=""
    document.getElementById("elect").value=""
    document.getElementById("trav").value=""
    document.getElementById("food").value=""
    document.getElementById("misc").value=""
}