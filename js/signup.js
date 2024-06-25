
//  ************************* Global ******************************
const inputs = document.querySelectorAll('input'); //return nodelist can't use array methods
const signUpBtn = document.getElementById('signUpBtn'); //return whole element >> .value
let usersList = [];
let isValid = false;
let isExist = false;
const signUpData = document.querySelector('div');
const nameRegex = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/



//check if there is there stored users in local storage
if(localStorage.getItem('storedUsers') != null){
   usersList=(JSON.parse(localStorage.getItem('storedUsers')));    
}

// ***************************** Events *******************************
// signup button event
signUpBtn.addEventListener('click', function(){
    let currentUserEmail = inputs[1].value;
    
    if(areInputsEmpty()){
        document.getElementById('allRequire').classList.remove('d-none');
        document.getElementById('alreadyExist').classList.add('d-none');
        document.getElementById('succeesAlert').classList.add('d-none');
            document.getElementById('invalidAlert').classList.add('d-none');
    }
    else if(isValid == true){
        if(emailExists(currentUserEmail)){
            document.getElementById('alreadyExist').classList.remove('d-none');
            document.getElementById('allRequire').classList.add('d-none');
            document.getElementById('succeesAlert').classList.add('d-none');
            document.getElementById('invalidAlert').classList.add('d-none');
        }else{
            addUser()
            document.getElementById('succeesAlert').classList.remove('d-none');
            document.getElementById('allRequire').classList.add('d-none');
            document.getElementById('invalidAlert').classList.add('d-none');
            document.getElementById('alreadyExist').classList.add('d-none');
            window.location.href = "./index.html";
        }

    }else{
            document.getElementById('invalidAlert').classList.remove('d-none');
            document.getElementById('allRequire').classList.add('d-none');
            document.getElementById('succeesAlert').classList.add('d-none');
            document.getElementById('alreadyExist').classList.add('d-none');
    }
})

// real time validation 
document.addEventListener('input', function(){
    let nameInput = inputs[0];
    let emailInput = inputs[1];
    let passwordInput = inputs[2];
    if(inputIsValid(nameInput , nameRegex) && inputIsValid(emailInput , emailRegex ) && inputIsValid(passwordInput , passwordRegex)){
        isValid = true;
    }else{
        isValid = false;
    }
})


//  ************************** functions *************************

// add user to userlists array and to local storage  function
function addUser (){
    // create user object
    let user ={
        name:inputs[0].value.trim(),
        email:inputs[1].value.trim(),
        password:inputs[2].value.trim(),
    }
    // add user object at the end of userslist array
    usersList.push(user);
    localStorage.setItem('storedUsers', JSON.stringify(usersList));
}

//does user exist in stored users 
function emailExists(email){
    return usersList.some(user=> user.email === email);
}

// check if any input is empty
function areInputsEmpty(){
    for(let input of inputs){
        if(input.value.trim() ===""){
            return true;
        }
    }return false;
}

// ************************** validation ****************************
function inputIsValid (input , regex){
    if(regex.test(input.value.trim())){
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
    }else {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');       
        return false;
    }
}
