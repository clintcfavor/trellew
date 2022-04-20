<template>
  <div class="c-board d-flex flex-grow-1 flex-column">
    <BoardHeader />
    <BoardArea />
  </div>
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
<style lang="scss" scoped>
.c-board {
  padding: 0.25rem 0.75rem;
}
</style>
