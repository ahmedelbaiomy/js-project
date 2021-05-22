window.addEventListener('load',function()
{
     userfirstname=document.getElementById('userfirstname');
     userlastname=document.getElementById('userlastname');
     useremail=document.getElementById('useremail');
     useradd=document.getElementById('useradd');
     userage=document.getElementById('userage');


    //all spans
    firstnameerror=document.getElementById('firstnameerror');
    lastnameerror=document.getElementById('lastnameerror');
    emailerror=document.getElementById('emailerror');
    addresserror=document.getElementById('addresserror');
    ageerror=document.getElementById('ageerror');

    //validation
    userfirstname.addEventListener('blur',function(){
        if(!isuserfirstnamevalid())
        {
            userfirstname.focus();
            userfirstname.select();
            firstnameerror.style.display='block';
            userfirstname.classList.add("error");
        }else{
            firstnameerror.style.display='none';
            userfirstname.classList.remove("error");
        }

    })//end of first name test

    userlastname.addEventListener('blur',function(){
        if(!isuserlastnamevalid())
        {
            userlastname.focus();
            userlastname.select();
            lastnameerror.style.display='block';
            userlastname.classList.add("error");
        }else{
            lastnameerror.style.display='none';
            userlastname.classList.remove("error");
        }

    })//end of last name test


    useradd.addEventListener('blur',function(){
        if(!isuseraddvalid())
        {
            useradd.focus();
            useradd.select();
            addresserror.style.display('block');
            useradd.classList.add("error");
        }else{
            addresserror.style.display='none';
            useradd.classList.remove("error");
        }

    })//end of useraddress test

    useremail.addEventListener('blur',function(){
        if(!isuseremailvalid())
        {
            useremail.focus();
            useremail.select();
            emailerror.style.display('block');
            useremail.classList.add("error");
        }else{
            emailerror.style.display='none';
            useremail.classList.remove("error");
        }

    })//end of useremail test


    userage.addEventListener('blur',function(){
        if(!isuseragevalid())
        {
            userage.focus();
            userage.select();
            ageerror.style.display='block';
            userage.classList.add("error");
        }else{
            ageerror.style.display='none';
            userage.classList.remove("error");
        }

    })//end of userage test



    document.forms[0].addEventListener('submit',function(data)
    {
        if(!(isuserfirstnamevalid()&&isuserlastnamevalid()&&isuseraddvalid()&&isuseragevalid()&&isuseremailvalid()))
        {
            if(!isuserfirstnamevalid())
               {
                userfirstname.focus();
                firstnameerror.style.display='block';
                userfirstname.classList.add("error");
                }

            if(!isuserlastnamevalid())
                {
                    userlastname.focus();
                    lastnameerror.style.display='block';
                    userlastname.classList.add("error");
                }
            if(!isuseraddvalid())
                {
                    useradd.focus();
                    adderror.style.display='block';
                    useradd.classList.add("error");
                }
            if(!isuseremailvalid())
                {
                    useremail.focus();
                    emailerror.style.display='block';
                    useremail.classList.add("error");
                }
            if(!isuseragevalid())
                {
                    userage.focus();
                    ageerror.style.display='block';
                    userage.classList.add("error");
                }

        }
        data.preventDefault();


        //registration

        Sendemail();
        //confirmation 

        confirmation();



//save to data base
    /*    employee ={
            id:Math.floor(Math.random()*100001),
            Firstname:userfirstname.value,
            Lastname:userlastname.value,
            Email:useremail.value,
            Age:userage.value,
            Address:useradd.value,
            Username:`${userfirstname.value}${userlastname.value}${userage.value}`,
            PassWord:`${randomstring}` 
    
        }
    
        fetch('http://localhost:3000/employees',{
            headers: {'Content-Type': 'application/json'},
            method:'POST',
            body:JSON.stringify(employee)
        });
*/

    })


})//end of load

function isuserfirstnamevalid(){
    var usernamepattern=/^[A-Za-z]{3,15}$/;
    return userfirstname.value.match(usernamepattern);
}

function isuserlastnamevalid(){
    var usernamepattern=/^[A-Za-z]{3,15}$/;
    return userlastname.value.match(usernamepattern);
}


function isuserpassvalid(){
    var userpasspattern=/^[0-9A-Za-z]{6}$/;
    return userpass.value.match(userpasspattern);
}

function isuseraddvalid(){
    var useraddpattern=/^[A-Za-z]{5,30}$/;
    return useradd.value.match(useraddpattern);
}

function isuseremailvalid(){
    var useremailpattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return useremail.value.match(useremailpattern);
}
function isuseragevalid(){
    var useragepattern=/^2[4-9]|3[0-9]|4[0-9]|5[00]$/;
    return userage.value.match(useragepattern);
}





//send email for admin

function Sendemail()
{

        Email.send({
        Host : "smtp.gmail.com",
        Username : "ahmedelbaiomy40@gmail.com",
        Password : "qnhonrhjvzypespq",
        To : "ahmedelbaiomy40@gmail.com",
        From : `${useremail.value}`,
        Subject : "Registration Request",
        Body : `First Name: ${userfirstname.value}</br>
                Last Name: ${userlastname.value}</br>
                Address: ${useradd.value}</br>
                Email: ${useremail.value}</br>
                Age: ${userage.value}</br>`
            }).then(function (message) { alert("mail sent successfuly")
            });
}






//confirm data
    var randomstring = Math.random().toString(36).slice(-8);

function confirmation()
{

//    var randomstring = Math.random().toString(36).slice(-8);

        Email.send({
        Host : "smtp.gmail.com",
        Username : "ahmedelbaiomy40@gmail.com",
        Password : "qnhonrhjvzypespq",
        To :`${useremail.value}`,
        From : "ahmedelbaiomy40@gmail.com",
        Subject : "Verification Email",
        Body : `User-Name: ${userfirstname.value}${userlastname.value}${userage.value}\n
                Password: ${randomstring};`
            }).then(function(message){
                employee ={
                    id:Math.floor(Math.random()*100001),
                    Firstname:userfirstname.value,
                    Lastname:userlastname.value,
                    Email:useremail.value,
                    Age:userage.value,
                    Address:useradd.value,
                    Username:`${userfirstname.value}${userlastname.value}${userage.value}`,
                    PassWord:`${randomstring}`,
                    flag:"0",
                    attend: [],
                    absent:[],
                    late:[],
                    Excuse:[]
            
                }
            
                fetch('http://localhost:3000/employees',{
                    headers: {'Content-Type': 'application/json'},
                    method:'POST',
                    body:JSON.stringify(employee)
                });

            })
}





