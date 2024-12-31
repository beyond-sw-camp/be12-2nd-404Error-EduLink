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

<!-- ## 🔧 시스템 아키텍처
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
<details>
<summary> User </summary>

### 회원가입
<img src="./images/feat_gif/회원가입.gif" />

### 로그인
<img src="./images/feat_gif/로그인.gif" />


### 개인정보
![](/imgages/feat_gif/.gif)

</details>


<details>
<summary> Student </summary>

### 출석,퇴실,휴가,조퇴

<img src="./images/feat_gif/출조휴.gif" />

### 커리큘럼 진행률

<img src="./images/feat_gif/커리큘럼.gif" />






</details>


<details>
<summary> Instructor </summary>

### 커리큘럼 등록
<img src="./images/feat_gif/.gif" />

### 과제 생성성
<img src="./images/feat_gif/과제생성.gif" />

### 과제 수정
<img src="./images/feat_gif/과제수정.gif" />

### 과제 삭제
<img src="./images/feat_gif/과제삭제.gif" />

### 과제별 제출 학생 확인
<img src="./images/feat_gif/과제별제출학생.gif" />

### 자료 등록
<img src="./images/feat_gif/자료등록.gif" />

### 자료 수정
<img src="./images/feat_gif/자료수정.gif" />

### 자료 삭제
<img src="./images/feat_gif/자료삭제.gif" />

### 학생 상세보기
<img src="./images/feat_gif/학생상세보기.gif" />
</details>


<details>
<summary> Manager </summary>



### 학생 리스트, 상세 정보 보기
![학생리스트.gif](/images/feat_gif/manager_gif/student_list_detail.gif)

### 학생 수강 승인, 제적 처리
![학생승인제적.gif](/images/feat_gif/manager_gif/student_approve_expel.gif)

### 강사 리스트, 상세 정보 보기
![강사리스트.gif](/images/feat_gif/manager_gif/instructor_list_detail.gif)

### 강사 추가, 삭제
![강사추가삭제.gif](/images/feat_gif/manager_gif/instructor_insert_delete.gif)

### 매니저 리스트, 상세보기
![매니저리스트.gif](/images/feat_gif/manager_gif/manager_list_detail.gif)

### 매니저 추가, 삭제
![매니저추가삭제.gif](/images/feat_gif/manager_gif/manager_insert_delete.gif)

### 출석 정보 보기
![출석.gif](/images/feat_gif/manager_gif/attendance_list.gif)

### 휴가 / 병가 / 예비군 출석 처리
![출석처리.gif](/images/feat_gif/manager_gif/leave_request.gif)

### 시험 추가 / 수정
![시험.gif](/images/feat_gif/manager_gif/exam_add_update.gif)

### 시험 상세 정보 보기
![시험상세정보.gif](/images/feat_gif/manager_gif/exam_details.gif)

</details>


<details>
<summary> Board  </summary>

### 게시판 이동
![moveboard.gif](/images/feat_gif/moveboard.gif)

### 댓글작성
![add_comments.gif](/images/feat_gif/add_comments.gif)

### 게시판 탭이동
![board_category.gif](/images/feat_gif/board_category.gif)

### 게시판 글작성
![board_write.gif](/images/feat_gif/board_write.gif)
### 기능 이름
![](/img/feat_gif/.gif)

</details>