let power = "off";
let currentDisplay = "";
let completeOp = document.querySelector(".completeOperation");
let currentOp = document.querySelector(".currentOperation");
let arg1;
let arg2;
let operator;
let lastSolution;
let lastParath = 0;
let openParath = false;
completeOp.textContent = "";
currentOp.textContent = "";


let powerButton = document.querySelector("#power");
powerButton.addEventListener('click', () => {
    if (power == "off") {
        power = "on";
        completeOp.textContent = "0";
        currentOp.textContent = "0";
        completeOp.style.visibility = "visible";
        currentOp.style.visibility = "visible";

    }
    else {
        power = "off";
        completeOp.textContent = "";
        currentOp.textContent = "";
        completeOp.style.visibility = "hidden";
        currentOp.style.visibility = "hidden";
        lastParath = 0; openParath = false;
        arg1 = ""; arg2 = ""; lastSolution = ""
    }
});

let clearButton = document.querySelector("#clear")
clearButton.addEventListener('click', () => {
    if (power == "on") {
    completeOp.textContent = "0";
    currentOp.textContent = "0";
    lastParath = 0; openParath = false;
    arg1 = ""; arg2 = ""; lastSolution = ""
    }
});

let divideButton = document.querySelector("#divide");
let multiplyButton = document.querySelector("#multiplys");
let subButton = document.querySelector("#subtracts");
let addButton = document.querySelector("#adds");

let oneButton = document.querySelector("#one");
let twoButton = document.querySelector("#two");
let threeButton = document.querySelector("#three");
let fourButton = document.querySelector("#four");
let fiveButton = document.querySelector("#five");
let sixButton = document.querySelector("#six");
let sevenButton = document.querySelector("#seven");
let eightButton = document.querySelector("#eight");
let nineButton = document.querySelector("#nine");
let zeroButton = document.querySelector("#zeroes");

let negateButton = document.querySelector("#negate");
let decimalButton = document.querySelector("#decimals");
let backButton = document.querySelector("#backspace");

let equalsButton = document.querySelector("#equals");

oneButton.addEventListener("click", () => {
    if (completeOp.textContent == "0") {completeOp.textContent = "1";}
        else {completeOp.textContent = completeOp.textContent + "1";}
    if (currentOp.textContent == "0"|| currentDisplay == "solution"||currentDisplay == "operator") {
        currentOp.textContent = "1";
        currentDisplay = "input";
       
    }
        else  {
            currentOp.textContent = currentOp.textContent + "1";
            currentDisplay = "input";
        }
});
twoButton.addEventListener("click", () => {
    if (completeOp.textContent == "0") {completeOp.textContent = "2";}
        else {completeOp.textContent = completeOp.textContent + "2";}
    if (currentOp.textContent == "0"|| currentDisplay == "solution"||currentDisplay == "operator") {
        currentOp.textContent = "2";
        currentDisplay = "input";
    }
        else  {
            currentOp.textContent = currentOp.textContent + "2";
            currentDisplay = "input";
        }
});
threeButton.addEventListener("click", () => {
    if (completeOp.textContent == "0") {completeOp.textContent = "3";}
        else {completeOp.textContent = completeOp.textContent + "3";}
    if (currentOp.textContent == "0"|| currentDisplay == "solution"||currentDisplay == "operator") {
        currentOp.textContent = "3";
        currentDisplay = "input";
    }
        else  {
            currentOp.textContent = currentOp.textContent + "3";
            currentDisplay = "input";
        }
});
fourButton.addEventListener("click", () => {
    if (completeOp.textContent == "0") {completeOp.textContent = "4";}
        else {completeOp.textContent = completeOp.textContent + "4";}
    if (currentOp.textContent == "0"|| currentDisplay == "solution"||currentDisplay == "operator") {
        currentOp.textContent = "4";
        currentDisplay = "input";
    }
        else  {
            currentOp.textContent = currentOp.textContent + "4";
            currentDisplay = "input";
        }
});
fiveButton.addEventListener("click", () => {
    if (completeOp.textContent == "0") {completeOp.textContent = "5";}
        else {completeOp.textContent = completeOp.textContent + "5";}
    if (currentOp.textContent == "0"|| currentDisplay == "solution"||currentDisplay == "operator") {
        currentOp.textContent = "5";
        currentDisplay = "input";
    }
        else  {
            currentOp.textContent = currentOp.textContent + "5";
            currentDisplay = "input";
        }
});
sixButton.addEventListener("click", () => {
    if (completeOp.textContent == "0") {completeOp.textContent = "6";}
        else {completeOp.textContent = completeOp.textContent + "6";}
    if (currentOp.textContent == "0"|| currentDisplay == "solution"||currentDisplay == "operator") {
        currentOp.textContent = "6";
        currentDisplay = "input";
    }
        else  {
            currentOp.textContent = currentOp.textContent + "6";
            currentDisplay = "input";
        }
});
sevenButton.addEventListener("click", () => {
    if (completeOp.textContent == "0") {completeOp.textContent = "7";}
        else {completeOp.textContent = completeOp.textContent + "7";}
    if (currentOp.textContent == "0"|| currentDisplay == "solution"||currentDisplay == "operator") {
        currentOp.textContent = "7";
        currentDisplay = "input";
    }
        else  {
            currentOp.textContent = currentOp.textContent + "7";
            currentDisplay = "input";
        }
});
eightButton.addEventListener("click", () => {
    if (completeOp.textContent == "0") {completeOp.textContent = "8";}
        else {completeOp.textContent = completeOp.textContent + "8";}

    if (currentOp.textContent == "0"|| currentDisplay == "solution"||currentDisplay == "operator") {
        currentOp.textContent = "8";
        currentDisplay = "input";
    }
        else  {
            currentOp.textContent = currentOp.textContent + "8";
            currentDisplay = "input";
        }
});
nineButton.addEventListener("click", () => {
    if (completeOp.textContent == "0") {completeOp.textContent = "9";}
        else {completeOp.textContent = completeOp.textContent + "9";}

    if (currentOp.textContent == "0"|| currentDisplay == "solution"||currentDisplay == "operator") {
        currentOp.textContent = "9";
        currentDisplay = "input";
    }
        else  {
            currentOp.textContent = currentOp.textContent + "9";
            currentDisplay = "input";
        }
});
zeroButton.addEventListener("click", () => {
    if (completeOp.textContent != "0") {completeOp.textContent = completeOp.textContent + "0";}

    if (currentOp.textContent == "0"|| currentDisplay == "solution"||currentDisplay == "operator") {
        currentOp.textContent = "0";
        currentDisplay = "input";
    }
        else  {
            currentOp.textContent = currentOp.textContent + "0"
            currentDisplay = "input";
        }
});
negateButton.addEventListener("click", () => {
    if (completeOp.textContent == "0"|| currentDisplay == "solution")
        {completeOp.textContent = "-";}
        else if (currentDisplay == "operator") {
            completeOp.textContent = completeOp.textContent + "(-";
            openParath = true;
        }
        else if (currentDisplay == "input" && currentOp.textContent.charAt(0) != "-") {
            if (arg1) {
                completeOp.textContent = completeOp.textContent.slice(0,completeOp.textContent.lastIndexOf(currentOp.textContent)) 
                + "(-" + completeOp.textContent.slice(completeOp.textContent.lastIndexOf(currentOp.textContent));
                openParath = true;
            }
            else {completeOp.textContent = "-" + completeOp.textContent;}
        }
        else if (currentDisplay == "input" && currentOp.textContent.charAt(0) == "-") {
            if (arg1) {
                completeOp.textContent = (completeOp.textContent.slice(0,(completeOp.textContent.lastIndexOf(currentOp.textContent)-1)) 
                + currentOp.textContent.slice(1));
                openParath = false;
            }
            else {completeOp.textContent = completeOp.textContent.slice(1);}
        }
    
    if (currentOp.textContent == "0"|| currentDisplay == "solution"||currentDisplay == "operator") {
        currentOp.textContent = "-";
        currentDisplay = "input";
    }
        else if (currentOp.textContent[0] == "-") {
            currentOp.textContent = (currentOp.textContent).replace("-" , "");
        }

        else if (currentDisplay != "operator") {
            currentOp.textContent = "-" + currentOp.textContent;
            currentDisplay = "input";
        }
});

decimalButton.addEventListener("click", () => {
    if (currentDisplay =="solution") {
        completeOp.textContent = "0.";
    }
        else if (currentDisplay == "operator" && (currentOp.textContent.indexOf(".") == -1)) {
            completeOp.textContent = completeOp.textContent + "0."
        }

    if (currentDisplay == "solution"||currentDisplay == "operator") {
        currentOp.textContent = "0.";
        currentDisplay = "input";
    }

    else if (currentOp.textContent.indexOf(".") == -1) {
        completeOp.textContent = completeOp.textContent + "."
        currentOp.textContent = currentOp.textContent + ".";
        currentDisplay = "input";
  }
});

addButton.addEventListener("click", () => {
    if (openParath) {
        completeOp.textContent = completeOp.textContent + ")";
        openParath = false;
    }
    if (currentDisplay != "operator") {
        if (arg1) {
            arg2 = currentOp.textContent;
            if ((arg2 === "0" || arg2 === "0." ||arg2 ==="-0" ||arg2 === "-0.") && operator == "/") {
                completeOp.textContent = "0";
                currentOp.textContent = "0";
                lastParath = 0; openParath = false;
                arg1 = ""; arg2 = ""; lastSolution = ""
                return alert("Please don't divide by zero.")
            }
            currentOp.textContent = operate(Number(arg1), Number(arg2), operator);
            arg2 = "";
        }
        completeOp.textContent = completeOp.textContent + "+";
        arg1 = currentOp.textContent;
        operator = "+";
        currentOp.textContent = `${operator}`;
        currentDisplay = "operator";
    }   
});
subButton.addEventListener("click", () => {
    if (openParath) {
        completeOp.textContent = completeOp.textContent + ")";
        openParath = false;
    }
    if (currentDisplay != "operator") {
        if (arg1) {
            arg2 = currentOp.textContent;
            if ((arg2 === "0" || arg2 === "0." ||arg2 ==="-0" ||arg2 === "-0.") && operator == "/") {
                completeOp.textContent = "0";
                currentOp.textContent = "0";
                lastParath = 0; openParath = false;
                arg1 = ""; arg2 = ""; lastSolution = ""
                return alert("Please don't divide by zero.")
            }
            currentOp.textContent = operate(Number(arg1), Number(arg2), operator);
            arg2 = "";
        }
        completeOp.textContent = completeOp.textContent + "-";
        arg1 = currentOp.textContent;
        operator = "-";
        currentOp.textContent = `${operator}`;
        currentDisplay = "operator";
    }
    
});
multiplyButton.addEventListener("click", () => {
    if (openParath) {
        completeOp.textContent = completeOp.textContent + ")";
        openParath = false;
    }
    if (currentDisplay != "operator") {
        if (completeOp.textContent.slice(lastParath).indexOf("+") != -1 || (completeOp.textContent.slice(1).slice(lastParath)).indexOf("-") != -1 ) {
            completeOp.textContent = "(" + completeOp.textContent + ")"
            lastParath = completeOp.textContent.length;
        }
        if (arg1) {
            arg2 = currentOp.textContent;
            if ((arg2 === "0" || arg2 === "0." ||arg2 ==="-0" ||arg2 === "-0.") && operator == "/") {
                completeOp.textContent = "0";
                currentOp.textContent = "0";
                lastParath = 0; openParath = false;
                arg1 = ""; arg2 = ""; lastSolution = ""
                return alert("Please don't divide by zero.")
            }
            currentOp.textContent = operate(Number(arg1), Number(arg2), operator);
            arg2 = "";
        }
        completeOp.textContent = completeOp.textContent + "*";
        arg1 = currentOp.textContent;
        operator = "*";
        currentOp.textContent = `${operator}`;
        currentDisplay = "operator";
    }
    
});
divideButton.addEventListener("click", () => {
    if (openParath) {
        completeOp.textContent = completeOp.textContent + ")";
        openParath = false;
    }
    if (currentDisplay != "operator") {
        if (completeOp.textContent.slice(lastParath).indexOf("+") != -1 || (completeOp.textContent.slice(1).slice(lastParath)).indexOf("-") != -1 ) {
            completeOp.textContent = "(" + completeOp.textContent + ")"
            lastParath = completeOp.textContent.length;
        }
        if (arg1) {
            arg2 = currentOp.textContent;
            if ((arg2 === "0" || arg2 === "0." ||arg2 ==="-0" ||arg2 === "-0.") && operator == "/") {
                completeOp.textContent = "0";
                currentOp.textContent = "0";
                lastParath = 0; openParath = false;
                arg1 = ""; arg2 = ""; lastSolution = ""
                return alert("Please don't divide by zero.")
            }
            currentOp.textContent = operate(Number(arg1), Number(arg2), operator);
            arg2 = "";
        }
        completeOp.textContent = completeOp.textContent + "/";
        arg1 = currentOp.textContent;
        operator = "/";
        currentOp.textContent = `${operator}`;
        currentDisplay = "operator";
    }   

    
});

equalsButton.addEventListener("click", () => {
    if (openParath) {
        completeOp.textContent = completeOp.textContent + ")";
        openParath = false;
    }
    if (arg1 && currentDisplay != "operator") {
    arg2 = currentOp.textContent;
    if ((arg2 === "0" || arg2 === "0." ||arg2 ==="-0" ||arg2 === "-0.") && operator == "/") {
        completeOp.textContent = "0";
        currentOp.textContent = "0";
        lastParath = 0; openParath = false;
        arg1 = ""; arg2 = ""; lastSolution = ""
        return alert("Please don't divide by zero.")
    }
    currentOp.textContent = operate(Number(arg1), Number(arg2), operator);
    arg1 = ""; arg2 = ""; operator = ""; currentDisplay = "solution"; lastSolution = currentOp.textContent;
    }
});

backButton.addEventListener("click", () => {
    if (currentDisplay == "input" && !arg1 && currentOp.textContent != lastSolution) {
        currentOp.textContent = (currentOp.textContent).slice(0,(((currentOp.textContent).length)-1))
        if (completeOp.textContent.charAt((completeOp.textContent.length - 1)) == ")") {
            completeOp.textContent = (completeOp.textContent).slice(0,(((completeOp.textContent).length)-1));
            openParath = true;
        }
            else if (completeOp.textContent.charAt((completeOp.textContent.length - 2)) == "("){
                completeOp.textContent = (completeOp.textContent).slice(0,(((completeOp.textContent).length)-1));
                openParath = false;
            }
        completeOp.textContent = (completeOp.textContent).slice(0,(((completeOp.textContent).length)-1))
        if (currentOp.textContent == "") { 
            currentOp.textContent = "0"; 
            completeOp.textContent = "0"; 
            currentDisplay = "";
        }
    }
        else if (currentDisplay == "input" && arg1) {
            currentOp.textContent = (currentOp.textContent).slice(0,(((currentOp.textContent).length)-1))
            if (completeOp.textContent.charAt((completeOp.textContent.length - 1)) == ")") {
                completeOp.textContent = (completeOp.textContent).slice(0,(((completeOp.textContent).length)-1));
                openParath = true;
            }
                else if (completeOp.textContent.charAt((completeOp.textContent.length - 2)) == "("){
                    completeOp.textContent = (completeOp.textContent).slice(0,(((completeOp.textContent).length)-1));
                    openParath = false;
                }
            completeOp.textContent = (completeOp.textContent).slice(0,(((completeOp.textContent).length)-1))
            if (currentOp.textContent == "") { 
                currentOp.textContent = operator; 
                currentDisplay = "operator";
            }
        }
        else if (currentDisplay == "operator") {
            if (completeOp.textContent.charAt((completeOp.textContent.length - 1)) == ")") {
                completeOp.textContent = (completeOp.textContent).slice(0,(((completeOp.textContent).length)-1));
                openParath = true;
            }
                else if (completeOp.textContent.charAt((completeOp.textContent.length - 2)) == "("){
                    completeOp.textContent = (completeOp.textContent).slice(0,(((completeOp.textContent).length)-1));
                    openParath = false;
                }
            completeOp.textContent = (completeOp.textContent).slice(0,(((completeOp.textContent).length)-1))
            currentOp.textContent = arg1;
            arg1 = ""; operator = ""; currentDisplay = "input";
        }
});

function add(a,b) {
    let floater = (a*10 + b*10) / 10;
    floater = floater.toString()
    let roundUp = false;
    if (floater.indexOf(".") != -1 && 
       (floater.length - floater.indexOf(".")) > 5) {
        
        if (floater.charAt(floater.indexOf(".")+5) > 4) {
            roundUp = true;
        }   
        floater = floater.slice(0, floater.indexOf(".") + 5);
    }
    floater = Number(floater);
    if (roundUp) {floater = floater + 0.0001;}
    return floater;
}

function subtract(a, b) {
    let floater = (a*10 - b*10) / 10;
    floater = floater.toString()
    let roundUp = false;
    if (floater.indexOf(".") != -1 && 
       (floater.length - floater.indexOf(".")) > 5) {
        if (floater.charAt(floater.indexOf(".")+5) > 4) {
            roundUp = true;
        }   
        floater = floater.slice(0, floater.indexOf(".") + 5);
    }
    floater = Number(floater);
    if (roundUp) {floater = floater + 0.0001;}
    return floater;
}  

function multiply(a, b) {
    let floater = a * b;
    floater = floater.toString()
    let roundUp = false;
    if (floater.indexOf(".") != -1 && 
       (floater.length - floater.indexOf(".")) > 5) {
        if (floater.charAt(floater.indexOf(".")+5) > 4) {
            roundUp = true;
        }   
        floater = floater.slice(0, floater.indexOf(".") + 5);
    }
    floater = Number(floater);
    if (roundUp) {floater = floater + 0.0001;}
    return floater;
}

function divide(a, b) {
    let floater = a / b;
    floater = floater.toString()
    let roundUp = false;
    if (floater.indexOf(".") != -1 && 
       (floater.length - floater.indexOf(".")) > 5) {
        if (floater.charAt(floater.indexOf(".")+5) > 4) {
            roundUp = true;
        }   
        floater = floater.slice(0, floater.indexOf(".") + 5);
    }
    floater = Number(floater);
    if (roundUp) {floater = floater + 0.0001;}
    return floater;
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide (a,b);
            break;
        default:
            return alert("Please enter a valid operator.")
    }
}