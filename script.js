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

    let eyePosition = setInterval(() => {
        if(leftEyeTop === 60){
            clearInterval(eyePosition)
        }

        leftEye.style.top= leftEyeTop + "px"
        leftEye.style.left= leftEyeLeft + "px"
        rightEye.style.top= rightEyeTop + "px"
        rightEye.style.left= rightEyeLeft + "px"

        leftEyeTop--
        leftEyeLeft++
        rightEyeTop--
        rightEyeLeft--

    },10)
}


const passwordInputBlur = () => {
    console.log("passwordInputBlur")

    let eyePosition = setInterval(() => {
      if (leftEyeTop === 75) {
        clearInterval(eyePosition);
      }

      leftEye.style.top = leftEyeTop + "px";
      leftEye.style.left = leftEyeLeft + "px";
      rightEye.style.top = rightEyeTop + "px";
      rightEye.style.left = rightEyeLeft + "px";

      leftEyeTop++;
      leftEyeLeft--;
      rightEyeTop++;
      rightEyeLeft++;
    }, 10);
}


userName.addEventListener("focus", userInputFocus)
userName.addEventListener("blur", userInputBlur)
userName.addEventListener("keypress", userKeyHandler)

password.addEventListener("focus", passwordInputFocus);
password.addEventListener("blur", passwordInputBlur);
// password.addEventListener("keypress", passwordKeyHandler);
