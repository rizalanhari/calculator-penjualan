const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;
const total = (price, qty) => qty*price;
const calculateDiscount = (price, qty, code) =>{
    code = code.toUpperCase();
    if (code=='KODE20') {
        return (1 - parseFloat(20/100))*price*qty
    }
    else{
        return price * qty
    }
}
module.exports = { 
    incrementQty, 
    decrementQty,
    total,
    calculateDiscount
};
