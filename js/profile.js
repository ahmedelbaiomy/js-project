window.addEventListener('load',function()
{
    username=document.getElementById('username');


    //all spans
    usernameerror=document.getElementById('usernameerror');


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





    document.forms[0].addEventListener('submit',function(data)
    {   data.preventDefault();
        if(!(isusernamevalid()))
        {
                if(!isusernamevalid())
            {
                username.focus();
                usernameerror.style.display='block';
                username.classList.add("error");
            }


        }
        else{
        retrievedata();
        }

})




})//end of load




function ahmed(){
    var timenow = new Date();
    var hour = timenow.getHours();
    var min = timenow.getMinutes();
    var sec = timenow.getSeconds();
   
   var TIME = `${hour}:${min}:${sec}`;

   var employeedata=JSON.parse(localStorage.getItem("employee data"));
   if(username.value == employeedata.Username)
   {
      
            employeedata.Excuse.push(new Date().toLocaleDateString());
           employeedata.time=TIME;

       fetch(`http://localhost:3000/employees/${employeedata.id}`,
       {
           method :'PUT',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(employeedata)
       }).then((response)=>{
           localStorage.setItem('employeedata',JSON.stringify(employeedata))
           window.open('../pages/attendance.html','_self');
       });


   }
   else{
       alert('Check Username');
   }
}
////////////////////////////////////////////////



function isusernamevalid(){
    var usernamepattern=/^[A-Za-z0-9]{5,30}$/;
    return username.value.match(usernamepattern);
}


//////////////T I M E /////////////




function retrievedata()
{    var timenow = new Date();
     var hour = timenow.getHours();
     var min = timenow.getMinutes();
     var sec = timenow.getSeconds();
    
    var TIME = `${hour}:${min}:${sec}`;

    var employeedata=JSON.parse(localStorage.getItem("employee data"));
    if(username.value == employeedata.Username)
    {
        if (hour = '8' && min >= '0' && min <= '15')
            {
                employeedata.attend.push(new Date().toLocaleDateString());
            }
        else if (hour = '8' && min > '15' && min < '59')
            {
                employeedata.late.push(new Date().toLocaleString());
            }
        else
            {
               employeedata.absent.push(new Date().toLocaleString());                
            }

            employeedata.time=TIME;

        fetch(`http://localhost:3000/employees/${employeedata.id}`,
        {
            method :'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employeedata)
        }).then((response)=>{
            localStorage.setItem('employeedata',JSON.stringify(employeedata))
            window.open('../pages/attendance.html','_self');
        });


    }
    else{
        alert('Check Username');
    }
}


     


