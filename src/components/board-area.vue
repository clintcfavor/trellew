<template>
  <div class="c-board-area c-board-area d-flex flex-column flex-grow-1">
    <p>Board Area</p>
    <Canvas />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Canvas from '@/components/canvas.vue';
export default defineComponent({
  name: 'BoardArea',
  components: {
    Canvas,
  },
});
</script>
<style scoped></style>
