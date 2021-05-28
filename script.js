let operators = ["+", "-", "*", "/", "."];
document.querySelector(".buttons").onclick = function () {
    let target = event.target;
    let input = document.querySelector("#expression")
    let value = "";
    if (target.classList.contains("number")) {
        value = target.innerHTML;
        if (input.value == "0"){
            input.value = value;
        } else {
            input.value += value;
        }
    } else if (target.classList.contains("operation")) {
        value = target.innerHTML;
        let expression = input.value;
        //получаем последний символ из выражения
        let lastChar = expression[expression.length - 1];
        if (operators.indexOf(lastChar) != -1) {
            //заменяем последний символ в выражении на новый символ 
            //.replace непосредственно заменяет 
            //в скобках первый параметр - это регулярное выражение
            //второй параметр - новое значение
            expression = expression.replace(/.$/, value);
            input.value = expression;
        } else {
            // сокращенная запись от
            //input.value = input.value + target.innerHTML
            input.value += value;
        }
    } else if (target.classList.contains("calculation")) {
        let expression = input.value;
        let result = eval(expression);
        input.value = result;
    } else if (target.classList.contains("clearOne")) {
        let expression = input.value;
        expression = expression.substring(0, expression.length - 1);
        input.value = expression;
    } else if (target.classList.contains("clear")) {
        input.value = "0";
    }
}
