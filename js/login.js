window.addEventListener('load',function()
{
    username=document.getElementById('username');
    userpass=document.getElementById('userpass');



    //all spans
    usernameerror=document.getElementById('usernameerror');
    passerror=document.getElementById('passerror');


    //validation
    username.addEventListener('blur',function(){
        if(!isusernamevalid())
        {
            username.focus();
            username.select();
            usernameerror.style.display='block';
            username.classList.add("error");
        }else{
            usernameerror.style.display='none';
            username.classList.remove("error");
        }

    })//end of user name test


    userpass.addEventListener('blur',function(){
        if (!isuserpassvalid())
        {
            userpass.focus();
            userpass.select();
            passerror.style.display=('block');
            userpass.classList.add("error");
        }else{
            passerror.style.display='none';
            userpass.classList.remove("error");
            
        }
    })//end of userpass test




    document.forms[0].addEventListener('submit',function(data)
    {
        if(!(isusernamevalid()&&isuserpassvalid()))
        {
                if(!isusernamevalid())
            {
                username.focus();
                usernameerror.style.display='block';
                username.classList.add("error");
            }

            if (!isuserpassvalid())
            {
                userpass.focus();
                passerror.style.display='block';
                userpass.classList.add("error");
            }

        }
        data.preventDefault();

        retrievedata();

    })




})//end of load

function isusernamevalid(){
    var usernamepattern=/^[A-Za-z0-9]{5,30}$/;
    return username.value.match(usernamepattern);
}


function isuserpassvalid(){
    var userpasspattern=/^[0-9A-Za-z]{6,40}$/;
    return userpass.value.match(userpasspattern);
}








function retrievedata()
{
    fetch(`http://localhost:3000/employees?Username=${username.value}&PassWord=${userpass.value}`)
    .then(response => {
        if(response.ok){
            return response.json();
        }

    }).then(jsonResponse =>{
        if(jsonResponse.length === 0)
        {
            alert('Check Username or password')
        }
        else
        {
            localStorage.setItem("employee data",JSON.stringify(jsonResponse[0]));

            if (jsonResponse[0].flag == 1 ) {
                window.open("../pages/admin.html", "_self");
            }
            else{

                window.open("../pages/profile.html", "_self");

            }
        }

    });
    
    
    
    
    /*response.json())
    .then((json) => json.forEach( employee => {
        if (username.value == employee.Username && userpass.value == employee.PassWord){

            window.open("../pages/profile.html", "_self");

        }
        else{
            alert('Check Username or Password');
        }
*/


}

