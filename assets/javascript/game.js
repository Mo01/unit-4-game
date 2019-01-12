window.onload = function what() {
    //generate random number
    var minNum = 19;
    var maxNum = 121;
    var minD = 1;
    var maxD = 13;
    var total = 0;
    var win = 0;
    var losse = 0;
    var randonNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum;  // 19 - 120

    var clickHandler = function () {
        let btnVal = parseInt($(this).val());
        total += btnVal;
        $("#total").text(total);
        if (total === randonNumber) {
            console.log("You Won!!");
        }
        else if (total > randonNumber) {
            console.log("You lost!!");
        }
    }

    $("#score").text(randonNumber);
    [$("#btn1"), $("#btn2"), $("#btn3"), $("#btn4")].forEach(function (btn) {
        var val = Math.floor(Math.random() * (maxD - minD)) + minD;
        btn.val(val);
        btn.click(clickHandler);
    })


}
