function kiemtra() {
    let a = parseInt(prompt('Nhập a :'));
    let b = parseInt(prompt('Nhập b :'));
    if (a % b == 0) {
        document.getElementById('demo1').innerHTML = 'a chia hết cho b'
    } else {
        document.getElementById('demo1').innerHTML = 'a không chia hết cho b'
    }
}

function kiemtra2() {
    let age = parseInt(prompt('Nhập tuổi của bạn: '));
    if (age < 15) {
        document.getElementById('demo2').innerHTML = 'Bạn chưa đủ tuổi để nhập học.'
    } else {
        document.getElementById('demo2').innerHTML = 'Bạn đủ tuổi để nhập học.'
    }
}

function kiemtra3() {
    let num = parseInt(prompt('Nhập số : '));
    if (num > 0) {
        document.getElementById('demo3').innerHTML = num + ' lớn hơn 0'
    } else if (num == 0) {
        document.getElementById('demo3').innerHTML = num + ' bằng 0'
    } else {
        document.getElementById('demo3').innerHTML = num + ' bé hơn 0'
    }
}

function kiemtra4() {
    let x = parseInt(prompt('Nhập số thứ nhất :'));
    let y = parseInt(prompt('Nhập số thứ hai: '));
    let z = parseInt(prompt('Nhập số thứ ba: '));
    if (x > y) {
        if (x > z) {
            document.getElementById('demo4').innerHTML = 'Số lớn nhất là : ' + x
        } else {
            document.getElementById('demo4').innerHTML = 'Số lớn nhất là : ' + z
        }
    } else {
        if (y > z) {
            document.getElementById('demo4').innerHTML = 'Số lớn nhất là : ' + y
        } else {
            document.getElementById('demo4').innerHTML = 'Số lớn nhất là : ' + z
        }
    }
}

function kiemtra5() {
    let kt = parseFloat(prompt('Nhập điểm kiêm tra 15p: '));
    let ktgk = parseFloat(prompt('Nhập điểm kiểm tra giữa kỳ: '));
    let ktck = parseFloat(prompt('Nhập điểm kiểm tra cuối kỳ: '));
    let dtb = (kt + ktgk * 2 + ktck * 3) / 6;
    if (dtb >= 8.5) {
        document.getElementById('demo5').innerHTML = 'Điểm trung bình của bạn là : ' + dtb + '.' + ' Bạn đạt học sinh giỏi'
    } else {
        if (dtb >= 6.5) {
            document.getElementById('demo5').innerHTML = 'Điểm trung bình của bạn là : ' + dtb + '.' + ' Bạn đạt học sinh khá'
        } else {
            if (dtb >= 5) {
                document.getElementById('demo5').innerHTML = 'Điểm trung bình của bạn là : ' + dtb + '.' + ' Bạn đạt học sinh trung bình'
            } else {
                document.getElementById('demo5').innerHTML = 'Điểm trung bình của bạn là : ' + dtb + '.' + ' Bạn đạt học sinh yếu'
            }
        }
    }

}

function kiemtra6() {

}

function kiemtra7() {

}