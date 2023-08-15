/*
1. add event listener to the deposit button 
2. get desposit amount from the deposit input field 
2-5. convert string depssoit amount to a number type
3. clear the input filed after getting the value

4. get the previous deposit total

5. calculat new deposit total and set the value to the deposit total

6-7 get current balance and then add with same policy within input field value
 */

// step-1 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2
   const despositField = document.getElementById('deposit-field');
   const newDepsoitAmountString = despositField.value;
    const newDepsoitAmount = parseFloat(newDepsoitAmountString);

    // step-3
    despositField.value = '';


    // step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-5
    const newDepsoitTotal = previousDepositTotal + newDepsoitAmount;
    depositTotalElement.innerText = newDepsoitTotal;

    // step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    // ste-7
    const newBalanceTotal = previousBalanceTotalAmount + newDepsoitAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    
})