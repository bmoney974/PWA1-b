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



    //console.log(roundArea);
    console.log("FIGHT!!!");




    var round= 1;
    function fight(){
       // alert(p1Arr[0]+":"+p1Arr[2]+"  *START*  "+p2Arr[0]+":"+p2Arr[2]);
       // for (var i = 0; i < 10; i++)
       // {
                           console.log("this is a test round",round);

      // var  roundMove = 1;
        var roundArea = document.querySelector("#round");
        roundArea.innerHTML = ("Round "+ round+"<br>" + winnerCheck());
        // console.log("this",roundMove++);

            var f1 = Math.floor(Math.random()*p1Damage + p1Damage *.5);    // math formula
            var f2 = Math.floor(Math.random()*p2Damage + p2Damage *.5);


        var p1Score = document.querySelector("#kabal");  // player 1 score variable
        p1Score.innerHTML= ("Spiderman: " +p1Health );    // player 1 html output

        // var scores = document.querySelector("#scores");
        //scores.innerHTML =("kh");

        var p2Score = document.querySelector("#kratos");  // player 2 score variable

        p2Score.innerHTML =( "Batman: " +p2Health);     // player 2 score html   output

//        var totalResult =  document.querySelector("scores active");
//        totalResult.innerHTML = (+ winnerCheck());

        //inflict damage
            p1Health-=f1;
            p2Health-=f2;

           console.log(p1Name+": "+p1Health + " " + p2Name+":"+ p2Health);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="Next Round")
            {
//                var myCtr = 0;
//                var myCounter1 = function(newct){
//                      myCtr = (newct)+1;
//                    console.log("function ",(myCtr++));
//                };
//
//                myCounter1(1);
//                //alert(p1Name+":"+p1Health+"  *ROUND "+round+" OVER"+"*  "+p2Name+":"+p2Health)
// ;
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

    //fight();

})();