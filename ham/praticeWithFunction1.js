function alertMessage(){
    alert('Xin Chào !');
}

function changeValue(valnum){
    valnum = parseFloat(valnum);
    document.getElementById('display1').innerHTML = valnum+1;
}

function total(){
    a = parseFloat(document.getElementById('input1').value);
    b = parseFloat(document.getElementById('input2').value);
    let sum = a+b;
    if (a > b){
        document.getElementById('display2').innerHTML = "Số thứ nhất lớn hơn số thứ hai"
    }else{
        document.getElementById('display2').innerHTML = 'Tổng của 2 tham số là : '+ sum;
    }
}

function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
function checkResult(){
    result = 0;
    alert('Kết quả khi chưa chạy hàm : ' +result);
    result = addNumbers(); 
    alert('Kết quả sau khi chạy hàm : '+result);
}

function findNameStar(){
    let name1 = ['Polaris','Aldebaran','Deneb','Vega','Altair','Dubhe','Regulus'];
    let name2 = ['Ursa Minor','Tarurus','Cygnus','Lyra','Aquila','Ursa Major','Leo'];
    let str = prompt('Nhập tên chòm sao muốn tìm: ');
    for ( let i = 0 ; i < name1.length ;i++){
        if(str == name1[i]){
            document.getElementById('display3').innerHTML = name2[i];
            break;
        }else{
            document.getElementById('display3').innerHTML = 'Không có chòm sao nào trùng tên.';
        }
    }
}