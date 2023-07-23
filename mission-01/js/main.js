const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 코드 작성란
const getNode = (node) => {
  if (typeof node === "string") {
    node = document.querySelector(node);
  }
  return node;
};

const emailCheckValid = (node) => {
  const emailInput = getNode(node);

  if (emailReg(emailInput.value)) {
    emailInput.classList.remove("is--invalid");
    return true;
  } else {
    emailInput.classList.add("is--invalid");
    return false;
  }
};

const pwCheckValid = (node) => {
  const pwInput = getNode(node);

  if (pwReg(pwInput.value)) {
    pwInput.classList.remove("is--invalid");
    return true;
  } else {
    pwInput.classList.add("is--invalid");
    return false;
  }
};

const handleLogin = (e) => {
  e.preventDefault(); // form submit 막아주는 함수

  const emailInput = getNode("#userEmail");
  const pwInput = getNode("#userPassword");

  const isEmail = emailCheckValid("#userEmail");
  const isPw = pwCheckValid("#userPassword");

  if (isEmail && isPw) {
    try {
      const getUserId = user.id;
      const getUserPw = user.pw;

      if (emailInput.value === getUserId && pwInput.value === getUserPw) {
        window.location.href = "welcome.html";
      } else {
        alert("정확한 아이디와 비밀번호를 입력해 주세요.");
      }
    } catch (error) {
      alert(error.message);
    }
  } else {
    return;
  }
};

getNode(".btn-login").addEventListener("click", handleLogin);

//
//
// const emailInput = document.querySelector("#userEmail");
// const pwInput = document.querySelector("#userPassword");
// const loginButton = document.querySelector(".btn-login");

// let emailPass = false;
// let pwPass = false;

// // 태그가 가지고있는 고유한 능력 x

// function handleCheckEmail() {
//   const value = this.value;

//   if (emailReg(value)) {
//     this.classList.remove("is--invalid");
//     emailPass = true;
//   } else {
//     this.classList.add("is--invalid");
//     emailPass = false;
//   }
// }

// function handleCheckPw() {
//   const value = this.value;

//   if (pwReg(value)) {
//     this.classList.remove("is--invalid");
//     pwPass = true;
//   } else {
//     this.classList.add("is--invalid");
//     pwPass = false;
//   }
// }

// function handleLogin(e) {
//   e.preventDefault();

//   if (emailPass && pwPass) {
//     try {
//       const id = emailInput.value;
//       const pw = pwInput.value;

//       const getUserId = user.id;
//       const getUserPw = user.pw;

//       if (id === getUserId && pw === getUserPw) {
//         window.location.href = "welcome.html";
//       } else {
//         console.log("정확한 아이디와 비밀번호를 입력해 주세요.");
//       }
//     } catch (e) {
//       alert(e.message);
//     }
//   } else {
//     console.log("정확한 아이디와 비밀번호를 입력해 주세요.");
//   }
// }

// emailInput.addEventListener("input", handleCheckEmail);
// pwInput.addEventListener("input", handleCheckPw);
// loginButton.addEventListener("click", handleLogin);
