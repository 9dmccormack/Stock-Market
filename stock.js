function Stock(n,t,i,v,q){

    //Initialize the instance variables below
    this.Name=n;
    this.Ticker=t;
    this.Index=i;
    this.Value=v;
    this.Quantity=q;

    //declare and define totalValue function belows
    function totalValue(){
        totalValue=this.Value*this.Quantity;
        return totalValue
    }


    //declarea and define sell(q) function below
    this.sell = function(tkr,val){
        if(this.quatity >0 && q <= this.quantity){
            this.quatity = this.quatity - q;
        }
    }

}

module.exports = Stock;
