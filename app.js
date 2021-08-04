const datepicker = document.querySelector("#date-picker");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const bdayMsg = document.querySelector("#birthday-msg");
bdayMsg.style.display = "none";

datepicker.value = "1998-01-01";


console.log("date choosen",datepicker.value,typeof(datepicker.value),luckyNumber.value,typeof(luckyNumber.value))

const luckyNo = parseInt(luckyNumber.value);

const splitDate = datepicker.value.split('-').map(Number);

console.log("split date",splitDate)


function chekYourBirthdayLucky() {
    let element = 0;
    for (let index = 0; index < splitDate.length; index++) {
        element += splitDate[index];      
    }  
    if (element % luckyNo === 0) {
        bdayMsg.style.display = "block";
        bdayMsg.innerHTML = "Hurray. Your birthday is lucky";
        
        console.log("Hurray. Your birthday is lucky");
    } else {
        console.log("Oops. Your birthday is not lucky");
        bdayMsg.style.display = "block";
        bdayMsg.innerHTML = "Oops. Your birthday is not lucky";
    }
}

checkBtn.addEventListener("click",chekYourBirthdayLucky)
