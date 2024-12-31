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
//   if (content.value.length < 5) {
//     alert('글 내용은 최소 5자 이상이어야 합니다.');
//     console.log("내용: "+content.value);
//     return;
//   }

  if (previousRoute.value) {
    router.push(previousRoute.value.fullPath);
  } 
  else {
    router.go(-1); 
  }
};

const content_count = ref(null);

const add_content = () => {
    content_count.value = content_count.value+1;
}
</script>

<template>

    <div style="background-color: whitesmoke;"
      class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
  
      <div>
        <!-- 여기에 공지사항 내용 -->
        <section class="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
          <div class="py-8 px-4 mx-auto max-w-screen-lg lg:py-16 w-full">
            <div class="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-xl dark:bg-gray-800 p-8 space-y-8">
              <h2 class="text-3xl font-semibold text-center text-gray-900 dark:text-white">
                커리큘럼 등록
              </h2>
  
              <div class="mb-5">
                <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">교과목</label>
                <input type="text" id="large-input" v-model="title"
                  class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
  
              <form @submit.prevent="submitForm" class="space-y-6">
                <div v-for="count in content_count" :key="count" class="border border-gray-300 p-4 rounded-lg mb-4">
                    <!-- 텍스트 입력 필드 -->
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">내용</label>
                        <input type="text" id="content" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="교과목 내용"  />
                    </div> 
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">시작 날짜</label>
                            <input type="text" id="start_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="YYYY-MM-DD"  />
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">종료 날짜</label>
                            <input type="text" id="ex_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="YYYY-MM-DD"  />
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" @click="add_content"
                        class="px-5 py-3 text-base font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mx-auto flex items-center justify-center">
                        <svg class="w-4 h-4 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        내용 추가
                    </button>
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
  
<style scoped>
/* 필요에 따라 추가 스타일링 */
</style>
  