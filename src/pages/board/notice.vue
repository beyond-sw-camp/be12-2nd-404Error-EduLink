<template>
  <div style="background-color: whitesmoke;"
  class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
    <section class="p-6 xl:max-w-6xl xl:mx-auto">
      <header class="mb-6 flex items-center justify-between">
        <div class="flex items-center">
          <div class="icon bg-white text-black rounded-full w-12 h-12 flex justify-center items-center mr-3">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
</svg>

          </div>
          <h1 class="text-4xl">공지사항</h1>
        </div>
        <router-link to="/board/boardform" class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-none border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-4 mr-3 last:mr-0 mb-3 ml-auto text-sm">
            <span class="px-2">글쓰기</span>
          </router-link>
      </header>
  
      <div class="search-bar flex justify-end mb-6">
  <div style="position: relative; flex: 1; max-width: 300px;">
    <!-- SVG 아이콘 -->
    <svg style="position: absolute; top: 50%; left: 10px; transform: translateY(-50%); width: 20px; height: 20px; fill: gray;" 
         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 21l-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" stroke="currentColor" stroke-linecap="round" stroke-width="2"/>
    </svg>
    <!-- 입력 필드 -->
    <input 
      type="text" 
      placeholder="Search..."
      v-model="searchQuery" 
      style="width: 100%; padding: 10px 10px 10px 40px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
  </div>
  <button @click="filterPosts" class="btn-secondary ml-3">검색</button>
</div>



  
      <div class="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-800">
  <div class="w-full max-w-5xl p-4 overflow-auto">
    <table class="w-full border-collapse border border-gray-300 dark:border-gray-700 bg-transparent">
      <thead>
        <tr class="bg-gray-100 dark:bg-gray-700 text-left">
          <th >번호</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2">이름</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2">제목</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2">작성일</th>
        </tr>
      </thead>
      <tbody>
       
        <tr v-for="(post, index) in posts" :key="post.id" class="hover:bg-gray-100 dark:hover:bg-gray-700">
          <td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">{{ index + 1 }}</td>
          <td class="border border-gray-300 dark:border-gray-700 px-4 py-2">{{ post.name }}</td>
          <td class="border border-gray-300 dark:border-gray-700 px-4 py-2">{{ post.title }}</td>
          <td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">{{ post.Creationdate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


      <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
  <div class="flex justify-center items-center">
    <div class="justify-between items-center block md:flex">
      <div class="flex items-center justify-center mb-6 md:mb-0">
        <div class="flex items-center justify-start flex-wrap -mb-3">
          <button
            class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-gray-100 dark:border-slate-800 ring-gray-200 dark:ring-gray-500 bg-gray-200 dark:bg-slate-700 hover:bg-gray-200 hover:dark:bg-slate-700 text-sm p-1 mr-3 last:mr-0 mb-3"
            type="button"
          >
            <span class="px-2">1</span>
          </button>
          <button
            class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 text-sm p-1 mr-3 last:mr-0 mb-3"
            type="button"
          >
            <span class="px-2">2</span>
          </button>
          <button
            class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 text-sm p-1 mr-3 last:mr-0 mb-3"
            type="button"
          >
            <span class="px-2">3</span>
          </button>
          <button
            class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 text-sm p-1 mr-3 last:mr-0 mb-3"
            type="button"
          >
            <span class="px-2">4</span>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <small>Page 1 of 4</small>
      </div>
    </div>
  </div>
</div>

    </section>
  </div>
  </template>
  
  <script setup>
import {ref} from 'vue';

const posts = [
  { id: 1, name: '심강사', title: '오늘의 수업은', Creationdate: '2024-12-26' },
  { id: 2, name: '심강사', title: '오늘 10시부터', Creationdate: '2024-12-06' },
  { id: 3, name: '심강사', title: 'D-1', Creationdate: '2024-11-25' },
  { id: 4, name: '심강사', title: '오늘 휴무', Creationdate: '2024-11-02' },
  { id: 5, name: '심강사', title: '자유', Creationdate: '2024-10-20' },
  { id: 6, name: '심강사', title: '수업없음', Creationdate: '2024-10-22' },
  { id: 7, name: '심강사', title: '수업 변경 안내', Creationdate: '2024-10-15' },
  { id: 8, name: '심강사', title: '다음 주 일정', Creationdate: '2024-09-30' },
  { id: 9, name: '심강사', title: '공지사항', Creationdate: '2024-09-25' },
  { id: 10, name: '심강사', title: '긴급 공지', Creationdate: '2024-09-20' },
  { id: 11, name: '심강사', title: '시간 변경 알림', Creationdate: '2024-09-15' },
  { id: 12, name: '심강사', title: '휴강 안내', Creationdate: '2024-08-30' },
  { id: 13, name: '심강사', title: '수업 등록 마감', Creationdate: '2024-08-20' },
  { id: 14, name: '심강사', title: '수강생 모집', Creationdate: '2024-08-10' },
  { id: 15, name: '심강사', title: '수업 자료 배포', Creationdate: '2024-07-30' },
  { id: 16, name: '심강사', title: '오늘 일정 변경', Creationdate: '2024-07-20' }
]


</script>

  <style scoped>
  .btn-primary {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  .btn-secondary {
    padding: 10px 20px;
    background-color: gray;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  
  </style>
  