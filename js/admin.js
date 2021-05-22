users=localStorage.getItem("employee data")
usersdata=JSON.parse(users);
if(usersdata === null || usersdata.flag == '0')
{
    location.replace("../pages/login.html");
}
window.addEventListener('load',function()
{
    username=document.getElementById('username');


    retrievedata();
});


function call(element){
    elements = document.getElementsByClassName("table-responsive");
    for( i=0 ; i<elements.length ; i++){
        elements[i].classList.add("d-none")
    }

    document.getElementById('table-'+element.id).classList.remove("d-none")
}



function retrievedata()
{
    var employeedata=JSON.parse(localStorage.getItem("employee data"));


    fetch(`http://localhost:3000/employees`)
    .then(response => {
        if(response.ok){
            return response.json();
        }
    }).then(function(data){

        appendData(data);

    });
}

function appendData(data)
{
   //table-1
    for (var i=1;i<data.length;i++){
        document.getElementById("data-1").innerHTML+=`<tr>
        <th scope="row">${[i]}</th>
        <td id="Employeename">${data[i].Firstname+' '+data[i].Lastname}</td>
        <td>${data[i].attend.length}</td>
        <td>${data[i].late.length}</td>
        <td>${data[i].Excuse.length}</td>

    </tr>`;
    }

   //table-2
    for (var i=1;i<data.length;i++){
        document.getElementById("data-2").innerHTML+=`<tr>
        <th scope="row">${[i]}</th>
        <td id="Employeename">${data[i].Firstname+' '+data[i].Lastname}</td>
        <td>${data[i].attend.length}</td>
        <td>${data[i].absent.length}</td>
        <td>${data[i].late.length}</td>
        <td>${data[i].Excuse.length}</td>

    </tr>`;
    }
   //table-3
    for (var i=1;i<data.length;i++){
        document.getElementById("data-3").innerHTML+=`<tr>
        <th scope="row">${[i]}</th>
        <td id="Employeename">${data[i].Firstname+' '+data[i].Lastname}</td>
        <td>${data[i].late.length}</td>
    </tr>`;
    }
   //table-4
    for (var i=1;i<data.length;i++){
        document.getElementById("data-4").innerHTML+=`<tr>
        <th scope="row">${[i]}</th>
        <td id="Employeename">${data[i].Firstname+' '+data[i].Lastname}</td>
        <td>${data[i].Excuse.length}</td>

    </tr>`;
    }
   //table-5
    for (var i=1;i<data.length;i++){
        document.getElementById("data-5").innerHTML+=`<tr>
        <th scope="row">${[i]}</th>
        <td id="Employeename">${data[i].Firstname+' '+data[i].Lastname}</td>
        <td>${data[i].Age}</td>
        <td>${data[i].Email}</td>
        <td>${data[i].Address}</td>

    </tr>`;
    }

}