const datepicker = document.querySelector("#date-picker");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const bdayMsg = document.querySelector("#birthday-msg");
const luckygif = document.querySelector("#lucky-bday-img");
bdayMsg.style.display = "none";


function sumOfDateDigits(DOB) {
    DOB = DOB.replaceAll('-',0);
    console.log(DOB);
    let sumOfDigits = 0;
    for (let i = 0;i < DOB.length;i++) {
        sumOfDigits += Number(DOB[i]);
    }
    return sumOfDigits;
}

function chekYourBirthdayLucky() {
    let sum = sumOfDateDigits(datepicker.value)
     if (datepicker.value && luckyNumber.value) {
        if (sum % Number(luckyNumber.value) === 0) {
            bdayMsg.style.display = "block";
            luckygif.style.display = "block";
            luckygif.src = "congrats-hooray.gif"
            bdayMsg.innerHTML = "Hurray. Your birthday is lucky";
       
        } else { 
            bdayMsg.style.display = "block";
            luckygif.style.display = "block";
            luckygif.src = "oops.gif";
            bdayMsg.innerHTML = "Oops. Your birthday is not lucky"; 
        }
    }
}

checkBtn.addEventListener("click",chekYourBirthdayLucky)
