<template>

  <div style="background-color: whitesmoke;"
    class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">

    <BoardNav :selectedTab="'Profile'" />

    <section class="w-full max-w-7xl">
      <header class="mb-6 flex items-center justify-between">
        <div class="flex items-center">
          <div style="background-color: transparent;"
            class="icon text-black rounded-full w-12 h-12 flex justify-center items-center mr-3">

            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023" />
            </svg>
          </div>
          <h1 class="text-4xl">과제</h1>
        </div>

      </header>

      <div class="p-4 dark:bg-gray-800 rounded-lg shadow-lg">
        <router-link to="/board/register"
          class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-none border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-4 text-sm">
          <span class="px-2">글쓰기</span>
        </router-link>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 uppercase text-xs">
              <tr>
                <th scope="col" class="px-6 py-4"></th>
                <th scope="col" class="px-6 py-4">과제명</th>
                <th scope="col" class="px-6 py-4">파일명</th>
                <th scope="col" class="px-6 py-4">제출률</th>
                <th scope="col" class="px-6 py-4">조회수</th>

              </tr>
            </thead>
            <tbody>
              <TableRow v-for="(post, index) in posts" :key="index" :post="post" :columns="columns" />
            </tbody>

          </table>
        </div>
      </div>

      <PageNav :pages="[1, 2, 3, 4, 5]" :currentPage="4" />

    </section>
  </div>


</template>

<script setup>
import { ref } from 'vue';

const posts = [
  { name: 'vue', title: 'vue_김정엽.txt', uproad: '제출완료', view: 204 },
  { name: 'vue', title: 'vue_오건하.txt', uproad: '제출완료', view: 20 },
  { name: 'vue', title: 'vue_이우진.txt', uproad: '제출완료', view: 1 },
  { name: 'vue', title: 'vue_김무성.txt', uproad: '제출완료', view: 2 },
  { name: 'vue', title: 'vue_김유진.txt', uproad: '제출완료', view: 21 },
  { name: 'vue', title: 'vue_오건하.txt', uproad: '제출완료', view: 22 },
  { name: 'vue', title: 'vue_김무성.txt', uproad: '제출완료', view: 23 },
  { name: 'java', title: 'java_오건하.txt', uproad: '제출완료', view: 2 },
  { name: 'java', title: 'java_이우진.txt', uproad: '제출완료', view: 34 },
  { name: 'java', title: 'java_이우진.txt', uproad: '제출완료', view: 0 },
  { name: 'java', title: 'java_김유진.txt', uproad: '제출완료', view: 24 },
  { name: 'java', title: 'java_김정엽.txt', uproad: '제출완료', view: 23 },
  { name: 'java', title: 'java_오건하.txt', uproad: '제출완료', view: 23 },
  { name: 'java', title: 'java_김정엽.txt', uproad: '제출완료', view: 256 },
  { name: 'java', title: 'java_김무성.txt', uproad: '제출완료', view: 190 },
  { name: 'java', title: 'java_김유진.txt', uproad: '제출완료', view: 20 }
];

const columns = [
  { field: 'id', label: '번호' },
  { field: 'name', label: '글쓴이' },
  { field: 'title', label: '제목' },
  { field: 'uproad', label: '업로드 상태' },
  { field: 'view', label: '조회수' }
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
/* 타이틀과 버튼에 스타일을 추가 */
h1 {
  font-size: 2rem;
  color: #2d3748;
  font-weight: 600;
}

/* 글쓰기 버튼 */
.router-link {
  border-radius: 0.375rem;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  background-color: #3182ce;
  color: white;
  transition: background-color 0.3s ease;
}

.router-link:hover {
  background-color: #2b6cb0;
  border-color: #2b6cb0;
}

/* 테이블 스타일 */
table {
  border-collapse: collapse;
  width: 100%;
}

table th, table td {
  padding: 1rem;
  text-align: left;
}

table th {
  background-color: #edf2f7;
}

table tr:hover {
  background-color: #f7fafc;
}

table td {
  border-bottom: 1px solid #e2e8f0;
}

/* 배경과 테두리 개선 */
.bg-gray-50 {
  background-color: #f7fafc;
}

.dark:bg-slate-800 {
  background-color: #2d3748;
}
</style>