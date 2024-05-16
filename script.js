function dis(val) {   
    const resultInput = document.getElementById("result");
    if (resultInput.value.trim().length < 19) {
        resultInput.value += val;
        let value = resultInput.value.replace(/[^\d.*/+-]/g, '');
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        resultInput.value = value;
    }
}

 
function solve(){
    let x = document.getElementById("result").value.replace(/,/g, '');
    let y = eval(x);
    let formattedResult = y.toLocaleString('en-US');
    document.getElementById("result").value = formattedResult;
}
  
function clr(){
    document.getElementById("result").value = ""
}

function bck() {
    let result = document.getElementById("result");
    if (result) {
        result.value = result.value.slice(0, -1);
    }
}

function toggleButtons() {
    let buttons = document.querySelectorAll('input[type="button"]:not([value="off"])');
    let display = document.querySelector('#result');
    let controls = document.querySelectorAll('.controls input[type="button"]');
    let powerButton = document.querySelector('#toggle')
    
    if (powerButton.value === "off") {
        buttons.forEach(function(button) {
            button.disabled = true
            button.style.color = "#646363"
            button.style.cursor = "auto"
        });
        display.disabled = true
        powerButton.value = "on"
    } else {
        buttons.forEach(function(button) {
            button.disabled = false
            button.style.color = "#fff"
            button.style.cursor = "pointer"
            controls.forEach((control) =>{
                control.style.color = "black"
            })
        });
        display.disabled = false; 
        powerButton.value = "off"
    }
}