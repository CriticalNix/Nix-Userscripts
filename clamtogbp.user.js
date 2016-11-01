// ==UserScript==
// @name        ClamToGBP
// @namespace   CLAMSTOGBP
// @include     https://just-dice.com/*
// @version     1
// @grant       none
// ==/UserScript==

$(".chatstat table tbody").append('<tr><th></th><td><span class="investmentGBP">0</span></td><td><span class="invest_pftGBP">0</span></td><td></td><td><span class="profitPerSGPB">0</span></td><td><span class="wageredGBP">0</span></td><td><span class="myprofitGBP">0</span></td></tr>');
 
var y = 0;
var z = 0;
 
function fetch() {
 
    $.get('https://www.cryptocoincharts.info/api/tradingPair/CLAM_BTC', function (data) {
        var j = data.price;
        y = j;
        console.log(y);
    });
 
    $.get('https://api.bitcoinaverage.com/ticker/GBP/', function (data) {
        var j = data.last;
        z = j;
        console.log(z);
    });
 
    setInterval(function(){
 
        var invested = (parseFloat($(".investment").html().replace(/,/g, "")) * y * z).toFixed(8);
        var i_profit = (parseFloat($(".invest_pft").html().replace(/,/g, "")) * y * z).toFixed(8);
        var my_profit = (parseFloat($(".myprofit").html().replace(/,/g, "")) * y * z).toFixed(8);
        var wagered = (parseFloat($(".wagered").html().replace(/,/g, "")) * y * z).toFixed(8);
 
        $(".investmentGBP").html(invested);
        $(".invest_pftGBP").html(i_profit);
        $(".myprofitGBP").html(my_profit);
        $(".wageredGBP").html(wagered);
 
        console.log('updated');
    }, 10000);
}
 
fetch();