<template>
    <div style="background-color: whitesmoke;"
    class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
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
            <th scope="col" class="px-6 py-4">삭제</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(post, index) in posts" 
            :key="post.id" 
            class="hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <td class="px-6 py-4">{{ index + 1 }}</td>
            <td class="px-6 py-4">{{ post.name }}</td>
            <td class="px-6 py-4">{{ post.title }}</td>
            <td class="px-6 py-4">{{ post.Creationdate }}</td>
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
    



  <nav aria-label="Page navigation example" class="flex justify-center mt-4">
<ul class="flex items-center -space-x-px h-10 text-base">
  <li>
    <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
      <span class="sr-only">Previous</span>
      <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
      </svg>
    </a>
  </li>
  <li>
    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
  </li>
  <li>
    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
  </li>
  <li>
    <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
  </li>
  <li>
    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
  </li>
  <li>
    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
  </li>
  <li>
    <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
      <span class="sr-only">Next</span>
      <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
      </svg>
    </a>
  </li>
</ul>
</nav>


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
   