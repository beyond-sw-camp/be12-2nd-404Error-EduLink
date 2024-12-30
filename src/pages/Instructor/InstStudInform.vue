<script setup>

</script>

<template>
    <div style="background-color: whitesmoke;"
    class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
        <section class="p-6 xl:max-w-6xl xl:mx-auto bg-gray-100 dark:bg-gray-900">
            <div class="flex">
                <!-- Card 0 -->
                <div class="w-full md:w-1/2 p-4 flex flex-col">
                    <div class="flex items-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 flex-grow">
                        <img class="w-16 h-16 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Student Image">
                        <div>
                        <p class="text-xl font-bold text-gray-800 dark:text-gray-100">John Doe</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Email: johndoe@example.com</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Phone no.: 123-4567-8901</p>
                    </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 w-1/2 p-4 bg-gray-100 dark:bg-gray-900">
                    <!-- Card 1 -->
                    <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
                        <div>
                        <p class="text-sm font-medium text-gray-500">출석</p>
                        <p class="text-2xl font-bold text-gray-800">0</p>
                        </div>
                        <div class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-10 text-primary dark:text-accent" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
                        <div>
                        <p class="text-sm font-medium text-gray-500">남은 휴가</p>
                        <p class="text-2xl font-bold text-gray-800">0</p>
                        </div>
                        <div class="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h11M9 21l-6-6 6-6m6 6h6" />
                        </svg>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
                        <div>
                        <p class="text-sm font-medium text-gray-500">지각</p>
                        <p class="text-2xl font-bold text-gray-800">0</p>
                        </div>
                        <div class="flex items-center justify-center w-10 h-10 bg-pink-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h11M9 21l-6-6 6-6m6 6h6" />
                        </svg>
                        </div>
                    </div>

                    <!-- Card 4 -->
                    <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
                        <div>
                        <p class="text-sm font-medium text-gray-500">조퇴</p>
                        <p class="text-2xl font-bold text-gray-800">0</p>
                        </div>
                        <div class="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h11M9 21l-6-6 6-6m6 6h6" />
                        </svg>
                        </div>
                    </div>

                    <!-- Card 5 -->
                    <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
                        <div>
                        <p class="text-sm font-medium text-gray-500">외출</p>
                        <p class="text-2xl font-bold text-gray-800">0</p>
                        </div>
                        <div class="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h11M9 21l-6-6 6-6m6 6h6" />
                        </svg>
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
                        <div>
                        <p class="text-sm font-medium text-gray-500">조퇴</p>
                        <p class="text-2xl font-bold text-gray-800">0</p>
                        </div>
                        <div class="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h11M9 21l-6-6 6-6m6 6h6" />
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-8 bg-gray-100 dark:bg-gray-900">
                <h1 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">게시판</h1>
                <div class="overflow-x-auto shadow-lg rounded-lg">
                    <table class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 uppercase text-xs">
                        <tr>
                            <th scope="col" class="px-6 py-4">제목</th>
                            <th scope="col" class="px-6 py-4">글쓴이</th>
                            <th scope="col" class="px-6 py-4">카테고리</th>
                            <th scope="col" class="px-6 py-4">작성 일자</th>
                            <th scope="col" class="px-6 py-4 text-right">
                                <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">더보기</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Row 1 -->
                        <tr class="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">애플 맥북 프로 17"</td>
                            <td class="px-6 py-4">홍길동</td>
                            <td class="px-6 py-4">랩탑</td>
                            <td class="px-6 py-4">2024-01-01</td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">글보기</a>
                            </td>
                        </tr>
                        <!-- Row 2 -->
                        <tr class="bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">마이크로소프트 서피스 프로</td>
                            <td class="px-6 py-4">김철수</td>
                            <td class="px-6 py-4">랩탑 PC</td>
                            <td class="px-6 py-4">2024-01-02</td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">글보기</a>
                            </td>
                        </tr>
                        <!-- Row 3 -->
                        <tr class="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">매직 마우스 2</td>
                            <td class="px-6 py-4">이영희</td>
                            <td class="px-6 py-4">액세서리</td>
                            <td class="px-6 py-4">2024-01-03</td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">글보기</a>
                            </td>
                        </tr>
                        <!-- Additional Rows -->
                        <tr class="bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">매직 키보드</td>
                            <td class="px-6 py-4">박지민</td>
                            <td class="px-6 py-4">액세서리</td>
                            <td class="px-6 py-4">2024-01-04</td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">글보기</a>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            <div class="p-8 bg-gray-100 dark:bg-gray-900">
                <h1 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">과제 현황</h1>
                <ol class="relative border-s border-gray-200 dark:border-gray-700 p-6 bg-white rounded-lg shadow-lg" style="margin-left: 40px;">
                    <li class="mb-10 ms-6">
                    <span
                        class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900 dark:text-blue-300">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-800 dark:text-white">
                        Flowbite Application UI v2.0.0
                        <span
                            class="bg-blue-100 text-blue-600 text-xs font-medium ms-2 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Latest</span>
                    </h3>
                    <time class="block mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                        Released on January 13th, 2022
                    </time>
                    <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and
                        pre-order E-commerce & Marketing pages.
                    </p>
                    <a href="#"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <svg class="w-4 h-4 me-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path
                                d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg>
                        Download ZIP
                    </a>
                    </li>

                    <li class="mb-10 ms-6">
                    <span
                        class="absolute flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900 dark:text-green-300">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-800 dark:text-white">Flowbite Figma v1.3.0</h3>
                    <time class="block mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">Released on December 7th,
                        2021</time>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        All of the pages and components are first designed in Figma and we keep a parity between the two
                        versions even as we update the project.
                    </p>
                    </li>
                </ol>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>