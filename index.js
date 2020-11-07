//function to increase tip value by 5
function increaseTip() {
    document.getElementById("tip").stepUp(5);
}

//function to decrease tip value by 5
function decreaseTip() {
    document.getElementById("tip").stepDown(5);
}

//function to increase number of person value by 1
function increasePerson() {
    document.getElementById("people").stepUp();
}

//function to decrease number of person value by 5
function decreasePerson() {
    document.getElementById("people").stepDown();
}


//function to calculate tip 
const tipcalculate = () => {
    let amount = document.getElementById('bill').value;
    if(amount==""){                              // if user doesnt provide bill amount 
        alert("Bill amount must be filled out");
        return false;
    } 
    else{
        let tipPerc = document.getElementById('tip').value;
        let numberOfPerson = document.getElementById('people').value;
        if(numberOfPerson ==0){
            numberOfPerson =1;
            document.getElementById('people').value = numberOfPerson;      //as number of person cannot be zero
        }
        let tip = amount*(tipPerc/100);
        let total = parseFloat(amount) + parseFloat(tip);
        let dollar = "$";
        let tipPerPerson = dollar + (tip/numberOfPerson).toFixed(2);    //tip per person calculated upto 2 decimal points
        let totalPerPerson = dollar + (total/numberOfPerson).toFixed(2);   //total bill per person calculated upto 2 decimal points

        document.getElementById('tip_per_person').value = tipPerPerson;
        document.getElementById('total_per_person').value = totalPerPerson;
    }
    

}

