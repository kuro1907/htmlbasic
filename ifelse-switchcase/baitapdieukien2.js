function cd() {
  let C = parseInt(document.getElementById("doC").value);
  let F = (C * 9) / 5 + 32;
  document.getElementById("demo1").innerHTML = F;
}

function cd2() {
  let m = parseInt(document.getElementById("number").value);
  let ft = m * 3.2808;
  document.getElementById("demo2").innerHTML = ft;
}

function dthv() {
  let a = parseInt(prompt("Nhập chiều dài 1 cạnh vuông :"));
  dt = a * a;
  document.getElementById("demo3").innerHTML =
    "Diện tích hình vuông là : " + dt;
}

function dthcn() {
  let a = parseInt(document.getElementById("canha").value);
  let b = parseInt(document.getElementById("canhb").value);
  dtcn = a * b;
  document.getElementById("demo4").innerHTML =
    "Diện tích hình chữ nhật là : " + dtcn;
}

function dthtg() {
  let a = parseInt(document.getElementById("chieuCao").value);
  let b = parseInt(document.getElementById("chieuRong").value);
  dttg = (a * b) / 2;
  document.getElementById("demo5").innerHTML =
    "Diện tích tam giác vuông là : " + dttg;
}

function ptBac1() {
  let a = parseInt(prompt("Nhập a : "));
  let b = parseInt(prompt("Nhập b : "));
  if (a == 0) {
    if (b == 0) {
      document.getElementById("demo6").innerHTML =
        "Phương trình này có vô số nghiệm";
    } else {
      document.getElementById("demo6").innerHTML = "Phương trình này vô nghiệm";
    }
  } else {
    document.getElementById("demo6").innerHTML =
      "Phương trình này có nghiệm x là : " + -b / a;
  }
}

function ptBac2() {
  let a = parseInt(prompt("Nhập a : "));
  let b = parseInt(prompt("Nhập b : "));
  let c = parseInt(prompt("Nhập c : "));
  let delta = b * b + 4 * a * c;
  switch (delta > 0 ? 1 : delta < 0 ? 2 : 0) {
    case 1:
      document.getElementById("demo7").innerHTML =
        "Phương trình có nghiệm x1 = " +
        ((-b + Math.sqrt(delta)) / 2) * a +
        "</br>Phương trình có nghiệm x2 = " +
        ((-b - Math.sqrt(delta)) / 2) * a;
      break;
    case 2:
      document.getElementById("demo7").innerHTML = "Phương trình vô nghiệm";
      break;
    case 0:
      document.getElementById("demo7").innerHTML =
        "Phương trình có nghiệm x1 = x2 = " + (-b / 2) * a;
  }
}
function checkAge() {
  let age = parseInt(document.getElementById("age").value);
  if (age > 0 && age < 120) {
    document.getElementById("demo8").innerHTML = "Đây là số tuổi của một người";
  } else {
    document.getElementById("demo8").innerHTML =
      "Đây không phải là tuổi của người";
  }
}

function checkInput() {
  let a = parseFloat(document.getElementById("inputA").value);
  let b = parseFloat(document.getElementById("inputB").value);
  let c = parseFloat(document.getElementById("inputC").value);
  if (a + b > c && b + c > a && a + c > b && a > 0 && b > 0 && c > 0) {
    document.getElementById("demo9").innerHTML =
      "a ,b ,c là cạnh của một tam giác";
  } else {
    document.getElementById("demo9").innerHTML =
      "a ,b ,c không phải là cạnh của một tam giác";
  }
}

function checkValue() {
  let a = parseFloat(document.getElementById("value").value);
  switch ((a>0 && a=<50)?1:())
}
