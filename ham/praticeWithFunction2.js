function square(numbers) {
  let number = parseFloat(numbers);
  squares = number * number;
  document.getElementById("display1").innerHTML = "Kết quả là : " + squares;
}

function calculate() {
  let radius = document.getElementById("radius").value;
  let pi = 3.14;
  let dt = radius * radius * pi;
  let cv = 2 * radius * pi;
  document.getElementById("area").innerHTML = "Diện tích hình tròn là : " + dt;
  document.getElementById("perimeter").innerHTML =
    "Chu vi hình tròn là : " + cv;
}

function factorial() {
  let number = parseFloat(document.getElementById("input").value);
  let j = 1;
  for (let i = 1; i <= number; i++) {
    j = j * i;
  }
  document.getElementById("display2").innerHTML = "Kết quả là : " + j;
}

function checkText() {
  let txt = document.getElementById("input2").value;
  if (isNaN(txt)) {
    alert("FALSE");
  } else {
    alert("TRUE");
  }
}

function checkMin() {
  let n1 = Number(document.getElementById("number1").value);
  let n2 = Number(document.getElementById("number2").value);
  let n3 = Number(document.getElementById("number3").value);
  let resultDOM = document.getElementById("display3");
  if (!Number.isInteger(n1) || !Number.isInteger(n2) || !Number.isInteger(n3)) {
    resultDOM.innerHTML = "Vui lòng nhập vào số nguyên.";
    return;
  }
  resultDOM.innerHTML =
    "Số bé nhất là :" + (n1 < n2 && n1 < n3 ? n1 : n2 < n3 ? n2 : n3);
}

function checkNum() {
  let n = Number(document.getElementById("numb").value);
  let result = (resultDOM = document.getElementById("display4"));
  if (Number.isInteger(n)) {
    if (n > 0) {
      result.innerHTML = n + " là số nguyên dương.";
    } else {
      result.innerHTML = "Vui lòng nhập một số dương.";
    }
  } else {
    result.innerHTML = "Vui lòng nhập 1 số nguyên dương";
  }
}
