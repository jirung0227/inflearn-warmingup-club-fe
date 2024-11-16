# section4 React Hooks란 무엇인가?

## React Hooks은 무엇인가?

React Hooks는 ReactConf2018에서 발표된, class없이 state를 사용할 수 있는 새로운 기능

## React Hooks이 필요한 이유?

Class Component로 사용되어온 React에서 느껴왔던 불편함이나 문제점을 해결하기 위해 개발됨.

원래 React는 주로 Class Component를 사용하고 React Hooks는 Functional Component를 사용하기 때문

![alt text](image.png)

## 함수형 컴포넌트에서 더 적은 기능을 제공한다는데 어떤 기능을 클래스 컴포넌트에 비해 못 쓴다는 건 가요?

**리액트의 생명주기**

![alt text](image-1.png)

이렇게나 중요한 생명주기를 함수형 컴포넌트에서는 사용을 못했기 때문에 함수형 컴포넌트가 더 간결하고 빠르더라도 클래스형 컴포넌트를 써옴.

### React 16.8 Hooks 업데이트로 변경되었습니다!

![alt text](image-2.png)

### Hooks로 인한 또 다른 이점.

![alt text](image-4.png)

리액트 훅을 사용할 때는 useEffect 안에서 다 처리 가능

### Hook로 인한 장점 하나 더

HOC 컴포넌트를 Custom React Hooks로 대체해서 너무나 많은 Wrapper 컴포넌트를 줄이게됨.

**HOC(Higher Order Component)란?**
화면에서 재사용 가능한 로직만을 분리해서 component로 만들고, 재사용 불가능한 UI와 같은 다른 부분들을 parameter로 받아서 처리하는 방법

![alt text](image-5.png)

```
<LanguageHOC>
    <ThemeHOC>
        <AuthHOC>
            <Apage/>
        </AuthHOC>
    </ThemeHOC>
</LanguageHOC>
```
