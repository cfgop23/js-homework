/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector(".nav");
const list = document.querySelectorAll(".nav li");
const visual = document.querySelector(".visual img");
const nickName = document.querySelector(".nickName");

function setBgColor(colorA, colorB = "#000") {
  if (!colorA)
    throw new TypeError(
      "setBgColor 함수의 첫번째 인자 colorA는 필수 입력값입니다."
    );

  document.body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

function setImage(src, alt) {
  if (typeof src !== "string" || typeof alt !== "string")
    throw new TypeError("setImage 함수의 모든 인자는 'string' 타입입니다.");

  visual.setAttribute("src", src);
  visual.setAttribute("alt", alt);
}

function setNameText(name) {
  if (typeof name !== "string")
    throw new TypeError("setNameText 함수의 인자는 'string' 타입입니다.");

  nickName.textContent = name;
}

function handleChange(e) {
  const target = e.target.closest("li");
  if (!target) return;

  const listArr = [...list];
  const index = target.getAttribute("data-index");

  listArr.forEach((el) => el.classList.remove("is-active"));
  target.classList.add("is-active");

  setBgColor(data[index - 1].color[0], data[index - 1].color[1]);
  setImage(`./assets/${data[index - 1].name}.jpeg`, data[index - 1].alt);
  setNameText(data[index - 1].name);
}

nav.addEventListener("click", handleChange);
