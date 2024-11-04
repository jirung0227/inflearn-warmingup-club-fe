### 단계로써 생각 세분화

**큰 틀에서 목적**: 바닐라 JS로 타이핑 테스트 앱 만들기

바로 구현할 수 있으면 BEST! 그렇지 않다면 아래 세부 단계로 드릴다운하여 _이해하지 못한 부분을 정확히 파악하기_

### 주요 기능

- 타자 입력 시 제시된 문장과 일치 여부 확인
  - 제시된 문자와 입력값이 일치할 경우 초록색 폰트 표시, 일치하지 않을 경우 빨간색 폰트와 밑줄 표시
  - 틀린 문자 수에 따라 ERRORS 표시
  - 문장과 일치된 비율에 따라 % ACCURACY 표시
- 엔터키 입력 시 다음 문장으로 이동
  - 제시된 문장 예시:
    - he realized what was happening and told the others.
    - And in the end it turned out that the creature was grandfather
- 20초의 시간 제한
  - 시간이 종료되면 제시된 문장 위치에 '새 게임을 시작하려면 다시 시작을 클릭하세요.'라는 메시지 표시
  - 다시 시작 버튼 생성
  - 결과 화면에 ERRORS, TIME, % ACCURACY뿐만 아니라 WPM(타자 속도), CPM(문자 입력 수) 표시

### 구현 기능

```

```
