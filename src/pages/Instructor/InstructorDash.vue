<script setup>
import { ref } from 'vue';
import CourseCard from './components/CourseCard.vue';
import TableHw from './components/TableHw.vue';
import TableData from './components/TableData.vue';
import UserCard2 from './components/UserCard2.vue';

import { onMounted } from 'vue';
import { useInstructorStore } from '../../stores/useInstructorStore';

const instructorStore = useInstructorStore();

onMounted(async () => {
    await instructorStore.fetchStudent()
    console.log(instructorStore.student_list)
});

const studentCount = ref(5);
</script>

<template>
    <div style="background-color: whitesmoke;"
    class="xl:pl-60 pt-14 min-h-screen w-full transition-position bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
        <section class="p-6 xl:max-w-6xl xl:mx-auto">
            <div class="flex flex-col mb-6 bg-white rounded-lg p-4 shadow-md">
                <div class="mb-4 flex justify-between items-center">
                <h2 class="text-xl font-semibold text-gray-800 dark:text-white">커리큘럼</h2>
                <button type="button" class="text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-300 focus:outline-none dark:focus:ring-blue-600 flex items-center">
                        Create
                        <svg class="w-4 h-4 text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </button>
                </div>
                <div class="flex flex-wrap gap-4">
                    <CourseCard v-for="student in studentCount" :key="student" class="mb-4"></CourseCard>
                </div>
            </div>
            <div class="flex flex-col mb-6 bg-white rounded-lg p-4 shadow-md">
                <div class="mb-4 flex justify-between items-center">
                <h2 class="text-xl font-semibold text-gray-800 dark:text-white">과제 목록</h2>
                <button type="button" class="text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-300 focus:outline-none dark:focus:ring-blue-600 flex items-center">
                    Create
                    <svg class="w-4 h-4 text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    </button>
                </div>
                <TableHw></TableHw>  
            </div>
            <div class="flex flex-col mb-6 bg-white rounded-lg p-4 shadow-md">
                <div class="mb-4 flex justify-between items-center">
                <h2 class="text-xl font-semibold text-gray-800 dark:text-white">자료 목록</h2>
                <button type="button" class="text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-300 focus:outline-none dark:focus:ring-blue-600 flex items-center">
                    Create
                    <svg class="w-4 h-4 text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    </button>
                </div>
                <TableData></TableData>  
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mb-4 bg-white rounded-lg p-2 shadow-md">
                <UserCard2
                    v-for="student in instructorStore.student_list"
                    :student="student"
                ></UserCard2>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>