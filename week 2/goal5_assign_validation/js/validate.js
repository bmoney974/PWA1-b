/*
     Bobby Newland
     9-15-13
*/

(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        var uName = document.getElementById("f_username"); // user name
        var email = document.getElementById("f_email"); // email
        var pNum = document.getElementById("f_phone"); //phone number
        var ssn = document.getElementById("f_ssn"); // social security
        var pWord = document.getElementById("f_password");// password

        validateField(uName);  //id = is the form input field ID
        validateField(email);
        validateField(pNum);
        validateField(ssn);
        validateField(pWord);


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){   // validate function

        if (inputName.name === "f_username"){  // username input validation
            var pattern = /^[A-Z\s^A-Z$]/;

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.
        }else if(inputName.name === "f_email"){    // email input validation
          var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        }else if(inputName.name === "f_phone"){  // phone input validation
           var pattern = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
        }else if (inputName.name === "f_ssn"){  // ssn input validation
           var pattern =  /^\d{3}-\d{2}-\d{4}$/;
        }else if(inputName.name === "f_password"){   // password input validation
          var pattern = /^[a-zA-Z]\w{4,15}$/;
        }

        var pass = pattern.test(inputName.value);   // regex test code
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;   // error message

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrap



