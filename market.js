//imports your code to be tested
const Stock = require("./stock.js");
const Portfolio = require("./portfolio.js");

//Imports my code to run your examples against the economic forcast
//const Forecast = require("./forcast");

function main(){

    //create all of your stocks
    let stk1 = new Stock("Netflix Inc","NFLX","NASDAQ",192.71,60);
    let stk2 = new Stock("World Wrestling Entertainment Inc","WWE","NYSE",27.00,900);
    let stk3 = new Stock("Microsoft Corp","MSFT","NASDAQ",83.51,35);
    let stk4 = new Stock("Twitter Inc","TWTR","NASDAQ",20.03,550);

    //build your Portfolio
    let myport = new Portfolio();
    myport.add(stk1);
    myport.add(stk2);
    myport.add(stk3);
    myport.add(stk4);

    //generate a test forcast

console.log(myport.totalValue());
    //build prediction
}

main();
