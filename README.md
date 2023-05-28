### 다형성 컴포넌트 사용 방법, 타입스크립트 제네릭으로 타입지정

<hr>

### git action flow

1. push 이벤트가 발생한다.
2. Github Actions는 해당 브랜치를 토대로 리눅스 환경에 checkout한다.
3. Node.js 환경을 세팅한다.
4. node_modules가 캐싱이되었는지를 검사한다.
5. 모듈이 변경이 되었다면 npm install을 하고, 변경되지 않았으면 건너뛴다.
6. 우리가 만들어놓은 npm run 명령어를 이용해 테스트를 각각 실행한다.
7. 모든 step이 잘 동작하면 슬랙 알림으로 성공 메시지를 보내고, 잘 동작하지 않으면 실패 메시지를 보낸다.

### 참고사이트

git action :

1. https://fe-developers.kakaoent.com/2022/220106-github-actions/
2. https://heegs.tistory.com/95
3. https://velog.io/@insutance/github-action-slack-send
4. https://alisyabob.tistory.com/486
