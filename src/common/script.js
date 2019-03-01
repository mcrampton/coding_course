let button1 = document.getElementsByClassName("inputButton")[0];
let button2 = document.getElementsByClassName("inputButton")[1];
let button3 = document.getElementsByClassName("inputButton")[2];
const output = document.getElementById("output");
const multiplyButton = document.getElementById("multiplyButton");


// Plus one digit
button1.addEventListener('click', () => { 
    let value = parseInt(button1.innerHTML);
    value++;
    button1.innerHTML = String(value);
    }, false);
    button2.addEventListener('click', () => { 
        let value = parseInt(button2.innerHTML);
        value++;
        button2.innerHTML = String(value);
        }, false);  
button3.addEventListener('click', () => { 
            let value = parseInt(button3.innerHTML);
            value++;
            button3.innerHTML = String(value);
            }, false);
            
 // Minus one digit
    button1.addEventListener('contextmenu', (ev) => { 
        ev.preventDefault();
        let value = parseInt(button1.innerHTML); 
        value--;
        button1.innerHTML = String(value); 
    }, false);
    button2.addEventListener('contextmenu', (ev) => { 
        ev.preventDefault();
        let value = parseInt(button2.innerHTML); 
        value--;
        button2.innerHTML = String(value); 
    }, false);
    button3.addEventListener('contextmenu', (ev) => { 
        ev.preventDefault();
        let value = parseInt(button3.innerHTML); 
        value--;
        button3.innerHTML = String(value); 
    }, false);

// Multiply buttons
    multiplyButton.addEventListener('click', () => {
        output.innerHTML = parseInt(button1.innerHTML) * parseInt(button2.innerHTML) * parseInt(button3.innerHTML);
    }, false);

(function setActive() {
    aObj = document.querySelectorAll('nav a');
        for (i=0;i<aObj.length; i++) {
            if(document.location.href == aObj[i].href) {
                aObj[i].className = 'active';
            }
        }
        window.onload = setActive;
})();
