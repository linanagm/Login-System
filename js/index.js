// *********************** Global ***************************************
let signInBtn = document.getElementById('signInBtn');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let errorAlert = document.getElementById('errorAlert');
let storedUsers = []; 


//get stored users data from localstorage if they are there
if(localStorage.getItem('storedUsers') !== null){
    storedUsers = ( JSON.parse(localStorage.getItem('storedUsers')));
//    console.log("stored users is array >> ", Array.isArray(storedUsers)); // This will correctly show 'true' if usersList is an array

}

// ************************* Events *************************************

// Add event for the sign-in button
signInBtn.addEventListener('click', function() {
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    
     if (email.length === 0 || password.length === 0) {
         showError('All inputs are required');
         return;
     }

     let user = storedUsers.find(user => user.email === email);
    
     console.log(user.name)
     
     if (!user) {
         showError('Email incorrect.');
         console.log('error');
         return;
     }

    if (user.password !== password) {
         showError('Password incorrect.');
         return;
     }
    let userName = user.name;
    sessionStorage.setItem('userName' , userName);

    //If email and password are correct, navigate to home page
    window.location.href = './home.html';
});


// ************************* functions *****************************
function showError(message) {
    errorAlert.textContent = message;
    errorAlert.classList.remove('d-none');
}

