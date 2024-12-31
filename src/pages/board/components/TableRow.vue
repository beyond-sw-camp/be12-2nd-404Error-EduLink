<template>
    <tr @click="navigate" class="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
      <td v-for="(column, index) in columns" :key="index" class="px-6 py-4">
        {{ post[column.field] }}
      </td>
    </tr>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';
  
  const props = defineProps({
    post: {
      type: Object,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
  });
  
  const router = useRouter();
  
  const navigate = () => {
    router.push('/board/bbboard');
  };
  </script>
  
  <style scoped>
  
  </style>