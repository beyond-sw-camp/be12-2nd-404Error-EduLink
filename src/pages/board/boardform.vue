<template>
  <div style="background-color: whitesmoke;"
  class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
    <div class="flex z-30 items-center flex-col justify-center overflow-hidden fixed inset-0" v-show="isOverlayVisible">
      <div
        class="overlay absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700">
      </div>
    </div>
  
    <section class="p-6 xl:max-w-6xl xl:mx-auto">
      <section class="mb-6 flex items-center justify-between">
        <div class="flex items-center justify-start">
          <span
            class="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023" />
            </svg>
          </span>
          <h1 class="text-3xl leading-tight">글작성</h1>
        </div>
        


      </section>
  
      <div class="rounded-2xl flex-col dark:bg-slate-900/70 bg-white flex">
        <div class="flex-1 p-6">
          <div class="mb-6 last:mb-0">
            <label class="block font-bold mb-2">제목</label>
            <input v-model="formData.title" type="text"
              class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800">
          </div>
  
          <div class="mb-6 last:mb-0">
            <label class="block font-bold mb-2">카테고리</label>
            <select v-model="formData.category"
              class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800">
              <option value="자유">자유</option>
              <option value="공지사항">공지사항</option>
              <option value="테스트">테스트</option>
            </select>
          </div>
  
          <div class="mb-6 last:mb-0">
            <label class="block font-bold mb-2">내용</label>
            <textarea v-model="formData.content"
              class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-24 border bg-white dark:bg-slate-800"
              placeholder="글을 작성해주세요...."></textarea>
          </div>
        </div>
  
        <footer class="p-6">
          <div class="flex items-center justify-start flex-wrap -mb-3">
            <button @click="submitPost"
              class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3">
              <span class="px-2">게시</span>
            </button>
            <button @click="saveDraft"
              class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3">
              <span class="px-2">임시저장</span>
            </button>
          </div>
        </footer>
      </div>
    </section>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const isOverlayVisible = ref(false);
  
  const formData = ref({
    title: '',
    category: '자유',
    content: '',
  });
  
  const goToList = () => {
    router.push('/board/managerboard');
  };
  
  const submitPost = () => {
    // Implement API call to submit the post
    console.log('게시물 제출:', formData.value);
  };
  
  const saveDraft = () => {
    // Save the draft locally or via an API call
    console.log('임시 저장:', formData.value);
  };
  </script>
  
  <style scoped>
  .z-30 {
    z-index: 30;
  }
  </style>
  