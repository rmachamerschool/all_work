//test

var isFull = false;
// ALL ANIMAL METHODS
function sleep(time){
    var howlongtosleep=time;
console.log("I'm sleeping for " + howlongtosleep + " hours. Don't wake me!")
}

function eat(amount){
    let amountToEat = amount;
    if (amountToEat > 0) {
        isFull = true;
    }
    console.log("You ate" + amountToEat + " lbs of food"
                + "Are you full?" + isFull);
}
function jump(howHigh , howLong){
console.log("You're jumping" + howHigh + " ft high for" 
                + howLong + " mins")
}

//CALLING ALL METHODS
sleep(5);
eat(70);
jump(3,2);