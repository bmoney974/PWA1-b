// Wizard Class File
// Keep the constructor small- Use the prototype


 var Wizard = function (options){

     return new Wizard.prototype.init(options);
};

Wizard.prototype = {

    init: function (options){
        this.name = options.name;
        this.power = options.power;
        this.strength = options.strength;

    },

        location: "skyrim",
        hello: function(){},
        die: function(){
            console.log("aaaaaAarrgh, I " + this.name + " Havth been slain");
        }

};


Wizard.prototype.init.prototype = Wizard.prototype;
