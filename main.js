function appendValue(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}

function clearResult() {
    document.getElementById('result').value = '';
}
function DEL() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}
