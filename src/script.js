let isdarkmode=true;
let modebtn= document.getElementById('modebtn');
let body = document.body;  // Get the body element

modebtn.addEventListener('click',() => {
    if(isdarkmode){
        body.classList.add('dark');
    }
    else{
        body.classList.remove('dark');
    }
    isdarkmode=!isdarkmode;
}
)


let display = document.querySelector('input[type="text"]');
let ans = document.getElementById('ans');
let memory = 0;
let currans = '';
let actualOperation = '';

function inputfnc(ele) {
    actualOperation += ele;
}

function displayFnc(ele) {
    display.value += ele;
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        currans = eval(actualOperation);
        display.value = currans;
        ans.textContent = currans;
        actualOperation = currans.toString(); // Update actualOperation to reflect current result
    }
    catch (error) {
        display.value = 'Error';
        ans.textContent = '';
        actualOperation = ''; // Clear actualOperation on error
    }
}

function clrAll() {
    display.value = '';
    ans.textContent = 'Ans';
    actualOperation = ''; // Clear actualOperation on clear
}

function addtomemory() {
    memory += parseFloat(display.value) || 0; // Handle NaN values
    clrAll();
}

function subfrommemory() {
    memory -= parseFloat(display.value) || 0; // Handle NaN values
    clrAll();
}

function recallmemory() {
    display.value += memory;
}

function toggleSign() {
    display.value = (parseFloat(display.value) || 0) * -1; // Handle NaN values
}

function random() {
    display.value = Math.random();
}

function getAnswer() {
    display.value = currans; // Use currans instead of currentAnswer
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const ele = button.textContent.trim();
        switch (ele) {
            case 'Sin':
                inputfnc('Math.sin(');
                displayFnc('Sin(')
                break;

            case 'Cos':
                inputfnc('Math.cos(');
                displayFnc('Cos(')
                break;

            case 'Tan':
                inputfnc('Math.tan(');
                displayFnc('Tan(')
                break;

            case 'Sin -1':
                inputfnc('Math.asin(');
                displayFnc('Sin -1(')
                break;

            case 'Cos -1':
                inputfnc('Math.acos(');
                displayFnc('Cos -1(')
                break;

            case 'Tan -1':
                inputfnc('Math.atan(');
                displayFnc('Tan -1(')
                break;

            case 'π':
                inputfnc('Math.PI');
                displayFnc('π')
                break;

            case 'e':
                inputfnc('Math.E');
                displayFnc('e')
                break;

            case 'x y':
                inputfnc('**');
                displayFnc('^')
                break;

            case 'x 3':
                inputfnc('**3');
                displayFnc('^3')
                break;

            case 'x 2':
                inputfnc('**2');
                displayFnc('^2')
                break;

            case 'e x':
                inputfnc('Math.exp(');
                displayFnc('e^(')
                break;

            case '10 x':
                inputfnc('10**');
                displayFnc('10^')
                break;

            case 'y √x':
                inputfnc('Math.pow(');
                displayFnc('√(')
                break;

            case '3√x':
                inputfnc('Math.cbrt(');
                displayFnc('³√(')
                break;

            case '√x':
                inputfnc('Math.sqrt(');
                displayFnc('√(')
                break;

            case 'ln':
                inputfnc('Math.log(');
                displayFnc('ln(')
                break;

            case 'log':
                inputfnc('Math.log10(');
                displayFnc('log(')
                break;

            case '(':
                inputfnc('(');
                displayFnc('(')
                break;

            case ')':
                inputfnc(')');
                displayFnc(')')
                break;

            case '1/x':
                inputfnc('1/');
                displayFnc('1/')
                break;

            case '%':
                inputfnc('/100');
                displayFnc('%')
                break;

            case 'n!':
                inputfnc('factorial(');
                displayFnc('factorial(')
                break;

            case '+':
                inputfnc("+");
                displayFnc('+')
                break;

            case '-':
                inputfnc("-");
                displayFnc('-')
                break;

            case 'x':
                inputfnc('*');
                displayFnc('x')
                break;

            case '÷':
                inputfnc('/');
                displayFnc('÷')
                break;

            case '.':
                inputfnc('.');
                displayFnc('.')
                break;

            case '=':
                calculate();
                break;

            case 'Back':
                backspace();
                break;

            case 'AC':
                clrAll();
                break;

            case 'Ans':
                getAnswer();
                break;

            case 'M+':
                addtomemory();
                break;

            case 'M-':
                subfrommemory();
                break;

            case 'MR':
                recallmemory();
                break;

            case '±':
                toggleSign();
                break;

            case 'RND':
                random();
                break;

            default:
                inputfnc(ele);
                displayFnc(ele)
        }
    });
});

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
