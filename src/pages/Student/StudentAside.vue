<script setup>

const menuToggle = document.getElementById('menu-toggle');
const aside = document.getElementById('aside');

// 버튼 클릭 이벤트 추가
menuToggle.addEventListener('click', () => {
  aside.classList.toggle('hidden'); // 'hidden' 클래스를 토글하여 보이기/숨기기
});

</script>

<template>
  <aside id="aside"
        class="lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden -left-60 lg:left-0 lg:hidden xl:flex">
        <div class="aside lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900 bg-slate-900">
            <div class="aside-brand flex flex-row h-14 items-center justify-between dark:bg-slate-900 bg-slate-800 text-white">
                <div class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0"><b
                        class="font-black">EduLink</b></div><button class="hidden lg:inline-block xl:hidden p-3"><span
                        class="inline-flex justify-center items-center w-6 h-6"><svg viewBox="0 0 24 24" width="16"
                            height="16" class="inline-block">
                            <path fill="currentColor"
                                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">
                            </path>
                        </svg></span></button>
            </div>
            <nav class="flex-1 px-4 py-6 space-y-2">
        <a
          href="/bootcampInfo"
          class="block py-2  text-white px-3 rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:text-white">
          부트캠프
        </a>
        <!--  <a
          href="/student-assignments"
          class="block py-2 px-3 text-white rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:text-white">
          Assignments
        </a> -->
        <a
          href="/board/freeboard"
          class="block py-2 px-3 text-white rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:text-white">
          게시판
        </a> 
        <a
            data-modal-target="popup-modal" data-modal-toggle="popup-modal"
          class="block py-2 px-3 text-white rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:text-white">
          출석하기
        </a><a
            data-modal-target="popup-modal1" data-modal-toggle="popup-modal1"
          class="block py-2 px-3 text-white rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:text-white">
          퇴실하기
        </a><a
            data-modal-target="popup-modal2" data-modal-toggle="popup-modal2"
          class="block py-2 px-3 text-white rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:text-white">
          휴가 신청
        </a><a
            data-modal-target="popup-modal3" data-modal-toggle="popup-modal3"
          class="block py-2 px-3 text-white rounded-md text-gray-700 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:text-white">
          조퇴 신청
        </a>


 
            
      </nav>
            <ul>
                <li>
                    <a href="/"
                        class="flex cursor-pointer py-3 border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600"><span
                            class="inline-flex justify-center items-center w-16 h-6 flex-none">
                            <svg viewBox="0 0 24 24"
                                width="18" height="18" class="inline-block">
                                <path fill="currentColor"
                                    d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z">
                                </path>
                            </svg>
                        </span>
                        <span class="grow text-ellipsis line-clamp-1 pr-12">Logout</span><!--v-if-->
                    </a><!--v-if-->
                </li>
            </ul>
        </div>
    </aside>
</template>
