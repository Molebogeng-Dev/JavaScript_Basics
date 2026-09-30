const reset = "0";
let number = document.getElementById("num").textContent = window.prompt("Enter starting number:");

if (number === "")
    number = reset;
    document.getElementById("num").textContent = number;

document.getElementById("subNum").onclick = function() {
    number = String(document.getElementById("startNum").value);
    document.getElementById("num").textContent = number
}

number = Number(number);
document.getElementById("add").onclick = function() {
    document.getElementById("num").textContent = String(number++);
}

document.getElementById("reset").onclick = function() {
    document.getElementById("num").textContent = reset;
}

document.getElementById("minus").onclick = function() {
    document.getElementById("num").textContent = String(number--);
}