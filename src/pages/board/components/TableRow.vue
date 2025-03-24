<template>
  <tr @click="navigate" class="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
    <td>{{ post.idx }}</td>
    <td>{{ post.writer }}</td>
    <td>{{ post.title }}</td>
    <td>{{ formatDate(post.createdDate) }}</td>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const router = useRouter();

const navigate = () => {
  console.log('navigate to post', props.post.idx);
  router.push(`/board/read/${props.post.idx}`);
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  const d = new Date(dateString);
  return d.toLocaleDateString();
};
</script>
