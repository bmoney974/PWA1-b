/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

window.Person=Person;

Person.jobs = ["teacher","farmer","student","pilot"];
Person.actions =["sleeping","eating","working"];

function Person(name, row){
    console.log("person created: ", name);
    this.name = name;

//sets initial action for each person
    this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

//set job
    this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

//defines row so JS know what row in the HTML to update the text in
    this.row = row;

//display initial action
    var id = document.getElementById("r" + this.row + "c3");
    id.innerHTML = this.action;
}

Person.prototype = {update: function(){
    if(Math.floor(Math.random() < .01 )){
        var i = Math.floor(Math.random()*Person.actions.length);
        this.action = Person.actions[i];
        var id = document.getElementById("r" + this.row + "c3");
        id.innerHTML = this.action;
    }
}
};