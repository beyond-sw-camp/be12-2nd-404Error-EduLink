<template>
    <div style="background-color: whitesmoke;"
    class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
    <section class="p-6 xl:max-w-6xl xl:mx-auto">
      <header class="mb-6 flex items-center justify-between">
        <div class="flex items-center">
          <div class="icon bg-white text-black rounded-full w-12 h-12 flex justify-center items-center mr-3">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/>
</svg>

          </div>
          <h1 class="text-4xl">게시판</h1>
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
                style="width: 100%; padding: 10px 10px 10px 40px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
            </div>
            
        <button @click="filterPosts" class="btn-secondary ml-3">검색</button>
      </div>
  
      <div class="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-800">
  <div class="w-full max-w-5xl p-4 overflow-auto">
    <table class="w-full border-collapse border border-gray-300 dark:border-gray-700 bg-transparent">
      <thead>
        <tr class="bg-gray-100 dark:bg-gray-700 text-left">
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">번호</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2">이름</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2">제목</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">작성일</th>
          <th class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(post, index) in posts" 
          :key="post.id" 
          class="hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">{{ index + 1 }}</td>
          <td class="border border-gray-300 dark:border-gray-700 px-4 py-2">{{ post.name }}</td>
          <td class="border border-gray-300 dark:border-gray-700 px-4 py-2">{{ post.title }}</td>
          <td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">{{ post.Creationdate }}</td>
          <!-- 삭제 버튼 -->
          <td class="border border-gray-300 dark:border-gray-700 px-4 py-2 text-center">
            <router-link 
              :to="`/board/deleteboard`" 
              class="inline-flex justify-center items-center bg-red-600 dark:bg-red-500 text-white rounded hover:bg-red-700 dark:hover:bg-red-600 px-3 py-1"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block mr-1">
                <path 
                  fill="currentColor" 
                  d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z">
                </path>
              </svg>
            
            </router-link>
          </td>
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
  import { ref, computed } from 'vue';
  
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
  { id: 16, name: '이우진진', title: 'tomcat', Creationdate: '2024-07-20' }
];

  
  const searchQuery = ref(''); // 검색어 상태
  
  // 게시물 필터링 함수
  const filteredPosts = computed(() => {
    if (!searchQuery.value) return posts.value;
    return posts.value.filter(post => 
      post.title.includes(searchQuery.value) || post.name.includes(searchQuery.value)
    );
  });
  
  // 게시물 삭제 함수
  const deletePost = (id) => {
    posts.value = posts.value.filter(post => post.id !== id);
  };
  
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
   