/* for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
      console.log(current);
      break;
    }
  }
  This was a bad piece of code */

  function odd(){
      // if a number is divisable by 2 its even
      // if a number is not divisable by 2 its odd
      // Always use Precise Equals "==="

      var currentNumber=Number(prompt("Enter a number"));
      document.getElementById("num").innerHTML=currentNumber;
      if (currentNumber % 2===0) {
          var msg="theNumber:"+ currentNumber+"is even";
          document.getElementById("result").innerHTML = msg;

      }
      else{
          var msg2="theNumber:"+currentNumber+"is odd";
          document.getElementById("result").innerHTML = msg;
          // start your engines
      }
    }


