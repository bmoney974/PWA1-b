/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

var names = ["Jimmy","Mark","Yolanda","Zane","Bobby",];

var numOfPeople = 3;
var people =[];
var interval;


for(var i=0 ; i< numOfPeople;i++){
 var personIndex =  Math.floor(Math.random()*names.length);

    populateHTML(Person.name,"r"+(i+1)+"c1");
    populateHTML(Person.job, "r"+(i+1)+"c2");

    people.push(Person);
    names.splice(personIndex, 1);
};

clearInterval(interval);
interval = setInterval(runUpdate, 1000 / 30);


function populateHTML(data, field){
    var id = document.getElementById(field);
    id.innerHTML = data;
}

function runUpdate(){
    people.forEach(function(test){
        test.update();
//console.log(element);
    });
}