const withdrawBtn = document.getElementById('widthraw-btn');
withdrawBtn.addEventListener('click', function () {
    const widthdrawInputField = document.getElementById('widthdraw-input');
    const widthdrawInputString = widthdrawInputField.value;
    const widthdrawInput = parseFloat(widthdrawInputString);
    widthdrawInputField.value = '';

    let widthdrawBalance = document.getElementById('widthdraw-balance');
    const widthBalancesString = widthdrawBalance.innerText;
    const widthdrawBalances = parseFloat(widthBalancesString);
    const totalWidthdrawBalance = widthdrawBalances + widthdrawInput;
    widthdrawBalance.innerText = totalWidthdrawBalance;

    const mainBalance = document.getElementById('main-balance');
    const mainBalancesString = mainBalance.innerText;
    const mainBalances = parseFloat(mainBalancesString);

    const totalMainBalance = mainBalances - widthdrawInput;
    mainBalance.innerText = totalMainBalance;
})