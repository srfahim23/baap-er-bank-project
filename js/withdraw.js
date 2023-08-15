// 1. add event handler with withdraw button
// 2. get the withdraw amount from the withdraw input filed
// 2.5 also make sure that convert the input input to number by using parseFloat
// 3.Get previous withdraw amount total

// 4. Calculate total withdraw amount 
// 4-5. Set total withdraw amount
// 5. Get the previous balance total
//6. calculate new balance total
// 6-5. set the new balance total
// 7. Clear the input field


// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);

    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6
    const newBalance = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalance;

    // step-7
    withdrawField.value = '';
})