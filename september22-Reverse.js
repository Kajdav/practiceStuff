var strang = 'Hello, my friends!';

function reverse(arr) {
    var reverseArr = [];
    arr = arr.split('');
    for (var i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    reverseArr = reverseArr.join('');
    return reverseArr;
}
alert(reverse(strang));