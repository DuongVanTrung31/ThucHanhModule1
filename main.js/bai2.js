let array = [1,2,3,4,5,6,7,8,9,10,11,12,545]
let inputNum = parseInt(prompt('Nhập số cần tìm trong mảng'));
function checkIndexInArr(input,arr) {
    let result;
    let i = 0;
    for (; i < arr.length ; i ++) {
        if (arr[i] === input) {
            result = i;
            break;
        } else {
            result = -1;
        }
    }
    if (result !== -1) {
        return alert(`Số ${input} có trong mảng và nằm ở vị trí ${i}`)
    } else {
        return alert('Không có trong mảng')
    }

}
checkIndexInArr(inputNum,array);