<template>
  <p>Board</p>
  <BoardHeader />
  <BoardArea />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import BoardHeader from '@/components/board-header.vue';
import BoardArea from '@/components/board-area.vue';
export default defineComponent({
  name: 'Board',
  components: {
    BoardHeader,
    BoardArea,
  },
});
</script>
<style scoped></style>
