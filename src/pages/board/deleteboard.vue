<script setup>
import { ref } from 'vue';

// 모달 보이기 상태 관리 (옵션)
const isModalVisible = ref(true);

// 삭제 동작 함수
function deletePost() {
  alert("게시물이 삭제되었습니다."); // 삭제 동작
  isModalVisible.value = false; // 모달 닫기
}

// 취소 동작 함수
function cancelDelete() {
  alert("삭제가 취소되었습니다."); // 취소 동작
  isModalVisible.value = false; // 모달 닫기
}
</script>

<template>
    <div style="background-color: whitesmoke;"
    class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
  <!-- 모달 컨테이너 -->
  <div
  v-if="isModalVisible"
  class="rounded-2xl flex-col dark:bg-slate-900 bg-white flex shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
  style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);"
>
  <div class="flex-1 p-6">
    <div class="flex items-center justify-between mb-3">
      <h1 class="text-2xl">게시물 삭제</h1>
      <button
        @click="cancelDelete"
        class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-full border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 p-1"
        type="button"
      >
        <span class="inline-flex justify-center items-center w-6 h-6">
          <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
            <path
              fill="currentColor"
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
        </span>
      </button>
    </div>
    <div class="space-y-3">
      <p>
        이 게시물을 삭제하면 <b>복구할 수 없습니다.</b>
      </p>
      <p>계속하시겠습니까?</p>
    </div>
  </div>
  <footer class="p-6">
    <div class="flex items-center justify-start flex-wrap -mb-3">
      <button
        @click="deletePost"
        class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-red-600 dark:border-red-500 ring-red-300 dark:ring-red-700 bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600 py-2 px-3 mr-3 last:mr-0 mb-3"
        type="button"
      >
        <span class="px-2">삭제</span>
      </button>
      <button
        @click="cancelDelete"
        class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-red-600 dark:border-red-500 ring-red-300 dark:ring-red-700 text-red-600 dark:text-red-500 hover:bg-red-600 hover:text-white hover:dark:text-white hover:dark:border-red-600 py-2 px-3 mr-3 last:mr-0 mb-3"
        type="button"
      >
        <span class="px-2">취소</span>
      </button>
    </div>
  </footer>
</div>

    </div>
</template>

<style scoped>

</style>
