/*
    Gunakan file ini untuk membuat test case dengan Jest
*/
const functions = require('../helpers');
test('1 tambah 1 adalah 2', ()=>{
    expect(functions.incrementQty(1)).toBe(2);
});
test('1 kurang 1 adalah 2', ()=>{
    expect(functions.decrementQty(1)).toBe(0);
});
test('1 tambah 1 adalah 2', ()=>{
    expect(functions.incrementQty("1")).toBe(2);
});
test('1 kurang 1 adalah 2', ()=>{
    expect(functions.decrementQty("1")).toBe(0);
});
test('total jika beli 10 dengan harga 500 adalah 5000', ()=>{
    expect(functions.total(500, 10)).toBe(5000);
});
test('total jika beli 10 dengan harga 500 dengan kode kode20 adalah 4000', ()=>{
    expect(functions.calculateDiscount(500, 10, "kode20")).toBe(4000);
});
test('total jika beli 10 dengan harga 500 dengan kode salah', ()=>{
    expect(functions.calculateDiscount(500, 10, "asfafs")).toBe(5000);
});
test('total jika beli 10 dengan harga 500 tanpa kode adalah 5000', ()=>{
    expect(functions.calculateDiscount(500, 10, "")).toBe(5000);
});
