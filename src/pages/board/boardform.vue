<template>

  <div style="background-color: whitesmoke;"
    class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">

    <div>
      <!-- 여기에 공지사항 내용 -->
      <section class="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div class="py-8 px-4 mx-auto max-w-screen-lg lg:py-16 w-full">
          <div class="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-xl dark:bg-gray-800 p-8 space-y-8">
            <h2 class="text-3xl font-semibold text-center text-gray-900 dark:text-white">
              글 작성
            </h2>

            <div class="mb-5">
              <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">제목</label>
              <input type="text" id="large-input" v-model="title" required
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- 파일 업로드 필드 -->
              <div>
                <label for="user_avatar"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">첨부파일</label>
                <input id="user_avatar" name="user_avatar" type="file"
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
              </div>

              <!-- 텍스트 입력 필드 -->
              <div>
                <label for="content" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">글 내용</label>
                <textarea id="content" name="content" v-model="content" minlength="5" required
                  class="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 focus:outline-none"
                  placeholder="글을 작성해주세요..." rows="6"></textarea>
              </div>

              <!-- 제출 버튼 -->
              <div>
                <button type="submit"
                  class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  게시
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    
  </div>
</template>

<script>


export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.previousRoute = from;
    });
  }
};
</script>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const previousRoute = ref(null);

const title = ref('');
const content = ref('');

const submitForm = () => {
  if (content.value.length < 5) {
    alert('글 내용은 최소 5자 이상이어야 합니다.');
    console.log("내용: "+content.value);
    return;
  }

  if (previousRoute.value) {
    router.push(previousRoute.value.fullPath);
  } 
  else {
    router.go(-1); 
  }
};
</script>

<style scoped>
/* 필요에 따라 추가 스타일링 */
</style>
