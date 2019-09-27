document.querySelector('#calculate').addEventListener('click', calculate);

function calculate() {
    const firstInput = parseFloat(document.querySelector('#firstInput').value);
    const secondInput = parseFloat(document.querySelector('#secondInput').value);

    

    document.querySelector('#tipAmount').innerHTML = tipAmount.toFixed(2);
    document.querySelector('#taxTotal').innerHTML = tax.toFixed(2);
    document.querySelector('#grandTotal').innerHTML = (total + tipAmount + tax).toFixed(2);
};
