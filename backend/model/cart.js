module.exports=function Cart(oldCart){
this.items=oldCart.items||{}
this.totalQty=oldCart.totalQty || 0
this.totalPrice=oldCart.totalPrice || 0


this.add=function(item,id){
console.log(id);
var storedItem=this.items[id];
if(!storedItem){
    storedItem=this.items[id]={item:item,qty:0,price:0};
   //console.log(storedItem.item[0].price);
}
storedItem.qty++;
storedItem.price=storedItem.item[0].price*storedItem.qty;   
this.totalQty++;
this.totalPrice+=storedItem.item[0].price;
}

this.generateArray=function(){
var arr=[];
for(var id in this.items){
arr.push(this.items[id]);
}
return arr;
}


};