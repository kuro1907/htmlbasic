function myColor() {
  let string = ["Red", "Green", "White", "Black"];
  document.getElementById("demo1").innerHTML = string.join();
}

function display() {
  let input = parseInt(prompt("Input number :"));
  let str = input.toString();
  let result = [str[0]];
  for (let x = 1; x < str.length; x++) {
    if (str[x - 1] % 2 == 0 && str[x] % 2 == 0) {
      result.push("-", str[x]);
    } else {
      result.push(str[x]);
    }
  }
  document.getElementById("demo2").innerHTML = result.join("&nbsp");
}

function display2() {
  let input = prompt("Nhập dữ liệu:");
  let UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let LOWER = "abcdefghijklmnopqrstuvwxyz";
  var result = [];
  for (let i = 0; i < input.length; i++) {
    if (UPPER.indexOf(input[i]) !== -1) {
      result.push(input[i].toLowerCase());
    } else if (LOWER.indexOf(input[i]) !== -1) {
      result.push(input[i].toUpperCase());
    } else {
      result.push(input[i]);
    }
  }
  document.getElementById("demo3").innerHTML = result.join("&nbsp");
}
