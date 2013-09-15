/** Bobby Newland
 * Duel Fight Game - FINISHED
 * Date: 9/15/13
 * duel 3

*/
(function(){

  var fgtObj= {           // object array
      fightersObj:[
          {name:"Spiderman", damage:20,health:100 },   // p1 object
          {name:"Batman", damage:20,health:100}]        // p2 object
  };

   //var p1Arr = ["Spiderman",20,100];
   //var p2Arr = ["Batman",20,100];

    var  p1Name = fgtObj.fightersObj[0]["name"];              // object ref
    var p1Health = fgtObj.fightersObj[0]["health"];
    var p1Damage = fgtObj.fightersObj[0]["damage"];

    var p2Name = fgtObj.fightersObj[1]["name"];
    var p2Health = fgtObj.fightersObj[1]["health"];
    var p2Damage = fgtObj.fightersObj[1]["damage"];

    var fightButton = document.getElementById("fight_btn");    // fight button
    fightButton.onclick =fight;



    console.log("FIGHT!!!");




    var round= 1;
    function fight(){

                           console.log("this is a test round",round);


        var roundArea = document.querySelector("#round");
        roundArea.innerHTML = ("Round "+ round+"<br>" + winnerCheck());


            var f1 = Math.floor(Math.random()*p1Damage + p1Damage *.5);    // math formula
            var f2 = Math.floor(Math.random()*p2Damage + p2Damage *.5);


        var p1Score = document.querySelector("#kabal");  // player 1 score variable
        p1Score.innerHTML= ("Spiderman: " +p1Health );    // player 1 html output



        var p2Score = document.querySelector("#kratos");  // player 2 score variable

        p2Score.innerHTML =( "Batman: " +p2Health);     // player 2 score html   output



        //inflict damage
            p1Health-=f1;
            p2Health-=f2;

           console.log(p1Name+": "+p1Health + " " + p2Name+":"+ p2Health);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="Next Round")
            {

                round++;
            } else{

                //alert(result);
                //break;
            };

        //};
    };

    function winnerCheck(){
        var result="Next Round";
        if (p1Health < 1 && p2Health < 1)
        {
            result = "You Both Die";
        } else if(p1Health < 1){
            result =p2Name+" WINS!!!"
        } else if (p2Health < 1)
        {
            result = p1Name+" WINS!!!"
        }
       return result;

    };



})();