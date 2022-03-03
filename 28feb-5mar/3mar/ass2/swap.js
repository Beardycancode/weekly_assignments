    let a = 20;
    let b = 10;
    document.write('Your entries are: 20 and 10<br /><br /><br /> ')

    //creating a temporary variable;
    let temp;

    //swap variables by assigning values;
    temp = a;
    a = b;
    b = temp;

    document.write(`The values after swapping are: ${a} ${b}`);
