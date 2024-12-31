<template>
    <tr @click="navigate" class="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
      <td class="px-6 py-4">{{ post.id }}</td>
      <td class="px-6 py-4">{{ post.name }}</td>
      <td class="px-6 py-4">{{ post.title }}</td>
      <td class="px-6 py-4">{{ post.Creationdate }}</td>
      <!-- <td class="px-6 py-4">{{ post.Size }}</td>
      <td class="px-6 py-4">{{ post.view }}</td> -->
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
    index: {
      type: Number,
      required: true
    }
  });
  
  const router = useRouter();
  
  const navigate = () => {
    router.push('/board/bbboard');
  };
  </script>
  
  <style scoped>
  /* Add any necessary styles here */
  </style>