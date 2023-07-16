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

const moveToPage = () => {
  const isEmail = emailCheckValid("#userEmail");
  const isPw = pwCheckValid("#userPassword");
  if (isEmail && isPw) {
    window.location.href = "welcome.html";
  } else {
    return;
  }
};

getNode(".btn-login").addEventListener("click", moveToPage);
