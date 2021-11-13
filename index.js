function loginPageValidate() {
    const uname = document.getElementById("username");
    const unameerror = document.getElementById("unameerror");
    const pwd = document.getElementById("pwd");
    const pwderror = document.getElementById("pwderror");
    const mypassword = "Swapnali123";



    if (uname.value === '') {
        console.log("blank");
        unameerror.innerHTML = "Field can not be empty";


    } else {
        unameerror.innerHTML = " ";
    }

    if (pwd.value === '') {

        pwderror.innerHTML = "Field can not be empty";

    } else if (pwd.value !== mypassword) {
        pwderror.innerHTML = "Invalid Password. valid password is Swapnali123 ";

    }

    else {
        pwderror.innerHTML = "";
    }


}

function signUpEmail(){

    const EmailId = document.getElementById("EmailId");
            const emailerror = document.getElementById("emailerror");
            const invalidEmailIcon = document.getElementById("invalidEmailIcon");
            const validEmailIcon = document.getElementById("validEmailIcon");
            let regexp = /^([A-Za-z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

            if (regexp.test(EmailId.value)) {
                emailerror.innerHTML = "Valid email";
                emailerror.style.color = "green";
                invalidEmailIcon.style.display = 'none';
                validEmailIcon.style.display = '';
                return true;
            } else {
                emailerror.innerHTML = "Invalid email";
                emailerror.style.color = "Red";
                invalidEmailIcon.style.display = '';
                validEmailIcon.style.display = 'none';
                return false;
            }
}

function signUpUsername() {
    const user = document.getElementById("signupUsername");
            const unameerror = document.getElementById("signupUserError");
            const invalidUsernameIcon = document.getElementById("invalidUsernameIcon");
            const validUsernameIcon = document.getElementById("validUsernameIcon");

            if (user.value !== '') {
                unameerror.innerHTML = " ";
                validUsernameIcon.style.display = '';
                invalidUsernameIcon.style.display = 'none'
                return true;
            } else {
                unameerror.innerHTML = "Field can not be empty";
                unameerror.style.color = "Red";
                validUsernameIcon.style.display = 'none';
                invalidUsernameIcon.style.display = ''
                return false;
            }
}



function signUpValidations(){

    if(signUpEmail() && signUpUsername()) {
        console.log('t')
        window.location = "/Home.html"

    }
}

















// function signUpPageValidate(type) {
//     const signUpButton = document.getElementById("signUpButton");
//     switch (type) {
//         case 'email':
//             const EmailId = document.getElementById("EmailId");
//             const emailerror = document.getElementById("emailerror");
//             const invalidEmailIcon = document.getElementById("invalidEmailIcon");
//             const validEmailIcon = document.getElementById("validEmailIcon");
//             let regexp = /^([A-Za-z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

//             if (regexp.test(EmailId.value)) {
//                 emailerror.innerHTML = "Valid email";
//                 emailerror.style.color = "green";
//                 signUpButton.disabled = false;
//                 invalidEmailIcon.style.display = 'none';
//                 validEmailIcon.style.display = '';
//             } else {
//                 emailerror.innerHTML = "Invalid email";
//                 emailerror.style.color = "Red";
//                 signUpButton.disabled = true;
//                 invalidEmailIcon.style.display = '';
//                 validEmailIcon.style.display = 'none';
//             }
//             break;

//         case 'username':
//             const user = document.getElementById("signupUsername");
//             const unameerror = document.getElementById("signupUserError");
//             const invalidUsernameIcon = document.getElementById("invalidUsernameIcon");
//             const validUsernameIcon = document.getElementById("validUsernameIcon");

//             if (user.value !== '') {
//                 unameerror.innerHTML = " ";
//                 validUsernameIcon.style.display = '';
//                 invalidUsernameIcon.style.display = 'none'
//                 signUpButton.disabled = false;
//             } else {
//                 unameerror.innerHTML = "Field can not be empty";
//                 unameerror.style.color = "Red";
//                 validUsernameIcon.style.display = 'none';
//                 invalidUsernameIcon.style.display = ''
//                 signUpButton.disabled = true;

//             }
//             break;

//         case 'phoneNumber':
//             // For phone number
            
//             break;



//         default:
//             break;
//     }
// }