const value1Input = document.getElementById("value1");
const value2Input = document.getElementById("value2");
const resultElement = document.getElementById("result");
const historyElement = document.getElementById("history");

function calculate() {
    const value1 = Number(value1Input.value);
    const value2 = Number(value2Input.value);
    const sum = value1 + value2;

    resultElement.textContent = sum;

    const historyItem = document.createElement("li");
    historyItem.textContent = `${value1} + ${value2} = ${sum}`;
    historyElement.appendChild(historyItem);
}
