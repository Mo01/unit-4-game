window.onload = function what() {
    //generate random number
    var minNum = 19;
    var maxNum = 121;
    var minD = 1;
    var maxD = 13;
    var total = 0;
    var win = 0;
    var losse = 0;

    //Generate random numbers
    var randonNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum;  // 19 - 120
    $("#score").text(randonNumber);

    //Runs every click
    var clickHandler = function () {
        let btnVal = parseInt($(this).val());
        total += btnVal;
        $("#total").text(total);
        if (total === randonNumber) {
            randonNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
            total = 0;
            win++;
            $("#wins").text("Wins = " + win);
            reset();
        }
        else if (total > randonNumber) {
            randonNumber = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
            total = 0;
            losse++;
            $("#losses").text("Losses = " + losse);
            reset();
        }
    }

    //Reset function
    function reset() {
        [$("#btn1"), $("#btn2"), $("#btn3"), $("#btn4")].forEach(function (btn) {
            var val = Math.floor(Math.random() * (maxD - minD)) + minD;
            btn.val(val);
            btn.off('click').on('click', clickHandler);
            $("#total").text(total);
            $("#score").text(randonNumber);
        })

    }
    reset();
}
