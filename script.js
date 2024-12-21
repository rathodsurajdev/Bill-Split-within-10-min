let selectedTip = 0;

function selectTip(tip, button) {
    selectedTip = tip;
    document.getElementById('customTip').value = '';

    const buttons = document.querySelectorAll('.btn-group .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function customTipSelected() {
    selectedTip = 0; // Reset selectedTip if custom tip is manually entered

    const buttons = document.querySelectorAll('.btn-group .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
}

function generateBill() {
    const billAmount = parseFloat(document.getElementById('billAmount').value) || 0;
    const customTip = parseFloat(document.getElementById('customTip').value);
    const numPeople = parseInt(document.getElementById('numPeople').value) || 1;

    const tipPercentage = customTip || selectedTip;
    if (!tipPercentage) {
        alert('Please select or enter a tip percentage.');
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalBill = billAmount + tipAmount;
    const eachPersonBill = totalBill / numPeople;

    document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
    document.getElementById('totalBill').textContent = totalBill.toFixed(2);
    document.getElementById('eachPersonBill').textContent = eachPersonBill.toFixed(2);

    document.getElementById('resultSection').style.display = 'block';
}

function resetForm() {
    document.getElementById('billAmount').value = '';
    document.getElementById('customTip').value = '';
    document.getElementById('numPeople').value = '';
    document.getElementById('resultSection').style.display = 'none';
    selectedTip = 0;

    const buttons = document.querySelectorAll('.btn-group .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
}