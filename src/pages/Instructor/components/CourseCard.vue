<script setup></script>

<template>
    <!-- Card 1 -->
    <div class="rounded-lg shadow-md bg-white border-l-4 border-blue-500 p-4 flex flex-col justify-between min-w-[250px] max-w-[300px]">
        <h3 class="font-semibold text-lg text-slate-800"> 기반 기술</h3>
        <div class="mt-4 relative h-2 bg-gray-200 rounded">
            <div class="absolute top-0 left-0 h-full bg-blue-500 rounded" style="width: 25%;"></div>
        </div>
        <div class="flex justify-between items-center mt-2">
            <span class="text-blue-500 font-medium">Advanced</span>
            <a href="#" class="text-blue-500 hover:text-blue-600" @click="toggleDrawer">→</a>
        </div>
    </div>
</template>

<style scoped></style>