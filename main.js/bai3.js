let str = prompt('String: ');
let array = str.split('');
let arr = ['a', 'o', 'e', 'u', 'i']

function demSoKyTuNguyenAm(arr1, arr2) {
    sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                sum += 1;
            }

        }
    }
    if (sum !== 0 ){
        return sum;
    } else {
        return false;
    }
}

console.log(demSoKyTuNguyenAm(array, arr));