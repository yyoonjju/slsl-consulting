# Project Name : slsl-consulting
# 태양광 발전량 예측 모델과 웹사이트 개발

### 팀원
yyoonjju(PL), kty0910, azure0321, 0shai0, raincross7, notrowing, yoon0718

## 프로젝트 소개
KepcoA Sprint III 3조    
이 프로젝트는 태양광 발전과 관련된 종합적인 정보를 제공하며, 사용자가 태양광 발전 시설을 설치할 때의 예상 수익을 계산합니다. 주요 기능은 다음과 같습니다.
- 발전량 예측: 기상 데이터를 활용하여 미래의 발전량을 예측합니다.
- 수익 계산: 사용자가 입력한 정보를 기반으로 발전소의 예상 수익과 설치 비용을 계산합니다.

## 주요 기능 
### 웹 페이지 구성
#### 홈페이지
- 슬라이더 타입의 마우스 스크롤을 통한 웹 페이지 소개 및 주요 기능 안내.
#### 상세메뉴
1. 제품소개
    - 세 종류의 태양광 패널에 대한 상세 정보 제공 및 발전수익 및 설치비용 바로 가기 버튼 제공.
2. 발전량 예측조회
   - 사전에 지정한 기간 동안의 전국 일별 발전량과 누적 발전량을 그래프 및 표로 제공.
   - 날짜 선택을 위한 캘린더 및 전국 지도에서 지역 선택 가능.
   - 사용자가 지정한 기간 동안의 지역별 발전량과 누적 발전량을 그래프 및 표로 제공.
3. 발전수익 및 설치비용 예측
   - 지역, 모듈, 면적, 기간을 입력하여 발전수익을 그래프로 확인 가능.
   - 면적에 따른 설치 가능 개수, 설치 비용, 예상 수익, 흑자 전환 시기 제공.
4. FAQ
   - 사용자가 개인정보와 질문을 입력하여 개발자에게 질문을 전송할 수 있는 기능 제공.
5. 문의하기
   - 사용자가 개인정보와 질문을 입력하여 개발자에게 질문을 보낼 수 있는 기능 제공.
### 데이터 분석
- 기상 예측 모델: 지역별 미래 기상 예측 (Prophet 사용).
- 발전량 예측 모델: 지역별 기상 데이터를 활용한 지역별 발전량 예측 (XGBoost 사용).
- SMP 예측 모델: 육지와 제주 SMP 데이터를 활용한 예측 (Prophet 사용).

💻**프로그래밍 언어**
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">

🪛**개발 환경 및 도구**
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white">
<img src="https://img.shields.io/badge/jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white">

🕸️**웹 개발 및 프레임워크**
<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">

🔢**데이터 분석**
<img src="https://img.shields.io/badge/scikitlearn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white">
<img src="https://img.shields.io/badge/tensorflow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white">
<img src="https://img.shields.io/badge/keras-D00000?style=for-the-badge&logo=keras&logoColor=white">

🌐**데이터베이스**
<img src="https://img.shields.io/badge/mariadb-003545?style=for-the-badge&logo=mariadb&logoColor=white">

✍️ **버전 관리**
 <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
