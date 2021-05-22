window.addEventListener('load',function()
{

    username=document.getElementById('username');
    attendance = document.getElementById("attend");
    lateTime = document.getElementById("Late");
    abbsent = document.getElementById("abbsent");
    document.getElementById("Monthly").style.display = "none"; 

    retrievedata();
});

//////////////T I M E /////////////
// var timenow = new Date();
// var hour = timenow.getHours();
// var min = timenow.getMinutes();
// var sec = timenow.getSeconds();

// var TIME = `${hour}:${min}:${sec}`;


function retrievedata()
{
    var employeedata=JSON.parse(localStorage.getItem("employee data"));
    fetch(`http://localhost:3000/employees?id=${employeedata.id}`)
    .then(response => {
        if(response.ok){
            return response.json();
        }
    }).then(jsonResponse =>{
        document.getElementById('firstli').innerHTML=jsonResponse[0].Firstname+' '+jsonResponse[0].Lastname;
        document.getElementById('attendance').innerHTML=jsonResponse[0].time;
        
        document.getElementById('attend').innerHTML=jsonResponse[0].attend.length;
        document.getElementById('late').innerHTML=jsonResponse[0].late.length;
        document.getElementById('absent').innerHTML=jsonResponse[0].absent.length;
        document.getElementById('excuse').innerHTML=jsonResponse[0].Excuse.length;



    });

}

$(document).on("click","#btn",function(){
    location.replace("../home.html");
});






