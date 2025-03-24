<template>
  <div style="background-color: whitesmoke;"
    class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
    <div class="instructor-list-container">
      <h1 class="page-title">강사 관리</h1>

      <!-- 강사 테이블 -->
      <div class="table-section">
        <div class="table-header">
          <h2 class="table-title">강사 목록</h2>
          <button class="add-button green-button" @click="openRegisterModal">
            + 강사 등록
          </button>
        </div>
        <table class="custom-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
              <th>이메일</th>
              <th>포트폴리오</th>
              <th>기록</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="instructor in instructors" :key="instructor.userIdx" @click="openDetailsModal(instructor)">
              <td>{{ instructor.userIdx }}</td>
              <td>{{ instructor.name }}</td>
              <td>{{ instructor.email }}</td>
              <td>{{ instructor.portfolio }}</td>
              <td>{{ instructor.record }}</td>
              <td>
                <button @click.stop="showConfirmModal(instructor)" class="delete-button">강사 삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- PageNavi 컴포넌트 사용 -->
        <div>
          <PageNavi 
            :currentPage="instructorCurrentPageDisplay" 
            :totalPages="instructorTotalPages"
            @updatePage="handleUpdateInstructorPage" 
          />
        </div>
      </div>

      <!-- 강사 상세 정보 모달 -->
      <div v-if="selectedInstructor" class="modal-overlay" @click="closeDetailsModal">
        <div class="modal-content" @click.stop>
          <div class="modal-header">
            <h3 class="modal-title">강사 상세 정보</h3>
            <button class="close-button" @click="closeDetailsModal">&times;</button>
          </div>
          <div class="modal-body">
            <p><strong>번호:</strong> {{ selectedInstructor.userIdx }}</p>
            <p><strong>이름:</strong> {{ selectedInstructor.name }}</p>
            <p><strong>이메일:</strong> {{ selectedInstructor.email }}</p>
            <p><strong>포트폴리오:</strong> {{ selectedInstructor.portfolio }}</p>
            <p><strong>기록:</strong> {{ selectedInstructor.record }}</p>
          </div>
          <div class="modal-footer">
            <button class="close-modal-button" @click="closeDetailsModal">닫기</button>
          </div>
        </div>
      </div>

      <!-- 강사 삭제 확인 모달 -->
      <div v-if="showDeleteConfirmModal" class="modal-overlay" @click="closeDeleteConfirmModal">
        <div class="modal-content" @click.stop>
          <div class="modal-header">
            <h3 class="modal-title">강사 삭제</h3>
            <button class="close-button" @click="closeDeleteConfirmModal">&times;</button>
          </div>
          <div class="modal-body">
            <p>정말로 <strong>{{ instructorToDelete?.name }}</strong> 강사를 삭제하시겠습니까?</p>
          </div>
          <div class="modal-footer">
            <button class="delete-button" @click="deleteInstructor(instructorToDelete)">확인</button>
            <button class="close-modal-button" @click="closeDeleteConfirmModal">취소</button>
          </div>
        </div>
      </div>

      <!-- 강사 등록 모달 -->
      <div v-if="showRegisterModal" class="modal-overlay" @click="closeRegisterModal">
        <div class="modal-content" @click.stop>
          <div class="modal-header">
            <h3 class="modal-title">강사 등록</h3>
            <button class="close-button" @click="closeRegisterModal">&times;</button>
          </div>
          <form @submit.prevent="registerInstructor">
            <div class="modal-body">
              <div class="form-group">
                <label for="name">이름</label>
                <input v-model="newInstructor.name" id="name" type="text" required />
              </div>
              <div class="form-group">
                <label for="email">이메일</label>
                <input v-model="newInstructor.email" id="email" type="email" required />
              </div>
              <div class="form-group">
                <label for="portfolio">포트폴리오</label>
                <input v-model="newInstructor.portfolio" id="portfolio" type="text" required />
              </div>
              <div class="form-group">
                <label for="record">기록</label>
                <input v-model="newInstructor.record" id="record" type="text" required />
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="submit-button">등록</button>
              <button type="button" class="close-modal-button" @click="closeRegisterModal">취소</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useManagerStore } from "../../stores/useManagerStore.js";
import PageNavi from "./PageNavi.vue";

const managerStore = useManagerStore();

// 강사 목록 및 페이징 상태 (store에서 관리)
const instructors = computed(() => managerStore.instructors);
const currentInstructorPage = computed(() => managerStore.currentInstructorPage); // 0-based index
const instructorTotalPages = computed(() => managerStore.totalInstructorPages);
// 화면에 표시할 때 1-based로 변환
const instructorCurrentPageDisplay = computed(() => currentInstructorPage.value + 1);

// 초기 데이터 로드 (사이즈 10)
onMounted(() => {
  managerStore.getInstructors(0, 10);
});

// 로컬 모달 상태 및 등록 데이터
const selectedInstructor = ref(null);
const showRegisterModal = ref(false);
const newInstructor = ref({
  name: "",
  email: "",
  portfolio: "",
  record: "",
});
const showDeleteConfirmModal = ref(false);
const instructorToDelete = ref(null);

function openDetailsModal(instructor) {
  selectedInstructor.value = instructor;
}
function closeDetailsModal() {
  selectedInstructor.value = null;
}
function openRegisterModal() {
  showRegisterModal.value = true;
}
function closeRegisterModal() {
  showRegisterModal.value = false;
}
function registerInstructor() {
  // 실제 등록 API 호출 시 axios.post("/api/manager/instructor", newInstructor.value) 등으로 처리
  // 여기서는 임시로 store의 instructors 배열에 추가
  const instructor = {
    ...newInstructor.value,
    userIdx: Date.now(), // 임시 ID 생성
  };
  managerStore.instructors.push(instructor);
  newInstructor.value = {
    name: "",
    email: "",
    portfolio: "",
    record: "",
  };
  closeRegisterModal();
}
function showConfirmModal(instructor) {
  instructorToDelete.value = instructor;
  showDeleteConfirmModal.value = true;
}
function closeDeleteConfirmModal() {
  instructorToDelete.value = null;
  showDeleteConfirmModal.value = false;
}
function deleteInstructor(instructor) {
  // 실제 삭제 API 호출 시 axios.delete(`/api/manager/instructor/${instructor.userIdx}`) 등으로 처리
  const index = managerStore.instructors.findIndex((i) => i.userIdx === instructor.userIdx);
  if (index !== -1) {
    managerStore.instructors.splice(index, 1);
    alert(`${instructor.name} 강사를 삭제했습니다.`);
  }
  closeDeleteConfirmModal();
}
function handleUpdateInstructorPage(page) {
  // PageNavi에서 받은 page는 1-based, API 호출 시 0-based로 변환
  managerStore.getInstructors(page - 1, 10);
}
</script>

<style scoped>
/* 기존 CSS 그대로 유지 */
</style>


<style scoped>
/* 공통 스타일 */
.instructor-list-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
}

.page-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #444;
}

.table-section {
  margin-bottom: 40px;
}

.table-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #555;
}

/* 테이블 스타일 */
.custom-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.custom-table th, .custom-table td {
  text-align: center;
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
}

.custom-table th {
  background-color: #f7f7f7;
  font-weight: bold;
}

.custom-table tr:hover {
  background-color: #f9f9f9;
}

.custom-table tr {
  cursor: pointer;
}

.delete-button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  background-color: #e74c3c;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #c0392b;
}

/* Input 스타일 수정 */
.form-group label {
  display: block;
  margin-bottom: 8px; /* Label과 Input 간격 추가 */
  font-weight: bold;
  font-size: 14px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 2px solid #ccc; /* Input 테두리 명확하게 추가 */
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.3s ease-in-out;
}

/* Input에 포커스 시 스타일 */
.form-group input:focus {
  border-color: #4caf50; /* 포커스 시 초록색 테두리 */
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.4); /* 포커스 시 테두리 강조 */
}

/* 모달 스타일 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ddd;
}

.modal-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: #555;
  cursor: pointer;
}

.close-button:hover {
  color: #000;
}

.modal-body {
  padding: 16px;
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #f7f7f7;
  border-top: 1px solid #ddd;
}

.submit-button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #45a049;
}

.close-modal-button {
  padding: 8px 16px;
  background-color: #ddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.close-modal-button:hover {
  background-color: #fff;
}

/* 강사 등록 버튼 스타일 */
.green-button {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: auto;
}

.green-button:hover {
  background-color: #45a049;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

</style>

