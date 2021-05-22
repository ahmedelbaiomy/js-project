window.addEventListener('load',function()
{
    username=document.getElementById('username');

    retrievedata();
});

//////////////T I M E /////////////
var timenow = new Date();
var hour = timenow.getHours();
var min = timenow.getMinutes();
var sec = timenow.getSeconds();

var TIME = `${hour}:${min}:${sec}`;


function retrievedata()
{
    var employeedata=JSON.parse(localStorage.getItem("employee data"));


    fetch(`http://localhost:3000/employees?Username=${employeedata.Username}`)
    .then(response => {
        if(response.ok){
            return response.json();
        }
    }).then(jsonResponse =>{
        document.getElementById('firstli').innerHTML=jsonResponse[0].Firstname+' '+jsonResponse[0].Lastname;
        document.getElementById('secondli').innerHTML=TIME;

    });

}



function switchto(){
    window.open('../pages/employee.html','_self');
}


