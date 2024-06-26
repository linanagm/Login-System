// *********************** Global ***************************************
let signInBtn = document.getElementById('signInBtn');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let errorAlert = document.getElementById('errorAlert');
let storedUsers = []; 


//get stored users data from localstorage if they are there
if(localStorage.getItem('storedUsers') !== null){
    storedUsers = ( JSON.parse(localStorage.getItem('storedUsers')));

}

// ************************* Events *************************************

// Add event for the sign-in button
signInBtn.addEventListener('click', function() {
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    

    // check if email or password is empty
    if(email.length === 0 || email.password === 0){
        showError('All inputs are required');
        return;
    }

    // check if user is found in stored users 
    let userFound = false;
    for (let i = 0; i< storedUsers.length ; i++){
        
         if(storedUsers[i].email === email && storedUsers[i].password === password){
            let userName = storedUsers[i].name;
            // store user name in session storage to use in home page
            sessionStorage.setItem('userName' , userName);

            //If email and password are correct, navigate to home page
            window.location.href = './home.html';
            return;
        }
        
    }
    // if user is not found show error massege
    if(userFound = true){
        showError('Email or password incorrect.');
            return;
    }
    
});


// ************************* functions *****************************
function showError(message) {
    errorAlert.textContent = message;
    errorAlert.classList.remove('d-none');
}

