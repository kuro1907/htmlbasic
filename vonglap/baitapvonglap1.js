function demSo() {
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
  if ((i = 99)) {
    alert("Finish");
  }
}
function tinhNhietdo() {
  let temp = parseFloat(prompt("Nhập nhiệt độ"));
  if (isNaN(temp)) {
    alert("Vui lòng nhập nhiệt độ là số");
  } else {
    switch (temp > 100 ? 1 : temp < 20 ? 2 : 0) {
      case 1:
        document.getElementById("demo2").innerHTML = "Xin hãy giảm nhiệt độ.";
        break;
      case 2:
        document.getElementById("demo2").innerHTML = "Xin hãy tăng nhiệt độ.";
        break;
      case 0:
        document.getElementById("demo2").innerHTML =
          "Nhiệt độ của bạn bình thường.";
        break;
    }
  }
}
function fibonanci() {
  let x = 0;
  let y = 1;
  for (let i = 1; i <= 20; i++) {
    sum = x + y;
    document.getElementById("demo3").innerHTML +=
      "<br>Số Fibonanci thứ " + i + " là : " + sum;
    x = y;
    y = sum;
  }
}
function fibonanci2() {
  let x = 0;
  let y = 1;
  for (let i = 1; i <= 20; i++) {
    sum = x + y;
    if (sum % 5 == 0) {
      document.getElementById("demo4").innerHTML =
        "Số Fibonanci chia hết cho 5 đầu tiên là : " + sum;
      break;
    }
    x = y;
    y = sum;
  }
}
function fibonanci3() {
  let x = 0;
  let y = 1;
  let sum2 = 0;
  for (let i = 1; i <= 20; i++) {
    let sum = x + y;
    x = y;
    y = sum;
    sum2 += sum;
  }
  document.getElementById("demo5").innerHTML =
    "Tổng của 20 số Fibonanci là : " + sum2;
}

function tinhTong() {
  let sum = 0;
  for (let i = 7; i <= 210; i = i + 7) {
    sum += i;
  }
  document.getElementById("demo6").innerHTML =
    "Tổng của 30 số tự nhiên chia hết cho 7 đầu tiên là : " + sum;
}

function showNumber() {
  for (let i = 1; i <= 100; i++) {
    switch (
      i % 3 == 0 && i % 5 == 0 ? 35 : i % 3 == 0 ? 3 : i % 5 == 0 ? 5 : 0
    ) {
      case 3:
        document.getElementById("demo7").innerHTML += "Fizz</br>";
        break;
      case 5:
        document.getElementById("demo7").innerHTML += "Buzz</br>";
        break;
      case 35:
        document.getElementById("demo7").innerHTML += "Fizzbuzz</br>";
        break;
      case 0:
        document.getElementById("demo7").innerHTML += i + "</br>";
    }
  }
}
function game() {
  let count = parseInt(prompt("Nhập khoảng bạn muốn đoán :"));
  let random = Math.random * count;
  for (let i = 0; i < 3; i++) {
    let guess = parseInt(prompt("Nhập số bạn đoán : "));
    if (guess > random) {
      alert("Số bạn nhậu lớn hơn đáp án");
    }
  }
}
