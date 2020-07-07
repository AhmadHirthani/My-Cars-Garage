"use strict";
// alert('good morning');
var submitButton = document.getElementById('submitButton');
var carsArray=JSON.parse(localStorage.getItem('carsArray')) ||[];

submitButton.addEventListener('click', getUserInput);




function getUserInput() {
    //  alert('good morning');
    var carModel = document.getElementById('carModel').value.toLowerCase();
    var modelYear = document.getElementById('modelYear').value;
    var e = document.getElementById("manufacturer");
    var manufacturer = e.options[e.selectedIndex].value;
    var price;
    if(carModel=="bmw"){
        price=9800;

    }else if(carModel=="mercedes"){
        price=8000;
    }
    else if(carModel=="cadilac"){
    price=9000;}


    carsArray.push([carModel,modelYear,price,manufacturer])
    localStorage.setItem('carsArray',JSON.stringify(carsArray))


}

tableRender()



function tableRender(){

    var carsTable=document.getElementById('carsTable');
    for(var i=0;i<carsArray.length;i++){

    var carRow=document.createElement('tr');

    var carModelTd=document.createElement('td');
    carModelTd.textContent=carsArray[i][0];

    var modelYearTd=document.createElement('td');
    modelYearTd.textContent=carsArray[i][1];
    
    var priceTd=document.createElement('td');
    priceTd.textContent=carsArray[i][2];

    var manufacturerTd=document.createElement('td');
    manufacturerTd.textContent=carsArray[i][3];

    carRow.appendChild(carModelTd);
    carRow.appendChild(modelYearTd);
    carRow.appendChild(priceTd);
    carRow.appendChild(manufacturerTd);
    carsTable.appendChild(carRow);


    }

}
