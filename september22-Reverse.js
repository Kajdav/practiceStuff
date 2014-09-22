var array = [1, 2, 3, 4, 5];

function reverse(arr) {
    var reverseArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}
alert(reverse(array));