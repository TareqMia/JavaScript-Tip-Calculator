//calculate tip
function calculateTip(){
    var billAmount = document.getElementById("billAmount").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleAmount").value;

    //validate input 
    if (billAmount === "" || serviceQual == 0){
        alert("Please enter values");
        return;
    }

    //check if input is em[ty or <= 1
    if(numOfPeople === "" || numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    }
    else{
        document.getElementById("each").style.display = "block";
    }

    //calculate tip
    var total = (billAmount * serviceQual) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    //display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function(){
    calculateTip();
};