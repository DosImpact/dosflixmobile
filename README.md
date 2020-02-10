# dosflix App

# 안드로이드 에뮬레이터 - 개발자 창 -> 컨트롤 M 이구나

# 안드로이드 에뮬레이터 설치하기

- 안드로이드 스튜디오에서 - AVD 매니저를 통해, 에뮬레이터 하나 만듬. & hyper V 체크 완료.

# 설치 이슈

- (npm i expo-cli -g ) //SDK 36 버전으로 업그래이드 되면서, expo client도 업글해야 작동하는 이슈발생
- sdk 36버전에 따른 업데이트 절차 - 문서를 보는게 최고, how to upgrade 라고 나옴. expo upgrade 하나면 됨.
- expo client (모바일 앱) 이것도 지우고 다시 깔아 , 클라이언트도 업데이트가 되야함.

# 1.0 Expo Init (5:07)

expo init [AppName]
yarn add prop-types styled-components axios @expo/vector-icons expo-font
yarn add react-navigation react-navigation-tabs react-native-reanimated react-native-gesture-handler
yarn add react-native-screens
yarn add react-native-swiper

# 1.1 Introduction to Expo (6:24)

- Expo : iOS,Android 빌드를 대신 해준다. | air update라고 앱스토어의 업그래이드 없이 js만 앱에서 다시 다운받아서 앱업데이트 가능 |
- iOS는 QR스캔이 안되므로, expo 사이트 로그인 + 모바일 로그인 하면 project들이 뜬다. 그걸 눌러 할것.

# 1.2 Pre Loading Assets (10:09)

- App.js 에서 폰트를 미리 프리로드 하는 법을 배움.

# 1.3 Constants and Screens Set Up (5:45)

---

# 2.0 Creating a Tab Navigation (9:23)

- navigation 폴더에 바텀탭 네비게이션을 만듬.

[https://reactnavigation.org/docs/en/getting-started.html](https://reactnavigation.org/docs/en/getting-started.html)
[https://reactnavigation.org/docs/en/bottom-tab-navigator.html](https://reactnavigation.org/docs/en/bottom-tab-navigator.html)

# 2.1 Custom Icons for the Tab Navigation (11:00)

# 2.2 Live Reloading vs Hot Reloading (2:43)

- 라이브 로드: js파일을 저장할때마다 리프레쉬 됨 | 핫 리로드 : 라이브로드를 disable하고, 어플리케이션에서 변경된 부분만 리로드 한다.(스타일링 할때 유용하다. 코드부분수정할때는 어디가 리로드 되는지 모를수있다. )

# 2.3 Introduction to Stack Navigation (6:35)

# 2.4 Creating a Stack Navigation (13:04)

- yarn add react-navigation-stack @react-native-community/masked-view react-native-safe-area-context
- navigation - MainNavigation을 스택네비게이션으로 작업해서,Tab네이게이션을 넣고, detail페이지를 넣었음-> App.js에서 기본적으로 보이게 만듬.

# 2.5 Styling Stack Navigators (13:09)

- Error:There is no route defined for key MoviesScreen. : 나중에 문서를 참고해서 해결하자. 이상하네.... key 를 undefined

# 2.6 Finishing Up (5:49)

# 4 Containers

- api 파일 | TV 및 영화 컨테이너 및 프리젠터 ( 리액트 JS 에서 재활용!)

# 5.0 Making a Slider part One (11:29)

- react-native-swiper
  [https://github.com/leecade/react-native-swiper](https://github.com/leecade/react-native-swiper)

# 5.1 Making a Slider part Two (14:23)

# 5.2 Making a Slider part Three (9:36)

# 5.3 Finishing the Slider (16:11)
