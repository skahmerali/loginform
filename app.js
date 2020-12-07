// let signupName = document.getElementById("signup-username").value;
// let signupBirthDate = document.getElementById("signup-date_birth").value;
// let signupEmail = document.getElementById("signup-email").value;
// let signupPassword = document.getElementById("signup-password").value;
// let signupRePassword = document.getElementById("signup-re-password").value;
// let signupAddress = document.getElementById("signup-address").value;
// let signupNumber = document.getElementById("signup-number").value;







singupData = [];
loginData = [];

function signup() {
    let signupName = document.getElementById("signup-username").value;
    let signupBirthDate = document.getElementById("signup-date_birth").value;
    let signupEmail = document.getElementById("signup-email").value;
    let signupPassword = document.getElementById("signup-password").value;
    let signupRePassword = document.getElementById("signup-re-password").value;
    let signupAddress = document.getElementById("signup-address").value;
    let signupNumber = document.getElementById("signup-number").value;
    // let loginEmail = document.getElementById("login-email").value;
    // let loginPassword = document.getElementById("login-password").value;
    // let printName = document.getElementById("print-username").value;
    // let printBirthDate = document.getElementById("print-date_birth").value;
    // let printEmail = document.getElementById("print-email").value;
    // let printPassword = document.getElementById("print-password").value;
    // let printRePassword = document.getElementById("print-re-password").value;
    // let printNumber = document.getElementById("print-number").value;
    // let printAddress = document.getElementById("print-address").value;
    singupData.push(signupName, signupNumber, signupAddress, signupBirthDate, signupEmail, signupPassword, signupRePassword)
    if (signupPassword === signupRePassword) {
        console.log(singupData)
        // loginData.push(signupEmail, signupPassword);
    }
    else {
        alert("your password is not matching with re-password")
    }
    return false;
}
    function abc() {
        
        let signupEmail = document.getElementById("signup-email").value;
        let signupPassword = document.getElementById("signup-password").value;
        let signupBirthDate = document.getElementById("signup-date_birth").value;
        let signupName = document.getElementById("signup-username").value;
        let loginEmail = document.getElementById("login-email").value;
        let loginPassword = document.getElementById("login-password").value;
        
        if (signupEmail === loginEmail && loginPassword === signupPassword) {
            
            printName.push(signupName)
            printBirthDate.push(signupBirthDate)
            printEmail.push(signupEmail)
            printPassword.push(signupPassword)
            // signupRePassword.push(printRePassword)
            // signupNumber.push(printNumber)
            // signupAddress.push(printAddress)
            // document.write(printName,printEmail,printPassword,printBirthDate)
            console.log(singupData)
        }
    }