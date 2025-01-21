let leftEye = document.querySelector(".lefteye");
let rightEye = document.querySelector(".righteye");
let userName = document.querySelector("#userInput");
let password = document.querySelector("#passInput");

let leftEyeTop = 75
let leftEyeLeft = 110
let leftEyePaddingLeft = 0
let leftEyePaddingTop = 0

let rightEyeTop = 75
let rightEyeLeft = 175
let rightEyePaddingLeft = 0
let rightEyePaddingTop = 0


const userInputFocus = () => {
    console.log("userInputFocus")
}


const userInputBlur = () => {
    console.log("userInputBlur")
}


const userKeyHandler = () => {
    console.log("userKeyHandler")
}


const passwordInputFocus = () => {
    console.log("passwordInputFocus")
}


const passwordInputBlur = () => {
    console.log("passwordInputBlur")
}


userName.addEventListener("focus", userInputFocus)
userName.addEventListener("blur", userInputBlur)
userName.addEventListener("keypress", userKeyHandler)

password.addEventListener("focus", passwordInputFocus);
password.addEventListener("blur", passwordInputBlur);
// password.addEventListener("keypress", passwordKeyHandler);
