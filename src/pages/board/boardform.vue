<template>
  <div style="background-color: whitesmoke;" class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
    <section class="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div class="py-8 px-4 mx-auto max-w-screen-lg lg:py-16 w-full">
        <div class="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-xl dark:bg-gray-800 p-8 space-y-8">
          <h2 class="text-3xl font-semibold text-center text-gray-900 dark:text-white">글 작성</h2>

          <!-- 제목 입력 필드 -->
          <div class="mb-5">
            <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">제목</label>
            <input type="text" id="large-input" v-model="title" required
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>

        
              <!-- 파일 업로드 필드 -->
              <div>
                <label for="user_avatar"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">첨부파일</label>
                <input id="user_avatar" name="user_avatar" type="file"
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
              </div>
        

          <!-- 게시판 유형 선택 -->
          <div class="mb-5">
            <label class="block text-sm font-medium text-gray-900 dark:text-white">게시판 유형</label>
            <div class="flex space-x-4">
              <div>
                <input type="radio" id="freeboard" value="freeboard" v-model="boardType" name="boardType" class="mr-2" />
                <label for="freeboard" class="text-sm text-gray-900 dark:text-white">자유게시판</label>
              </div>
              <div>
                <input type="radio" id="notice" value="notice" v-model="boardType" name="boardType" class="mr-2" />
                <label for="notice" class="text-sm text-gray-900 dark:text-white">공지사항</label>
              </div>
            </div>
          </div>

          <!-- 게시글 내용 -->
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="content" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">글 내용</label>
              <textarea id="content" v-model="content" minlength="5" required
                class="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 focus:outline-none"
                placeholder="글을 작성해주세요..." rows="6"></textarea>
            </div>

            <!-- 게시글 제출 버튼 -->
            <div>
              <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                게시
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useBoardStore } from '@/stores/useBoardStore';
import { useMemberStore } from '@/stores/useMemberStore';
import axios from 'axios';

const boardStore = useBoardStore();
const memberStore = useMemberStore();
const router = useRouter();
const route = useRoute();

const title = ref('');
const content = ref('');
const boardIdx = ref(route.params.boardIdx);
const boardType = ref(''); // 게시판 유형
const userInfo = ref(null); // 사용자 정보 저장

// 사용자 정보 불러오기
const fetchUserInfo = async () => {
  try {
    if (!memberStore.email) {
      console.warn("로그인 정보 없음");
      return;
    }

    const response = await axios.get(`/api/user/info?email=${memberStore.email}`);
    userInfo.value = response.data;
    console.log("사용자 정보:", userInfo.value);
  } catch (error) {
    console.error("사용자 정보를 불러오는 중 오류 발생:", error);
  }
};

// 게시글 등록 함수
const submitForm = async (event) => {
  event.preventDefault();

  if (content.value.length < 5) {
    alert('글 내용은 최소 5자 이상이어야 합니다.');
    return;
  }

  try {
    const postData = {
      title: title.value,
      content: content.value,
      boardType: boardType.value,
      userEmail: userInfo.value?.email, // 작성자 이메일 추가
    };

    // 게시글 등록 API 호출
    await boardStore.getRegister(boardType.value, postData);
    console.log('게시글 등록 완료');
    navigateBack();
  } catch (error) {
    console.error('게시글 등록 실패:', error);
  }
};

// 이전 페이지로 이동 또는 기본 이동 처리
const navigateBack = () => {
  if (route.query.prev) {
    router.push(route.query.prev);
  } else {
    router.go(-1);
  }
};

onMounted(async () => {
  await boardStore.getBoardList('freeboard,notice'); 
  
});
const registerBoard = async () => {
  const boardData = {
    title: '새로운 게시글',
    content: '내용 작성',
  };
  await boardStore.getRegister('freeboard,notice', boardData);
  router.push(`/board/list/${boardType.value}`);
};
</script>

<style scoped>
/* 필요에 따라 추가 스타일링 */
</style>
