function cd() {
    let C = parseInt(document.getElementById('doC').value);
    let F = C * 9 / 5 + 32;
    document.getElementById('demo1').innerHTML = F
}

function cd2() {
    let m = parseInt(document.getElementById('number').value);
    let ft = m * 3.2808;
    document.getElementById('demo2').innerHTML = ft
}

function dthv() {
    let a = parseInt(prompt('Nhập chiều dài 1 cạnh vuông :'));
    dt = a * a;
    document.getElementById('demo3').innerHTML = 'Diện tích hình vuông là : ' + dt
}

function dthcn() {
    let a = parseInt(document.getElementById('canha').value);
    let b = parseInt(document.getElementById('canhb').value);
    dtcn = a * b;
    document.getElementById('demo4').innerHTML = 'Diện tích hình chữ nhật là : ' + dtcn
}

function dthtg() {
    let a = parseInt(document.getElementById('chieuCao').value);
    let b = parseInt(document.getElementById('chieuRong').value);
    dttg = (a * b) / 2
    document.getElementById('demo5').innerHTML = 'Diện tích hình tam giác vuông là : ' + dttg
}