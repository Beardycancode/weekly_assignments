function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;
    if (password1 == '') {
        alert("Please enter Password");
    }
    else if (password2 == '') {
        alert("Please confirm password");
    }
    else if (password1 != password2) {
        alert("\nPassword did not match: Please enter again")
        return false;
    }
    else {
        alert("registration success-full")
        return true;
    }
}
