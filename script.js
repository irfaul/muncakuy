var formArray = [];

function init() {
    if(localStorage.formJadwal) {
        formArray = JSON.parse(localStorage.formJadwal);
        for(var i=0;i<formArray.length;i++){
            updateTableCell (formArray[i].name,formArray[i].myList,formArray[i].myDate,formArray[i].contact);
        }
    }

}

function submitPressed() {
    var username = document.getElementById('name').value;
    var mountain = document.getElementById('myList').value;
    var dateHike = document.getElementById('myDate').value;
    var contactPerson = document.getElementById('contact').value;

    var formObj = {name:username,myList:mountain,myDate:dateHike,contact:contactPerson};
    formArray.unshift(formObj);
    
    localStorage.formJadwal = JSON.stringify(formArray);
    updateTableCell (username,mountain,dateHike,contactPerson);

    //hapus form
    document.getElementById('name').value = "";
    document.getElementById('myDate').value = "YYYY-MM-DD";
    document.getElementById('contact').value = "";

}

function updateTableCell (username,mountain,dateHike,contactPerson) {
    var table = document.getElementById('hikeTable');
    var row = table.insertRow();
    var usernameCell = row.insertCell(0);
    var mountainCell = row.insertCell(1);
    var dateHikeCell = row.insertCell(2);
    var contactPersonCell = row.insertCell(3);

    usernameCell.innerHTML = username;
    mountainCell.innerHTML = mountain;
    dateHikeCell.innerHTML = dateHike;
    contactPersonCell.innerHTML = contactPerson;
}

var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});