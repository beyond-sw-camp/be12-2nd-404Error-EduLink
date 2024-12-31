# be12-2nd-404Error-EduLink

# 💡팀

<div align=center>
  <img src="./images/team.png" /> <br>
    <h3>한화시스템 BEYOND SW캠프 </h3>
    <p>12기 2차 프로젝트 <strong>팀 404Error</strong></p>
</div>


## 🤚 404Error 팀원
<div style="display: flex; justify-content: center;">
  <table  align="center">
    <tbody>
      <tr>
        <td align="center"><a href="https://github.com/museongkim0" style="text-decoration: none; color: lightgray;"><img src="./images/팀원소개/ms.jpg" width="100px;" height="100px;" background-size="cover;" alt=""/><br /><sub><b> 🐯 김무성</b></sub></a><br /></td>
        <td align="center"><a href="https://github.com/kuj7882" style="text-decoration: none; color: lightgray;"><img src="./images/팀원소개/yj.jpg" width="100px;"  alt=""/><br /><sub><b> 🐶 김유진</b></sub></a><br /></td>
        <td align="center"><a href="https://github.com/GoodLeaf" style="text-decoration: none; color: lightgray;"><img src="./images/팀원소개/jy.png" width="100px;" height="100px;" alt=""/><br /><sub><b> 🐺 김정엽</b></sub></a><br /></td>
        <td align="center"><a href="https://github.com/gunha0405" style="text-decoration: none; color: lightgray;"><img src="./images/팀원소개/gh.jpg" width="100px;" alt=""/><br /><sub><b> 🐱 오건하</b></sub></a><br /></td>
        <td align="center"><a href="https://github.com/leewoojin12" style="text-decoration: none; color: lightgray;"><img src="./images/팀원소개/wj.jpg" width="100px;" alt=""/><br /><sub><b> 🦁 이우진</b></sub></a><br /></td>
      </tr>
    </tbody>
  </table>
</div>

## 📌 프로젝트 주제 
<div align="center">
    <img src="./images/service.png" /> <br>
</div>


### EduLink: 혁신적인 학습 관리 플랫폼
빠르게 증가하는 국비지원 부트캠프 수요에 맞춰 학습 환경의 질적 향상을 목표로 개발된 EduLink는 기존 LMS(HRD-Net)의 한계를 보완합니다.   

이 플랫폼은 단순 출결 확인을 넘어 커리큘럼 관리, 공지사항 통합, 학습 성과 분석 등 다양한 기능을 통해 학습 효율을 극대화합니다.   

수강생들은 EduLink를 통해 학습 전반을 체계적으로 관리하고 편리하게 활용할 수 있습니다.

[상세보기](https://github.com/beyond-sw-camp/be12-1st-404Error-EduLink/blob/main/README.md)

## 🔧 기술 스택
프론트엔드  
![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) 
![pinia](https://img.shields.io/badge/Pinia-f7d336?style=for-the-badge&logo=pinia&logoColor=white) 
![NginX](https://img.shields.io/badge/NginX-009639?style=for-the-badge&logo=nginx&logoColor=white)  
<!-- 백엔드  
![](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=Spring-Boot&logoColor=white) ![](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-%232F7D32.svg?style=for-the-badge&logo=json-web-tokens&logoColor=white)  
DB   -->
DB<br>
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white) 
<!-- ![Amazon RDS](https://img.shields.io/badge/Amazon%20RDS-527FFF?style=for-the-badge&logo=Amazon%20RDS&logoColor=white) 
![Redis](https://img.shields.io/badge/Redis-%23D92D2A.svg?style=for-the-badge&logo=redis&logoColor=white)   -->
클라우드  
![](https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white) 
<!-- ![](https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white)   -->
협업 툴  
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) 
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-%232C2E3A.svg?style=for-the-badge&logo=figma&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-00599C?style=for-the-badge&logo=discord&logoColor=white) 


## 🖥️ 화면설계서
<a href="https://www.figma.com/design/zYTJiMBo84amcSbHL014bU/%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84?node-id=0-1&t=BtJnVvSe2hqNxcLs-1">Figma 화면 설계서</a> 
<br/><br/>

<!--## 🔧 시스템 아키텍처
 <img src="img/시스템_아키텍처.png" alt="시스템 아키텍처" style="width:75%;"/>
<details>
<summary> Amazon RDS </summary>
 
- 별도의 설치과정 없이 편리하게 DB를 구성하기 위해 Amazon RDS를 사용했습니다.
</details>

<details>
<summary> Amazon S3 </summary>

- 상품의 썸네일, 상세 이미지 등 상품과 관련된 이미지를 저장하기 위해 S3를 사용하였습니다.
</details>

<details>
<summary> Backend Server </summary>

- EC2를 이용하여 서버를 배포했습니다.
- 동일한 EC2에 In-Memory 기반의 DB인 Redis 서버를 설치하여 이메일 인증을 빠르게 처리할 수 있도록 하였습니다. 또한, 데이터에 유효 시간(3분)을 설정하여 유효 시간이 지난 데이터는 자동으로 삭제되도록 처리했습니다.
</details>
<details>
<summary> Frontend Server </summary>

- Frontend Server와 Backend Server는 각각 다른 인스턴스에서 실행되고 있기 때문에 CORS 에러 없이 통신하기 위해서 Proxy Pass 기능이 필요했습니다.
- 이 기능을 위해 EC2에 Nginx를 실행시켰습니다.
</details>
<details>
<summary> PortOne </summary>

- 상품 결제를 위해 PG사의 결제 대행 서비스 중 하나인 PortOne을 사용하였습니다.
</details> -->

## ⭐ 접속 주소
[www.edulink.kro.kr](http://www.edulink.kro.kr)

## ✨ 기능 테스트
<!-- <details>
<summary> User </summary>

### 회원가입
![](/img/기능구현/유저_회원가입.gif)
### 로그인
![](/img/기능구현/유저_로그인.gif)
</details>
<details>
<summary> Company </summary>

### 회원가입
![](/img/기능구현/사업자_회원가입.gif)
### 로그인
![](/img/기능구현/사업자_로그인_상품수정.gif)
</details>
<details>
<summary> Item </summary>

### 상품조회
![](/img/기능구현/상품_조회.gif)
### 상품검색
![](/img/기능구현/상품_검색.gif)
### 장바구니 담기
![](/img/기능구현/상품_장바구니.gif)
### 상품 등록
![](/img/기능구현/상품_등록.gif)
</details>
<details>
<summary> Cart </summary>

### 장바구니 페이지
![](/img/기능구현/장바구니.gif)
</details>
<details>
<summary> Order </summary>

### 카카오페이 결제
![](/img/기능구현/카카오페이_결제.gif)
### 카카오페이 환불
![](/img/기능구현/카카오페이_결제환불.gif)
</details>
<details>
<summary> Recipe </summary>

### 레시피 등록
![](/img/기능구현/레시피_작성.gif)
### 레시피 목록
![](/img/기능구현/레시피_리스트조회.gif)
### 레시피 상세
![](/img/기능구현/레시피_상세조회.gif)
</details>
<details>
<summary> Mypage(User)  </summary>

### 주문내역
![](/img/기능구현/마이페이지_주문내역.gif)
### 주소
![](/img/기능구현/마이페이지_주소.gif)
### 키워드
![](/img/기능구현/마이페이지_키워드.gif)
</details>
<details>
<summary> Mypage(Company)  </summary>

### 주문관리
![](/img/기능구현/사업자_주문관리.gif)
### 주문관리-송장번호입력
![](/img/기능구현/사업자_송장번호입력.gif)
### 상품등록
![](/img/기능구현/상품_등록.gif)
### 상품목록 조회/수정
![](/img/기능구현/사업자_상품목록_조회수정.gif)
</details> -->