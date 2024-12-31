<template>
   
  <div style="background-color: whitesmoke;"
class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">

<BoardNav :selectedTab="'Profile'" />

<section class="w-full max-w-7xl">
  <header class="mb-6 flex items-center justify-between">
    <div class="flex items-center">
      <div style="background-color: transparent;" class="icon text-black rounded-full w-12 h-12 flex justify-center items-center mr-3">

        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/>
        </svg>
      </div>
      <h1 class="text-4xl">공지사항</h1>
    </div>
   
  </header>
 
  <div class="p-4 dark:bg-gray-800 rounded-lg shadow-lg">
    <router-link to="/board/boardform" class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-none border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-4 text-sm">
        <span class="px-2">글쓰기</span>
      </router-link>
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 uppercase text-xs">
          <tr>
            <th scope="col" class="px-6 py-4">번호</th>
            <th scope="col" class="px-6 py-4">글쓴이</th>
            <th scope="col" class="px-6 py-4">제목</th>
            <th scope="col" class="px-6 py-4">작성 일자</th>
          </tr>
        </thead>
        <tbody>
          <TableRow v-for="(post, index) in posts" :key="index" :post="post" :columns="columns" />
        </tbody>
      </table>
    </div>
  </div>
    
  <PageNav :pages="[1, 2, 3, 4, 5]" :currentPage="1"/>

  </section>
  </div>

  
</template>

<script setup>
import {ref} from 'vue';

const posts = [
{ id: 1, name: '김유진', title: 'Vscode커밋좀', Creationdate: '2024-12-26' },
{ id: 2, name: '김무성', title: '자바', Creationdate: '2024-12-06' },
{ id: 3, name: '오건하', title: '자바스크립트', Creationdate: '2024-11-25' },
{ id: 4, name: '이우진', title: 'vue.js', Creationdate: '2024-11-02' },
{ id: 5, name: '김정엽', title: 'node.js', Creationdate: '2024-10-20' },
{ id: 6, name: '심강사', title: 'index.js', Creationdate: '2024-10-22' },
{ id: 7, name: '김유진', title: 'script setup안에는', Creationdate: '2024-10-15' },
{ id: 8, name: '김유진', title: 'router-link', Creationdate: '2024-09-30' },
{ id: 9, name: '김무성', title: '프론트엔드 프로젝트', Creationdate: '2024-09-25' },
{ id: 10, name: '이우진', title: '다 끝났다', Creationdate: '2024-09-20' },
{ id: 11, name: '김정엽', title: '프로젝트 완료', Creationdate: '2024-09-15' },
{ id: 12, name: '오건하', title: '이거 맞아요?', Creationdate: '2024-08-30' },
{ id: 13, name: '김정엽', title: '모르겠어요', Creationdate: '2024-08-20' },
{ id: 14, name: '김무성', title: '이부분', Creationdate: '2024-08-10' },
{ id: 15, name: '이우진', title: 'css', Creationdate: '2024-07-30' },
{ id: 16, name: '이우진', title: 'tomcat', Creationdate: '2024-07-20' }
];

const columns = [
  { field: 'id', label: '번호' },
  { field: 'name', label: '글쓴이' },
  { field: 'title', label: '제목' },
  { field: 'Creationdate', label: '작성 일자' }
];
</script>

<script>
import BoardNav from './components/BoardNav.vue';
import TableRow from './components/TableRow.vue';
import PageNav from './components/PageNav.vue';

export default {
  components: {
    BoardNav
  }
};
</script>

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


