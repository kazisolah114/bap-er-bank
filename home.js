const depositeButton = document.getElementById('deposite-btn');
depositeButton.addEventListener('click', function () {
    const depositeInputField = document.getElementById('desposite-input');
    const depositeInputString = depositeInputField.value;
    const depositeInput = parseFloat(depositeInputString);
    let depositeValue = document.getElementById('deposite-value');
    const totalDepositeString = depositeValue.innerText;
    const totalDeposite = parseFloat(totalDepositeString);
    const totalMainDeposite = totalDeposite + depositeInput;
    depositeValue.innerText = totalMainDeposite;
    depositeInputField.value = '';

    const mainBalance = document.getElementById('main-balance');
    const mainBalancesString = mainBalance.innerText;
    const mainBalances = parseFloat(mainBalancesString);
    const totalMainBalance = mainBalances + depositeInput;
    mainBalance.innerText = totalMainBalance;
})