//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input in this field
    // always remeber to use.value to get ext from an input field
    const emailField =document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email)
    // step-3: get password
    //3.a: set id on the html element 
    // se.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password)


    // DANGER: DO NOT VERIFY email password on the client side
    // step-4: verify email and password and check wheather valid user or not

    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('You are not my agent member');
        // here just come my member and this is my member account only this is the access point
    }
})