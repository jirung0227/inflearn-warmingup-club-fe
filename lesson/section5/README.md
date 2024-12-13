# Axios란 무엇인가?

- Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다.
- 쉽게 말해서 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 Ajax와 더불어 사용합니다.

## 설치

- npm i axios --save

# Styled Component란?

Styled Component란 Css-in-Js라고 하는 Javascript파일 안에서 CSS를 처리 할 수 있게 해주는 대표적 라이브러리

https://styled-components.com/docs

## 설치 방법

```
npm i --save styled-components
```

# Iframe

HTML inline Frame 요소이며 inline frame의 약자입니다.

효과적으로 **다른 HTML 페이지를 현재 페이지에 포함**시키는 중첩된 브라우저로
iframe 요소를 이용하면 해당 웹 페이지 안에 어떠한 제한 없이 다른 페이지를 불러와서 삽입할 수 있습니다.

# React Router Dom

React Router DOM을 사용하면 웹 앱에서 동적 라우팅을 구현할 수 있습니다. 라우팅이 실행 중인 앱 외부의 구성에서 처리되는 기존 라우팅 아키텍처와 달리 React Router DOM은 앱 및 플랫폼의 요구 사항에 따라 컴포넌트 기반 라우팅을 용이하게 합니다.

# Single Page Application(SPA)

리액트는 SPA이기 때문에 하나의 index.html 템플릿 파일을 가지고 있습니다.
이 하나의 템플릿에 자바스크립트를 이용해서 다른 컴포넌트를 이 index.html 템플릿에 넣으므로 페이지를 변경해주게 됩니다. 이 때 이 React Router Dom라이브러리가 새 컴포넌트로 라우팅/탐색을 하고 렌더링하는데 도움을 주게 됩니다.
![alt text](image-1.png)

## BrowserRouter로 루트 컴포넌트 감싸주기

```js
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### BrowserRouter

HTML5 History API(pushState, replaceState 및 popstate 이벤트)를 사용하여 UI를
URL과 동기화된 상태로 유지해줍니다.

## 여러 컴포넌트 생성 및 라우트 정의하기

```js
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}
```

### Routes

앱에서 생성될 모든 개별 경로에 대한 컨테이너/상위 역할을 합니다.
Router로 생성된 자식 컴포넌트 중에서 매칭되는 첫번째 Route를 렌더링 해줍니다.

### Route

Route는 단일 경로를 만드는 데 사용됩니다. 두 가지 속성을 취합니다.

path는 원한느 컴포넌트의 URL 경로를 지정
element 경로에 맞게가 렌더링되어야 하는 컴포넌트를 지정

## <Link />를 이용해 경로를 이동하기

```js
function Home() {
  return (
    <div>
      <h1>
        <Link to='/about'>About 페이지를 보여주기</Link>
      </h1>
    </div>
  );
}
```

Link 구성 요소는 HTML 앵커요소와 유사
