function calculate(operation) {
    var inputA = parseFloat(document.getElementById("inputA").value);
    var inputB = parseFloat(document.getElementById("inputB").value);
    var resultDisplay = document.getElementById("result");
    
    if (isNaN(inputA) || isNaN(inputB)) {
        resultDisplay.innerText = "Vui lòng nhập đúng định dạng số";
        return;
    }
    
    switch (operation) {
        case "SUM":
            resultDisplay.innerText = "Tổng của A và B là: " + (inputA + inputB);
            break;
        case "SUBTRACT":
            resultDisplay.innerText = "Hiệu của A và B là: " + (inputA - inputB);
            break;
        case "MULTIPLY":
            resultDisplay.innerText = "Tích của A và B là: " + (inputA * inputB);
            break;
        case "DIVIDE":
            if (inputB === 0) {
                resultDisplay.innerText = "Không thể chia cho 0";
            } else {
                resultDisplay.innerText = "Thương của A và B là: " + (inputA / inputB);
            }
            break;
        default:
            resultDisplay.innerText = "Lỗi";
            break;
    }
}

function resetInputs() {
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
    document.getElementById("result").innerText = "";
}
