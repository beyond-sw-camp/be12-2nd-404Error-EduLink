<template>
    <div class="leave-management">
      <h1 class="page-title">휴가 신청 관리</h1>
  
      <!-- 탭 네비게이션 -->
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab.name"
          :class="['tab-button', { active: activeTab === tab.name }]"
          @click="activeTab = tab.name"
        >
          {{ tab.label }}
        </button>
      </div>
  
      <!-- 탭 콘텐츠 -->
      <div v-if="activeTab === 'sickLeave'" class="tab-content">
        <h2 class="tab-title">병가 신청 목록</h2>
        <table class="custom-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>신청 날짜</th>
              <th>연락처</th>
              <th>상태</th>
              <th>처리</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in sickLeaveRequests" :key="request.id">
              <td>{{ request.name }}</td>
              <td>{{ request.date }}</td>
              <td>{{ request.contact }}</td>
              <td>{{ request.status }}</td>
              <td>
                <button
                  class="process-button approve"
                  @click="processRequest(request.id, 'approve')"
                >
                  승인
                </button>
                <button
                  class="process-button reject"
                  @click="processRequest(request.id, 'reject')"
                >
                  거절
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-if="activeTab === 'vacation'" class="tab-content">
        <h2 class="tab-title">휴가 신청 목록</h2>
        <table class="custom-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>신청 날짜</th>
              <th>연락처</th>
              <th>상태</th>
              <th>처리</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in vacationRequests" :key="request.id">
              <td>{{ request.name }}</td>
              <td>{{ request.date }}</td>
              <td>{{ request.contact }}</td>
              <td>{{ request.status }}</td>
              <td>
                <button
                  class="process-button approve"
                  @click="processRequest(request.id, 'approve')"
                >
                  승인
                </button>
                <button
                  class="process-button reject"
                  @click="processRequest(request.id, 'reject')"
                >
                  거절
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-if="activeTab === 'military'" class="tab-content">
        <h2 class="tab-title">예비군 신청 목록</h2>
        <table class="custom-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>신청 날짜</th>
              <th>연락처</th>
              <th>상태</th>
              <th>처리</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in militaryRequests" :key="request.id">
              <td>{{ request.name }}</td>
              <td>{{ request.date }}</td>
              <td>{{ request.contact }}</td>
              <td>{{ request.status }}</td>
              <td>
                <button
                  class="process-button approve"
                  @click="processRequest(request.id, 'approve')"
                >
                  승인
                </button>
                <button
                  class="process-button reject"
                  @click="processRequest(request.id, 'reject')"
                >
                  거절
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const activeTab = ref("sickLeave");
  
      const tabs = [
        { name: "sickLeave", label: "병가" },
        { name: "vacation", label: "휴가" },
        { name: "military", label: "예비군" },
      ];
  
      const sickLeaveRequests = ref([
        { id: 1, name: "김학생", date: "2024-12-22", contact: "010-1234-5678", status: "대기" },
      ]);
      const vacationRequests = ref([
        { id: 2, name: "이학생", date: "2024-12-25", contact: "010-5678-1234", status: "대기" },
      ]);
      const militaryRequests = ref([
        { id: 3, name: "박학생", date: "2024-12-28", contact: "010-9876-5432", status: "대기" },
      ]);
  
      const processRequest = (id, action) => {
        const allRequests = [...sickLeaveRequests.value, ...vacationRequests.value, ...militaryRequests.value];
        const request = allRequests.find((req) => req.id === id);
        if (request) {
          request.status = action === "approve" ? "승인됨" : "거절됨";
          alert(`요청 ID ${id}가 ${request.status} 처리되었습니다.`);
        }
      };
  
      return {
        activeTab,
        tabs,
        sickLeaveRequests,
        vacationRequests,
        militaryRequests,
        processRequest,
      };
    },
  };
  </script>
  
  <style scoped>
  .leave-management {
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
  
  .tabs {
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
  
  .tab-button {
    padding: 10px 20px;
    border: none;
    background: none;
    font-size: 16px;
    cursor: pointer;
    color: #555;
    border-bottom: 3px solid transparent;
    transition: all 0.2s;
  }
  
  .tab-button.active {
    color: #007bff;
    border-bottom-color: #007bff;
  }
  
  .tab-button:hover {
    color: #0056b3;
  }
  
  .custom-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    background-color: #fff;
  }
  
  .custom-table th,
  .custom-table td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  .custom-table th {
    background-color: #f7f7f7;
  }
  
  .process-button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .process-button.approve {
    background-color: #28a745;
    color: white;
  }
  
  .process-button.reject {
    background-color: #dc3545;
    color: white;
  }
  
  .process-button:hover {
    opacity: 0.9;
  }
  </style>
  