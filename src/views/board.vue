<template>
  <div class="c-board">
    <div class="c-board__header">
      <BoardHeader />
    </div>
    <div class="c-board__area">
      <BoardArea />
    </div>
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
<style lang="scss" scoped></style>
