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
            <h1 class="text-3xl font-bold leading-tight">질의응답</h1>
          </div>
          <!-- 목록 버튼: Vue Router 사용 -->
          <router-link to="/board/freeboard" class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-none border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-4 mr-3 last:mr-0 mb-3 ml-auto text-sm">
            <span class="px-2">목록</span>
          </router-link>
        </section>
  
        <div class="rounded-2xl flex-col dark:bg-slate-300/70 bg-white flex">
          <div class="flex-1 p-6">
            <div>
              <p>작성자: 김유진</p>
              <div class="mt-4"></div>
            </div>
  
            <!-- 글 제목 및 내용 -->
            <div class="mb-2 last:mb-0">
              <label class="text-3xl font-bold leading-tight">vscode커밋하는</label>
              <div class="px-3 py-2 max-w-full">
                vscode커밋하는 방법
                <p>1. 브랜치에 들어가 새 분기 만들기 클릭</p>
                <p>2. 브랜치 이름 작성..</p>
                <p>3. ...?</p>
              </div>
            </div>
  
            <hr class="my-4 border-gray-300 dark:border-gray-600">
  
            <!-- 댓글 작성 -->
            <div class="mb-4 last:mb-0">
              <label for="comment" class="block font-bold mb-2">댓글 작성</label>
              <textarea id="comment" v-model="newComment" class="px-3 py-2 w-64 focus:ring focus:outline-none border-gray-700 rounded h-12 border bg-white dark:bg-slate-800 border-2" placeholder="댓글을 작성해주세요..."></textarea>
            </div>
            <button @click="submitComment" class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-none border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-4 mr-3 last:mr-0 mb-3 ml-auto text-sm">
              댓글 등록
            </button>
  
            <!-- 댓글 목록 -->
            <div class="mb-6 last:mb-0">
              <label class="block font-bold mb-2">댓글</label>
              <div class="space-y-4">
                <div v-for="(comment, index) in comments" :key="index" class="p-3 border rounded bg-gray-100 border-2 border-gray-300">
                  <p class="text-gray-800 font-semibold">{{ comment.author }}</p>
                  <p>{{ comment.date }}</p>
                  <p>{{ comment.text }}</p>
                </div>
              </div>
            </div>
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
        newComment: '', // 새 댓글 내용
        comments: [
          { author: '김무성', date: '2025-02-06', text: '좋은 정보 감사합니다!' },
          { author: '이우진', date: '2025-01-04', text: '브랜치 만드는 과정에 대해 더 알고 싶어요.' }
        ]
      };
    },
    methods: {
      submitComment() {
        // 새 댓글 제출
        if (this.newComment.trim()) {
          const newComment = {
            author: '사용자', // 동적으로 사용자 정보를 넣을 수 있음
            date: new Date().toISOString().split('T')[0], // 현재 날짜 (YYYY-MM-DD 형식)
            text: this.newComment
          };
          this.comments.push(newComment); // 댓글 배열에 새 댓글 추가
          this.newComment = ''; // 입력란 비우기
        }
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  