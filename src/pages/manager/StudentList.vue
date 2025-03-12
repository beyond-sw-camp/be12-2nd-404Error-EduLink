<template>
  <div
    style="background-color: whitesmoke;"
    class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
  >
    <div style="margin-top: 30px;" class="student-list-container">
      <h1 class="page-title">학생 관리</h1>

      <!-- 수강 신청한 학생 테이블 (더미 데이터) -->
      <div class="table-section">
        <h2 class="table-title">수강 신청한 학생</h2>
        <table class="custom-table">
          <thead>
            <tr>
              <th>학생 이름</th>
              <th>연락처</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in appliedStudents" :key="student.id">
              <td>{{ student.name }}</td>
              <td>{{ student.contact }}</td>
              <td>
                <button
                  @click.stop="showConfirmModal('approve', student)"
                  class="approve-button"
                >
                  승인
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 현재 수강 중인 학생 테이블 (백엔드 API 사용) -->
      <div class="table-section">
        <h2 class="table-title">현재 수강 중인 학생</h2>
        <table class="custom-table">
          <thead>
            <tr>
              <th>학생 이름</th>
              <th>연락처</th>
              <th>출석</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="student in currentStudents"
              :key="student.idx"
              @click="openModal(student)"
            >
              <td>{{ student.name }}</td>
              <td>{{ student.contact ? student.contact : '-' }}</td>
              <td>
                <!-- studentDetail.attendance 값이 있다면 표시 -->
                {{ student.studentDetail && student.studentDetail.attendance ? student.studentDetail.attendance + '회' : '-' }}
              </td>
              <td>
                <button
                  @click.stop="showConfirmModal('expel', student)"
                  class="expel-button"
                >
                  제적 처리
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 페이지 네비게이션 -->
        <div>
          <PageNavi
            :currentPage="currentStudentPageDisplay"
            :totalPages="totalStudentPages"
            @updatePage="handleUpdateStudentPage"
          />
        </div>
      </div>

      <!-- 학생 상세 정보 모달 -->
      <div v-if="selectedStudent" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="modal-header">
            <h3 class="modal-title">학생 상세 정보</h3>
            <button class="close-button" @click="closeModal">&times;</button>
          </div>
          <div class="modal-body">
            <p><strong>이름:</strong> {{ selectedStudent.name }}</p>
            <p><strong>생년월일:</strong> {{ selectedStudent.birth }}</p>
            <p><strong>이메일:</strong> {{ selectedStudent.email }}</p>
            <p><strong>연락처:</strong> {{ selectedStudent.contact ? selectedStudent.contact : '-' }}</p>
            <p>
              <strong>출석:</strong>
              {{ selectedStudent.studentDetail && selectedStudent.studentDetail.attendance ? selectedStudent.studentDetail.attendance + '회' : '-' }}
            </p>
            <p>
              <strong>남은 휴가 수:</strong>
              {{ selectedStudent.studentDetail && selectedStudent.studentDetail.vacationLeft ? selectedStudent.studentDetail.vacationLeft + '일' : '-' }}
            </p>
          </div>
          <div class="modal-footer">
            <button class="close-modal-button" @click="closeModal">닫기</button>
          </div>
        </div>
      </div>

      <!-- 확인 모달 -->
      <div v-if="confirmModal.visible" class="modal-overlay" @click="closeConfirmModal">
        <div class="modal-content" @click.stop>
          <div class="modal-header">
            <h3 class="modal-title">확인</h3>
            <button class="close-button" @click="closeConfirmModal">&times;</button>
          </div>
          <div style="text-align: center;" class="modal-body">
            <p>
              정말로 <strong>{{ confirmModal.student.name }}</strong> 님의
              {{ confirmModal.action === 'approve' ? '수강신청을 승인' : '제적 처리를 승인' }}
              하시겠습니까?<br>
            </p>
          </div>
          <div class="modal-footer">
            <button class="approve-button" @click="confirmAction">확인</button>
            <button class="close-modal-button" @click="closeConfirmModal">취소</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import PageNavi from "./PageNavi.vue";

// 기존 더미 데이터 for 수강 신청한 학생
const appliedStudents = ref([
  { id: 4, name: "학생27", contact: "010-9876-5432" },
  { id: 5, name: "학생28", contact: "010-1234-8765" },
]);

// 현재 수강 중인 학생: API에서 불러옴
const currentStudents = ref([]);

// 모달 관련 상태
const selectedStudent = ref(null);
const confirmModal = ref({
  visible: false,
  action: "",
  student: null,
});

// 페이지네비게이션 관련
const currentStudentPage = ref(0); // 0-based index
const totalStudentPages = ref(0);

// getStudents 함수 (사이즈 10)
import axios from "axios";
async function getStudents(page = 0, size = 10) {
  try {
    const response = await axios.get("/api/student/list", {
      params: { page, size },
    });
    if (response.data.isSuccess) {
      const data = response.data.data;
      // 실제 학생 목록은 data.studentList에 있음
      currentStudents.value = data.studentList;
      currentStudentPage.value = data.page;
      totalStudentPages.value = data.totalPages;
    } else {
      console.error("학생 목록 요청 실패:", response.data.message);
    }
  } catch (error) {
    console.error("학생 목록 API 호출 중 오류 발생:", error);
  }
}

// 1-based 표시용 계산값
const currentStudentPageDisplay = computed(() => currentStudentPage.value + 1);

// 초기 데이터 로드
onMounted(() => {
  getStudents(0, 3);
});

// 모달 관련 함수
const openModal = (student) => {
  selectedStudent.value = student;
};
const closeModal = () => {
  selectedStudent.value = null;
};

const showConfirmModal = (action, student) => {
  confirmModal.value = { visible: true, action, student };
};
const closeConfirmModal = () => {
  confirmModal.value = { visible: false, action: "", student: null };
};

const confirmAction = () => {
  const { action, student } = confirmModal.value;
  if (action === "approve") {
    currentStudents.value.push({
      ...student,
      // 임의의 초기값 (실제 API 연동 시 수정)
      attendanceRate: "0%",
      totalAttendanceDays: 0,
      currentAttendanceDays: 0,
      absentDays: 0,
      remainingLeaves: 0,
    });
    appliedStudents.value = appliedStudents.value.filter((s) => s.id !== student.id);
    alert(`${student.name} 학생의 수강 신청이 승인되었습니다.`);
  } else if (action === "expel") {
    currentStudents.value = currentStudents.value.filter((s) => s.id !== student.id);
    alert(`${student.name} 학생이 제적 처리되었습니다.`);
  }
  closeConfirmModal();
};

// 페이지네비게이션 핸들러
const handleUpdateStudentPage = (page) => {
  // PageNavi에서 전달받은 page는 1-based, API 호출 시 0-based로 변환
  getStudents(page - 1, 10);
};
</script>



<style scoped>
/* 공통 스타일 */
.student-list-container {
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

.expel-button, .approve-button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.expel-button {
  background-color: #e74c3c;
}

.approve-button {
  background-color: #2ecc71;
}

.expel-button:hover {
  background-color: #c0392b;
}

.approve-button:hover {
  background-color: #27ae60;
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
  padding: 16px;
  text-align: right;
  background-color: #f7f7f7;
  border-top: 1px solid #ddd;
 
  display: flex;
  justify-content: space-between;
  padding: 16px;

}

.close-modal-button {
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.close-modal-button:hover {
  background-color: #2980b9;
}
</style>
