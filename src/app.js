import { 
  incrementQty, 
  decrementQty,
  total,
  calculateDiscount
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const qtyTotal = document.querySelector('#subtotal');
const qtyPrice = document.querySelector('#price');
const cfmButton = document.querySelector('#confirmButton');
const codeValue = document.querySelector('#code');

cfmButton.addEventListener('click', () => {
  qtyTotal.textContent = `Rp. ${calculateDiscount(qtyPrice.value, qtyInput.value, codeValue.value)}`
});
incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  qtyTotal.textContent = `Rp. ${total(price.value, qtyInput.value)}`;
});

decrButton.addEventListener('click', () => {
  if (qtyInput.value<2) {
    qtyInput.value=1;
  }
  else{
    qtyInput.value = decrementQty(qtyInput.value);  
  }
  qtyTotal.textContent = `Rp. ${total(price.value, qtyInput.value)}`;
});