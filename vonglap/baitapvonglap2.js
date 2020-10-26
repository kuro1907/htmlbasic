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
  let i = 0;
  let n = 0;
  while (n < 5) {
    while (i < 5) {
      document.getElementById("demo3").innerHTML += "*";
      document.getElementById("demo3").innerHTML += "</br>";
      i++;
    }
    n++;
  }
}
