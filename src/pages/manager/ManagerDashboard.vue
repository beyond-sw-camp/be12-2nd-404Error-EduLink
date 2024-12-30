<script setup>
import { ref } from 'vue';
import PageNavi from './PageNavi.vue';

const boardHeaders = ref(["글번호", "제목", "작성자", "작성일"]);
const boardData = ref([
  { id: 3, title: "프론트 엔드 시험 안내", author: "매니저1", date: "2024-12-26" },
  { id: 2, title: "크리스마스 이벤트 안내", author: "매니저1", date: "2024-12-25" },
  { id: 1, title: "화장실 수리 안내", author: "매니저2", date: "2024-12-24" },
]);

const userHeaders = ref(["번호", "이름", "연락처", "이메일"]);
const userData = ref([
  { id: 1, name: "학생1", role: "010-2312-5123", email: "student01@example.com" },
  { id: 2, name: "학생2", role: "010-2345-6637", email: "student02@example.com" },
  { id: 3, name: "학생3", role: "010-1235-7912", email: "student03@example.com" },
]);
const instructorData = ref([
  { id: 1, name: "강사1", role: "010-2152-5612", email: "instructor01@example.com" },
  { id: 2, name: "강사2", role: "010-7245-2135", email: "instructor02@example.com" },
  { id: 3, name: "강사3", role: "010-1564-7812", email: "instructor03@example.com" },
]);
const managerData = ref([
  { id: 1, name: "매니저1", role: "010-8238-9513", email: "manager01@example.com" },
  { id: 2, name: "매니저2", role: "010-0482-2348", email: "manager02@example.com" },
  { id: 3, name: "매니저3", role: "010-3294-9371", email: "manager03@example.com" },
]);

const examData = ref([
  { id: 1, subject: "프론트 엔드", date: "2024-12-30", participants: 26, total: 27 },
  { id: 2, subject: "백엔드", date: "2024-12-29", participants: 27, total: 27 },
  { id: 3, subject: "기반 기술", date: "2024-12-28", participants: 26, total: 27 },
]);



const attendanceData = ref({
  present: 26,
  total: 27,
});

// 중요 공지 데이터
const importantNotices = ref([
  { id: 1, title: "이번 주 금요일: 백엔드 자바 시험", date: "2024-12-29" },
  { id: 2, title: "과제 제출 마감 연장", date: "2024-12-28" },
]);

// 최근 시험 결과 요약 데이터
const recentExamSummary = ref({
  id: 101,
  title: "프론트엔드 - vue",
  averageScore: 78,
  passRate: 90,
});
</script>

<template>
    <div style="background-color: whitesmoke;"
    class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
    <div
  style="margin: 30px auto;" 
  class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 max-w-6xl"
>
  <!-- 출석 카드 -->
  <router-link to="/manager/attendanceManage">
    <div class="card">
      <h3 class="card-title">출석 현황</h3>
      <p class="card-stat">
        출석 인원: {{ attendanceData.present }} / {{ attendanceData.total }}
      </p>
      <progress
        class="attendance-progress"
        :value="attendanceData.present"
        :max="attendanceData.total"
        style="width: 100%;"
      ></progress>
      <p class="card-percentage">
        {{ Math.round((attendanceData.present / attendanceData.total) * 100) }}%
      </p>
    </div>
  </router-link>
  <!-- 중요 공지 카드 -->
  <router-link :to="'/notice'" class="card-link">
    <div class="card">
      <h3 class="card-title">중요 공지</h3>
      <ul class="card-list">
        <li
          v-for="notice in importantNotices"
          :key="notice.id"
          class="card-item"
        >
          {{ notice.title }} ({{ notice.date }})
        </li>
      </ul>
    </div>
  </router-link>
  <!-- 최근 시험 결과 요약 카드 -->
  <router-link :to="`/exam/${recentExamSummary.id}`" class="card-link">
    <div class="card">
      <h3 class="card-title">최근 시험 결과</h3>
      <p class="card-stat">시험명: {{ recentExamSummary.title }}</p>
      <p class="card-stat">평균 점수: {{ recentExamSummary.averageScore }}점</p>
      <p class="card-stat">통과율: {{ recentExamSummary.passRate }}%</p>
    </div>
  </router-link>
</div>


  <div class="container">
    <!-- 시험 섹션 -->
    <div class="section-title">
      <h1>시험</h1> 
      <router-link to="/manager/examList">
      <button class="more-button">더보기</button>
    </router-link>
    </div>
    <div class="exam-card-grid">
      <div v-for="exam in examData.slice(0, 3)" :key="exam.id" class="exam-card">
        <div class="exam-header">
          <h3 class="exam-subject">{{ exam.subject }}</h3>
          <p class="exam-date">시험 날짜: {{ exam.date }}</p>
        </div>
        <div class="exam-body">
          <p class="exam-participants">
            참여 인원: {{ exam.participants }} / {{ exam.total }}
          </p>
          <progress
            class="exam-progress"
            :value="exam.participants"
            :max="exam.total"
          ></progress>
        </div>
        <div class="exam-footer">
          <button class="exam-button" @click="$router.push(`/exam/${exam.id}`)">상세보기</button>
        </div>
      </div>
    </div>
  </div>
  
  <div class="container">
    <!-- 공지사항 테이블 -->
    <div class="table-header">
      <h2 class="table-title">공지사항</h2>
      <h1 style="font-size: 24px; font-weight: 600;">더보기</h1>
    </div>
    <div class="board-table-container">
      <table class="board-table">
        <thead>
          <tr>
            <th v-for="header in boardHeaders" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in boardData" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.title }}</td>
            <td>{{ row.author }}</td>
            <td>{{ row.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
    <!-- 학생 목록 테이블 -->
    <div style="margin-top: 20px;" class="table-header">
      <h2 class="table-title">학생 목록</h2>
      <router-link to="/manager/studentList">
      <button
        class="icon-button"
        type="button"
        aria-label="Actions"
      >
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path
            fill="currentColor"
            d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
          ></path>
        </svg>
      </button>
    </router-link>
    </div>
    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr>
            <th v-for="header in userHeaders" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in userData" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.role }}</td>
            <td>{{ row.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
        <PageNavi></PageNavi>
    </div>
</div>

<div>
    <div style="margin-top: 20px;" class="table-header">
      <h2 class="table-title">강사 목록</h2>
      <router-link to="/manager/instructorList">
      <button
        class="icon-button"
        type="button"
        aria-label="Actions"
      >
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path
            fill="currentColor"
            d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
          ></path>
        </svg>
      </button>
    </router-link>
    </div>
    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr>
            <th v-for="header in userHeaders" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in instructorData" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.role }}</td>
            <td>{{ row.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
        <PageNavi/>
    </div>
</div>

<div style="margin-bottom: 20px;">
    <div style="margin-top: 20px;" class="table-header">
      <h2 class="table-title">매니저 목록</h2>
      <router-link to="/manager/managerList">
      <button
        class="icon-button"
        type="button"
        aria-label="Actions"
      >
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path
            fill="currentColor"
            d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
          ></path>
        </svg>
      </button>
    </router-link>
    </div>
    <div class="table-container">
      <table class="custom-table">
        <thead>
          <tr>
            <th v-for="header in userHeaders" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in managerData" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.role }}</td>
            <td>{{ row.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
  <div>
    <PageNavi/>
  </div>
</div>
</template>

<style scoped>

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px; 
  margin-top: 20px;
  font-size: 24px; 
  font-weight: 600; 
  color: #444; 
  margin-left: 20px;
}


.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.icon-button {
  background-color: #f1f1f1;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
}

.icon-button:hover {
  background-color: #e0e0e0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
}

.table-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #444;
}

/* User List 테이블 스타일 */
.table-container {
  margin-bottom: 40px;
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
}

.custom-table th {
  background-color: #f7f7f7;
  text-align: left;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  border-bottom: 2px solid #eaeaea;
}

.custom-table td {
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #eaeaea;
}

.custom-table tr:hover {
  background-color: #f9f9f9;
}

.custom-table tr:nth-child(even) {
  background-color: #fdfdfd;
}

/* Board List 테이블 스타일 */
.board-table-container {
  margin-top: 20px;
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid #bbb;
  background-color: #f9f9f9;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
}

.board-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
}

.board-table th {
  background-color: #eaeaea;
  text-align: left;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  border-bottom: 2px solid #ccc;
}

.board-table td {
  padding: 10px;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
  color: #555;
}

.board-table tr:hover {
  background-color: #eef;
}

.board-table tr:nth-child(odd) {
  background-color: #fafafa;
}

/* 공통 스타일 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #444;
}

/* 시험 카드 그리드 */
.exam-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

/* 시험 카드 */
.exam-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.exam-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* 시험 카드 헤더 */
.exam-header {
  padding: 16px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #eee;
}

.exam-subject {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}

.exam-date {
  font-size: 14px;
  color: #666;
}

/* 시험 카드 본문 */
.exam-body {
  padding: 16px;
}

.exam-participants {
  font-size: 16px;
  color: #444;
  margin-bottom: 8px;
}

.exam-progress {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background-color: #e0e0e0;
  appearance: none;
  overflow: hidden;
}

.exam-progress::-webkit-progress-bar {
  background-color: #e0e0e0;
  border-radius: 4px;
}

.exam-progress::-webkit-progress-value {
  background-color: #4caf50;
  border-radius: 4px;
}

/* 시험 카드 푸터 */
.exam-footer {
  padding: 16px;
  background-color: #f7f7f7;
  text-align: center;
}

.exam-button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.exam-button:hover {
  background-color: #45a049;
}

.card {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

/* 카드 링크 스타일 */
.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

/* 카드 타이틀 */
.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 8px;
}

/* 카드 날짜 및 통계 */
.card-date,
.card-stat {
  font-size: 14px;
  color: #7f8c8d;
  margin: 4px 0;
}

.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

/* 카드 기본 스타일 */
.card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  height: 180px; /* 동일한 높이 설정 */
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* 카드 타이틀 */
.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 12px;
}

/* 카드 통계 및 리스트 */
.card-stat {
  font-size: 14px;
  color: #34495e;
  margin-bottom: 8px;
}

.card-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-item {
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 6px;
}

/* 링크 스타일 */
.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}
</style>