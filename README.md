# dosflix App

# �ȵ���̵� ���ķ����� - ������ â -> ��Ʈ�� M �̱���

# �ȵ���̵� ���ķ����� ��ġ�ϱ�

- �ȵ���̵� ��Ʃ������� - AVD �Ŵ����� ����, ���ķ����� �ϳ� ����. & hyper V üũ �Ϸ�.

# ��ġ �̽�

- (npm i expo-cli -g ) //SDK 36 �������� ���׷��̵� �Ǹ鼭, expo client�� �����ؾ� �۵��ϴ� �̽��߻�
- sdk 36������ ���� ������Ʈ ���� - ������ ���°� �ְ�, how to upgrade ��� ����. expo upgrade �ϳ��� ��.
- expo client (����� ��) �̰͵� ����� �ٽ� ��� , Ŭ���̾�Ʈ�� ������Ʈ�� �Ǿ���.

# 1.0 Expo Init (5:07)

expo init [AppName]
yarn add prop-types styled-components axios @expo/vector-icons expo-font
yarn add react-navigation react-navigation-tabs react-native-reanimated react-native-gesture-handler
yarn add react-native-screens
npm i --save react-native-swiper@nightly ( 2020 02 10 ������� react-native ������Ʈ�� ���� �ӽù���)

# 1.1 Introduction to Expo (6:24)

- Expo : iOS,Android ���带 ��� ���ش�. | air update��� �۽������ ���׷��̵� ���� js�� �ۿ��� �ٽ� �ٿ�޾Ƽ� �۾�����Ʈ ���� |
- iOS�� QR��ĵ�� �ȵǹǷ�, expo ����Ʈ �α��� + ����� �α��� �ϸ� project���� ���. �װ� ���� �Ұ�.

# 1.2 Pre Loading Assets (10:09)

- App.js ���� ��Ʈ�� �̸� �����ε� �ϴ� ���� ���.

# 1.3 Constants and Screens Set Up (5:45)

---

# 2.0 Creating a Tab Navigation (9:23)

- navigation ������ ������ �׺���̼��� ����.

[https://reactnavigation.org/docs/en/getting-started.html](https://reactnavigation.org/docs/en/getting-started.html)
[https://reactnavigation.org/docs/en/bottom-tab-navigator.html](https://reactnavigation.org/docs/en/bottom-tab-navigator.html)

# 2.1 Custom Icons for the Tab Navigation (11:00)

# 2.2 Live Reloading vs Hot Reloading (2:43)

- ���̺� �ε�: js������ �����Ҷ����� �������� �� | �� ���ε� : ���̺�ε带 disable�ϰ�, ���ø����̼ǿ��� ����� �κи� ���ε� �Ѵ�.(��Ÿ�ϸ� �Ҷ� �����ϴ�. �ڵ�κм����Ҷ��� ��� ���ε� �Ǵ��� �𸦼��ִ�. )

# 2.3 Introduction to Stack Navigation (6:35)

# 2.4 Creating a Stack Navigation (13:04)

- yarn add react-navigation-stack @react-native-community/masked-view react-native-safe-area-context
- navigation - MainNavigation�� ���ó׺���̼����� �۾��ؼ�,Tab���̰��̼��� �ְ�, detail�������� �־���-> App.js���� �⺻������ ���̰� ����.

# 2.5 Styling Stack Navigators (13:09)

- Error:There is no route defined for key MoviesScreen. : ���߿� ������ �����ؼ� �ذ�����. �̻��ϳ�.... key �� undefined

# 2.6 Finishing Up (5:49)

# 4 Containers

- api ���� | TV �� ��ȭ �����̳� �� �������� ( ����Ʈ JS ���� ��Ȱ��!)

# 5.0 Making a Slider part One (11:29)

- react-native-swiper
  [https://github.com/leecade/react-native-swiper](https://github.com/leecade/react-native-swiper)

# 5.1 Making a Slider part Two (14:23)

- react Native������ { data && data.movies &&..} ���� ���� �ȵ�. �̴� �� ���ڿ��� �����ϰ�, <Text>������Ʈ�� �ƴѰ������� �ַ��� �߻�.

# 5.2 Making a Slider part Three (9:36)

# 5.3 Finishing the Slider (16:11)
