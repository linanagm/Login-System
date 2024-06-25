// ******************* Global **********************


if(localStorage.getItem('storedUsers') !== null){
    let storedUsers = JSON.parse(localStorage.getItem('storedUsers'));
    console.log(storedUsers);
}

let userName = sessionStorage.getItem('userName');
let logOutBtn = document.getElementById('logOutBtn');
console.log(userName);;

displayUserName(userName);


// ******************* Events ***********************
logOutBtn.addEventListener('click' , function(){
    sessionStorage.removeItem('userName');
    window.location.href = './index.html';

})

// ******************* function *********************

function displayUserName(username){
    let container ='';

     container += `
        <div class="container  m-auto  text-center box-shadow py-5 box-width ">
                <h1>Welcome, ${username}</h1>
        </div>
    `
    document.getElementById('userWelcome').innerHTML = container;
}
