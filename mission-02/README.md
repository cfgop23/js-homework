### 과제 mission-02

---

#### 1. 클릭 이벤트 활성화

```js
const nav = document.querySelector(".nav");

function handleChange(e) {}

nav.addEventListener("click", handleChange);
```

- 이벤트 위임 - li태그만 선택 가능하게 하기 위한 코드
  ```js
  const target = e.target.closest("li");
  if (!target) return;
  ```

- 선택한 항목에 is-active 활성화를 위한 코드
  ```js
  const list = document.querySelectorAll(".nav li");
  const listArr = [...list];
  // li태그들을 가져와 listArr 상수에 배열로 할당
  
  listArr.forEach((el) => el.classList.remove("is-active"));
  // listArr 배열에서 is-active 클래스를 모두 삭제
  
  target.classList.add("is-active");
  // 선택한 리스트 항목에 is-active 클래스 추가
  
  ```
  
---

#### 2. nav 클릭시 배경 색상 변경

```js
const index = target.getAttribute("data-index");
// 클릭한 li항목의 data-index 속성 값을 가져와서 index 변수에 담기

document.body.style.background = `linear-gradient(to bottom, ${
  data[index - 1].color[0]
}, ${data[index - 1].color[1]})`;
// data 객체 배열에서 color 속성을 들고와서 body태그에 배경색 넣기
```

---

#### 3. 이미지 변경

```js
const visual = document.querySelector(".visual img");
// visual 클래스 안 img태그를 가져오기 위한 코드

visual.setAttribute("src", `./assets/${data[index - 1].name}.jpeg`);
// data 배열의 name 속성을 경로에 담아 src속성 값으로 할당

visual.setAttribute("alt", data[index - 1].alt);
// data 배열의 alt 속성을 가져와 alt 속성에 할당
```

---

#### 4. 텍스트 변경

```js
const nickName = document.querySelector(".nickName");
//  nicName 클래스를 가진 h1태그를 가져오기 위한 코드

nickName.textContent = data[index - 1].name;
// data 배열의 name 속성 값을 nickname 클래스 텍스트 변경
```

---

#### 5. 함수 분리

- ##### a. **setBgColor** 함수

  ```js
  function setBgColor(colorA, colorB = "#000") {
    if (!colorA)
      throw new TypeError(
        "setBgColor 함수의 첫번째 인자 colorA는 필수 입력값입니다."
      );
  
    document.body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
  }
  ```

- ##### b. **setImage** 함수

  ```js
  function setImage(src, alt) {
    if (typeof src !== "string" || typeof alt !== "string")
      throw new TypeError("setImage 함수의 모든 인자는 'string' 타입입니다.");
  
    visual.setAttribute("src", src);
    visual.setAttribute("alt", alt);
  }
  ```

- ##### c. **setNameText** 함수

  ```js
  function setNameText(name) {
    if (typeof name !== "string")
      throw new TypeError("setNameText 함수의 인자는 'string' 타입입니다.");
  
    nickName.textContent = name;
  }
  ```

---

#### 완성된 코드

```js
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
```
