let leftEye = document.querySelector(".lefteye");
let rightEye = document.querySelector(".righteye");
let userName = document.querySelector("#userInput");
let password = document.querySelector("#passInput");

let leftEyeTop = 75;
let leftEyeLeft = 110;
let leftEyePaddingLeft = 0;
let leftEyePaddingTop = 0;

let rightEyeTop = 75;
let rightEyeLeft = 175;
let rightEyePaddingLeft = 0;
let rightEyePaddingTop = 0;

const userInputFocus = () => {
  console.log("userInputFocus");

  let eyePosition = setInterval(() => {
    if (leftEyePaddingTop === 10) {
      clearInterval(eyePosition);
    }

    leftEye.style.paddingTop = leftEyePaddingTop + "px";
    leftEye.style.left = leftEyeLeft + "px";

    rightEye.style.paddingTop = rightEyePaddingTop + "px";
    rightEye.style.left = rightEyeLeft + "px";

    leftEyePaddingTop++;
    leftEyeLeft--;
    rightEyePaddingTop++;
    rightEyeLeft--;
  }, 10);
};

const userInputBlur = () => {
  console.log("userInputBlur");
 
  
  
  let eyePosition = setInterval(() => {
    if (leftEyePaddingTop === 0) {
      clearInterval(eyePosition);
    }
    if (leftEyePaddingLeft > 0) {
             leftEye.style.paddingLeft = 0;
             rightEye.style.paddingLeft = 0;
    }

    leftEye.style.paddingTop = leftEyePaddingTop + "px";
    leftEye.style.left = leftEyeLeft + "px";

    rightEye.style.paddingTop = rightEyePaddingTop + "px";
    rightEye.style.left = rightEyeLeft + "px";

    leftEyePaddingTop--;
    leftEyeLeft++;
    rightEyePaddingTop--;
    rightEyeLeft++;
  }, 10);

};

const userKeyHandler = (event) => {
  console.log("userKeyHandler", event);

  if (leftEyePaddingLeft > 20) {
    return false;
  }
  // for use backspace by user
  if (event.keyCode === 8) {
    leftEyePaddingLeft--;
    rightEyePaddingLeft--;
  } else {
    leftEyePaddingLeft++;
    rightEyePaddingLeft++;
  }

  leftEye.style.paddingLeft = leftEyePaddingLeft + "px";
  rightEye.style.paddingLeft = rightEyePaddingLeft + "px";

  


};

const passwordInputFocus = () => {
  console.log("passwordInputFocus");

  let eyePosition = setInterval(() => {
    if (leftEyeTop === 60) {
      clearInterval(eyePosition);
    }

    leftEye.style.top = leftEyeTop + "px";
    leftEye.style.left = leftEyeLeft + "px";
    rightEye.style.top = rightEyeTop + "px";
    rightEye.style.left = rightEyeLeft + "px";

    leftEyeTop--;
    leftEyeLeft++;
    rightEyeTop--;
    rightEyeLeft--;
  }, 10);
};

const passwordInputBlur = () => {
  console.log("passwordInputBlur");

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
};

userName.addEventListener("focus", userInputFocus);
userName.addEventListener("blur", userInputBlur);
userName.addEventListener("keydown", userKeyHandler);

password.addEventListener("focus", passwordInputFocus);
password.addEventListener("blur", passwordInputBlur);
// password.addEventListener("keypress", passwordKeyHandler);
