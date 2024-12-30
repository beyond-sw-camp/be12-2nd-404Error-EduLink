<template>
  <div style="background-color: whitesmoke;"
  class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
    <div>
      <!-- 오버레이 -->
      <div class="flex z-30 items-center flex-col justify-center overflow-hidden fixed inset-0" v-show="isOverlayVisible">
        <div class="overlay absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700"></div>
      </div>
  
      <!-- 메인 콘텐츠 -->
      <section class="p-6 xl:max-w-6xl xl:mx-auto">
        <section class="mb-4 flex items-center justify-between">
          <div class="flex items-center justify-start">
            <span class="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/>
              </svg>
            </span>
            <h1 class="text-3xl font-bold leading-tight">공지사항</h1>
          </div>
          <router-link to="/board/managerboard" class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-none border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-4 mr-3 last:mr-0 mb-3 ml-auto text-sm">
            <span class="px-2">목록</span>
          </router-link>
        </section>
  
        <div class="rounded-2xl flex-col dark:bg-slate-300/70 bg-white flex">
          <div class="flex-1 p-6">
            <div>
              <p>작성자: 심강사</p>
              <div class="mt-4"></div>
            </div>
  
            <!-- 글 제목 및 내용 -->
            <div class="mb-2 last:mb-0">
              <label class="text-3xl font-bold leading-tight">vscode커밋하는</label>
              <div class="px-3 py-2 max-w-full">
                오늘 수업은 
                <p>있어요</p>
                <p>백엔드 시작합니다.</p>
                <p>책 받아가세요~~</p>
              </div>
            </div>
  
            <hr class="my-4 border-gray-300 dark:border-gray-600">
          </div>
        </div>
      </section>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOverlayVisible: false, // 오버레이 표시 여부
      };
    },
   
  };
  </script>
  
  <style scoped>
  
  </style>
  