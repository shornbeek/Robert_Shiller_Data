// import stockMarketData from 'stock-market-data';
var express = require("express");
var stockMarketData = require('stock-market-data');
 
// console.log(stockMarketData[0]);
// console.log(stockMarketData);

function runloop() {

for ( var i = 0; i < stockMarketData.length; i++) {
    console.log(stockMarketData[i].year + "year");
    console.log(stockMarketData[i].earnings + "earnings");
    console.log(stockMarketData[i].realPrice + "price");

  };
};

runloop();


// var arr = {
//   year: "1871",
//   month: "01",
//   date: "1871.01",
//   comp: "4.44",
//   dividend: "0.26",
//   earnings: "0.40",
//   cpi: "12.46",
//   dateFractionDecimal: "04",
//   dateFraction: "1871.04",
//   lir: "5.32",
//   realPrice: "88.27",
//   realDividend: "5.17",
//   realEarnings: "7.95",
//   cape: "NA"
// }
