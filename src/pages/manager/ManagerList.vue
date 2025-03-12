<template>
  <div class="manager-list-container">
    <h1 class="page-title">강사 관리</h1>

<!-- 강사 테이블 -->
    <h2 class="table-title">강사 목록</h2>
    <!-- 매니저 테이블 -->
    <div class="table-section">
      <table class="custom-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>생년월일</th>
            <th>이메일</th>
            <th>권한 여부</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="manager in managers" :key="manager.idx">
            <td>{{ manager.idx }}</td>
            <td>{{ manager.name }}</td>
            <td>{{ manager.birth }}</td>
            <td>{{ manager.email }}</td>
            <td>
              <button 
                :class="['permission-button', manager.enabled ? 'enabled' : 'disabled']"
                @click.stop="togglePermission(manager)"
              >
                {{ manager.enabled ? "Yes" : "No" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      
      <!-- 페이지 네비게이션 (PageNavi는 이미 만들어져 있다고 가정) -->
      <div>
        <PageNavi 
          :currentPage="managerCurrentPage" 
          :totalPages="managerTotalPages"
          @updatePage="handleUpdateManagerPage" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PageNavi from "./PageNavi.vue";

export default {
  name: "ManagerList",
  components: { PageNavi },
  data() {
    return {
      managers: [],
      currentPage: 0, // 백엔드가 0-based page index 사용
      totalPages: 0,
      totalElements: 0,
      pageSize: 10,
    };
  },
  computed: {
    // 화면에 표시할 때 1-based 번호로 변환
    managerCurrentPage() {
      return this.currentPage + 1;
    },
    managerTotalPages() {
      return this.totalPages;
    },
  },
  mounted() {
    this.getManagers(0, this.pageSize);
  },
  methods: {
    async getManagers(page = 0, size = 10) {
      try {
        const response = await axios.get("/api/manager/list", {
          params: { page, size },
        });
        if (response.data.isSuccess) {
          const data = response.data.data;
          // 매니저 목록은 data.content에 있음
          this.managers = data.content;
          // 페이징 정보 저장 (0-based index)
          this.currentPage = data.currentPage;
          this.totalPages = data.totalPages;
          this.totalElements = data.totalElements;
        } else {
          console.error("API 요청 실패:", response.data.message);
        }
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    },
    handleUpdateManagerPage(page) {
      // PageNavi에서 전달받은 page는 1-based이므로, API 호출 시 -1 처리
      this.getManagers(page - 1, this.pageSize);
    },
    togglePermission(manager) {
      // 예시로 /api/manager/{idx}/toggleEnabled 엔드포인트를 호출 (백엔드에 맞게 수정)
      axios
        .patch(`/api/manager/${manager.idx}/toggleEnabled`)
        .then((response) => {
          if (response.data.isSuccess) {
            // API 응답 후 로컬에서 enabled 값을 토글 처리
            manager.enabled = !manager.enabled;
          } else {
            console.error("권한 변경 실패:", response.data.message);
          }
        })
        .catch((error) => {
          console.error("권한 변경 API 호출 중 오류 발생:", error);
        });
    },
  },
};
</script>

<style scoped>
.manager-list-container {
  max-width: 1200px;
  margin: 0 auto;
  margin-left: 300px;
  margin-top: 50px;
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

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.table-title {
  font-size: 20px;
  font-weight: bold;
  color: #555;
}

.add-button {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.add-button:hover {
  background-color: #2980b9;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.custom-table th,
.custom-table td {
  text-align: left;
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

.permission-button {
  padding: 6px 12px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.permission-button.enabled {
  background-color: #2ecc71;
}

.permission-button.disabled {
  background-color: #bdc3c7;
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
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ddd;
  position: relative;
}

.modal-body {
  padding: 16px;
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 16px;
  background-color: #f7f7f7;
  border-top: 1px solid #ddd;
}

.submit-button {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #2980b9;
}

.close-modal-button {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-modal-button:hover {
  background-color: #c0392b;
}

.modal-body label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.modal-body input,
.modal-body select {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  font-size: 14px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
}

.modal-body input:focus,
.modal-body select:focus {
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.4);
}
</style>