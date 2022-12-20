const calculate = document.querySelector('.calculate');
const resetBtn = document.querySelector('.reset');

calculate.addEventListener('click', (e) => {
    e.preventDefault();

    let billAnt = document.getElementById('amount').value;
    let percentage = document.getElementById('discount-percentage').value;
    let discountAnt = document.getElementById('discount-amount');
    let FinalPay = document.getElementById('pay');

    discountAnt.value = billAnt * percentage / 100;
    FinalPay.value = billAnt - discountAnt.value;
});

resetBtn.addEventListener('click', () => {
    window.location.reload();
});