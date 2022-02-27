function input(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    var str1 = a.split('').sort().join('');
    var str2 = b.split('').sort().join('');

    var result = (str1 === str2);
    return result;

}
var a = prompt("Enter the first String");
var b = prompt("Enter  the second String");
document.write(input(a, b));
