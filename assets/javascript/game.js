window.onload = function what() {
//generate random number
var minNum = 19;
var maxNum = 121;
var minD = 1;
var maxD = 13;
var total = 0;

randonNumber =  Math.floor(Math.random()*(maxNum-minNum))+ minNum;  // 19 - 120
dNum1  = Math.floor(Math.random()*(maxD-minD))+ minD;  // 1 - 12
dNum2  = Math.floor(Math.random()*(maxD-minD))+ minD;  // 1 - 12
dNum3  = Math.floor(Math.random()*(maxD-minD))+ minD;  // 1 - 12
dNum4  = Math.floor(Math.random()*(maxD-minD))+ minD;  // 1 - 12


$("#score").text(randonNumber);
$("#btn1").val(dNum1);
$("#btn2").val(dNum2);
$("#btn3").val(dNum3);
$("#btn4").val(dNum4);

function clickHandler(){
    let btnVal = parseInt($(this).val());
    total += btnVal;
    $("#total").text(total);
}

$("#btn1").click(clickHandler);
$("#btn2").click(clickHandler);
$("#btn3").click(clickHandler);
$("#btn4").click(clickHandler);
     
    
}
