function dis(val){
    document.getElementById("result").value+=val
}
  
function solve(){
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
  
function clr(){
    document.getElementById("result").value = ""
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