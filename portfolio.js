function Portfolio(){
    this.stocks=[];


    //helper function
    function findStock(trk,list){
        //i represents the index of the trk you are looking for in this.stocks
        let i = trk;
        for(let i=0: i<this.Stockslength; i++){
            if(tkr == this.Stocks[i].ticker){

            }
        }
        return i;
    }

    //instance functions
    this.add = function(stk){
        this.stocks.push(stocks);
    };
    this.update = function(tkr,val){
        if(findStock(tkr)>0){
            this.stocks[findStock(tkr)].value =val;
        }
    };
    this.buy = function(tkr,qnt){};
    this.sell = function(tkr,qnt){
        let position = search(tkr);
        if (position >= 0);
    };
    this.totalValue = function(){
        let total=0
        For(let s=0;s<this.stocks.length;s++){
            Total=total+this.stocks[i].totalValue();
}
        Return total;
    };
}

module.exports = Portfolio;
