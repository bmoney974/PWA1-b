// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var array =[1,2,3,4,5];
    var avgNumbers = function(arr){

        var count = 0
        var total = 0
        for (var i = 0, j = array.length; i<j;i++){
            count++;
            total = total + array[i];
        }
        return total/count;
    };

    console.log('avg number = ', avgNumbers(array));

    //--------------------------------------------------------
    console.log("2. concat first and last name");


    var fullName = function(fName,lName){
      var name =  fName.concat(lName);
         result = name;

        return result;
    };


    console.log(fullName('James ', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var string = "These are some words";


        var wordCount = function(words){
           var wCount = string.split(" ");
            result2 = wCount.length;
            return result2;
        };


    console.log("There are ",wordCount(string)," words");

    //--------------------------------------------------------
    console.log("4. sentence char count");
    var text = " These are some words"

      var charCount = function (){
                  var cCount = text.split("");
                result3 = cCount.length;
          return result3;
      };
    console.log("There are ",charCount(text)," characters");

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");
         var word = "JavaScript";

         var  vowelFn = function(vowelCount){
            var vowel = vowelCount.charAt(1,3,7);
                result4 = vowel.length;
             return result4;

        };
    console.log("test");
    console.log("There are ",vowelFn(word),"vowels");

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        var num = [31,22,4,67,83,6,5,4];
        var numb = num.split("");

        var findNum = function(pram1,pram2){
          var oddnum = pram1.splice(0,3,4,6);
          var evennum = pram1.splice(1,2,5,7);
            var even = pram2;
            result5= oddnum;
            result6 = evennum;
                if(even = true){
                    return result6;
                }else{
                    return result5;
                }
        };

    console.log(findNum(num,false));


})();