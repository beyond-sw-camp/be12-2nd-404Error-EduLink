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
          <h1 class="text-4xl">자료실</h1>
        </div>

      </header>

      <div class="p-4 dark:bg-gray-800 rounded-lg shadow-lg">
        <router-link to="/board/boardform"
          class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-none border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-4 text-sm">
          <span class="px-2">글쓰기</span>
        </router-link>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 uppercase text-xs">
              <tr>
                <th scope="col" class="px-6 py-4"></th>
                <th scope="col" class="px-6 py-4">Name</th>
                <th scope="col" class="px-6 py-4">File Name</th>
                <th scope="col" class="px-6 py-4">File Size</th>
                <th scope="col" class="px-6 py-4">View Count</th>

              </tr>
            </thead>
            <tbody>
              <TableRow v-for="(post, index) in posts" :key="index" :post="post" :columns="columns" />
            </tbody>

          </table>
        </div>
      </div>

      <PageNav :pages="[1, 2, 3, 4, 5]" :currentPage="3"/>

    </section>
  </div>


</template>

<script setup>

import { ref } from 'vue';

const posts = [
  { name: 'vue', title: 'vue_김정엽.txt', Size: '1KB', view: 204 },
  { name: 'vue', title: 'vue_오건하.txt', Size: '1KB', view: 20 },
  { name: 'vue', title: 'vue_이우진.txt', Size: '1KB', view: 1 },
  { name: 'vue', title: 'vue_김무성.txt', Size: '12KB', view: 2 },
  { name: 'vue', title: 'vue_김유진.txt', Size: '22KB', view: 21 },
  { name: 'vue', title: 'vue_오건하.txt', Size: '1KB', view: 22 },
  { name: 'vue', title: 'vue_김무성.txt', Size: '2KB', view: 23 },
  { name: 'java', title: 'java_오건하.txt', Size: '12KB', view: 2 },
  { name: 'java', title: 'java_이우진.txt', Size: '1KB', view: 34 },
  { name: 'java', title: 'java_이우진.txt', Size: '12KB', view: 0 },
  { name: 'java', title: 'java_김유진.txt', Size: '1KB', view: 24 },
  { name: 'java', title: 'java_김정엽.txt', Size: '12KB', view: 23 },
  { name: 'java', title: 'java_오건하.txt', Size: '1KB', view: 23 },
  { name: 'java', title: 'java_김정엽.txt', Size: '12KB', view: 256 },
  { name: 'java', title: 'java_김무성.txt', Size: '1KB', view: 190 },
  { name: 'java', title: 'java_김유진.txt', Size: '12KB', view: 20 }
];

const columns = [
  { field: 'id', label: '번호' },
  { field: 'name', label: 'NAME' },
  { field: 'title', label: 'FILE NAME' },
  { field: 'Size', label: 'FILE SIZE' },
  { field: 'view', label: 'VIEW COUNT' }
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