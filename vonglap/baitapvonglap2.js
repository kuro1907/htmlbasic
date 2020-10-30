function fib() {
  let x = 0;
  let y = 1;
  let i = 1;
  let n;
  do {
    n = parseInt(prompt("Nhập số Fibonanci bạn cần : "));
    while (n < 0) {
      n = parseInt(
        prompt("Số không được âm , vui lòng nhập lại số Fibonanci bạn cần : ")
      );
    }
    while (i <= n) {
      let sum = x + y;
      document.getElementById("demo1").innerHTML +=
        "</br>Số Fibonanci thứ " + i + " là : " + sum;
      x = y;
      y = sum;
      i++;
    }
  } while (isNaN(n));
}

function giaiThua() {
  let i = 1;
  let n;
  let kq = 1;
  do {
    n = parseInt(prompt("Nhập số giai thừa bạn cần :"));
    while (n < 0) {
      n = parseInt(
        prompt("Số không được âm , vui lòng nhập lại số giai thừa bạn cần : ")
      );
    }
    while (i <= n) {
      kq = kq * i;
      i++;
    }
    document.getElementById("demo2").innerHTML = "Kết quả là : " + kq;
  } while (isNaN(n));
}

function tamGiac() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
      document.getElementById("demo3").innerHTML += "*";
    }
    document.getElementById("demo3").innerHTML += "</br>";
  }
  for (let i = 5; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      document.getElementById("demo3").innerHTML += "*";
    }
    document.getElementById("demo3").innerHTML += "</br>";
  }
  for (let i = 1; i <= 5; i++) {
    for (let k = 0; k <= 5 - i; k++) {
      document.getElementById("demo3").innerHTML += "&nbsp;&nbsp";
    }
    for (let j = 0; j < i; j++) {
      document.getElementById("demo3").innerHTML += "*";
    }
    document.getElementById("demo3").innerHTML += "</br>";
  }

  for (let i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
      document.getElementById("demo3").innerHTML += "&nbsp;&nbsp";
    }

    for (k = 0; k <= 5 - i; k++) {
      document.getElementById("demo3").innerHTML += "*";
    }
    document.getElementById("demo3").innerHTML += "</br>";
  }
}

function chuNhat() {
  let space = "&nbsp;&nbsp;";
  for (i = 1; i <= 7; i++) {
    document.getElementById("demo4").innerHTML += "</br>" + "*";
    for (j = 1; j <= 21; j++) {
      if (i > 1 && j < 21 && i < 7) {
        document.getElementById("demo4").innerHTML += space;
      } else {
        document.getElementById("demo4").innerHTML += "*";
      }
    }
  }
}
