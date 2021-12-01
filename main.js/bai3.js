let string = prompt("Nhập vào số chuỗi bất kì: ");

function kiemTraNguyenAm(str) {
    let nguyenAm = ["a", "o", "e", "u", "i"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < nguyenAm.length; j++) {
            if (str[i].toLowerCase() === nguyenAm[j]) {
                count++;
            }
        }
    }
    return count;
}

document.write("Dãy có: " + kiemTraNguyenAm(string) + " ký tự nguyên âm");