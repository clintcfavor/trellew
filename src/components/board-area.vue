<template>
  <div class="c-board-area c-board-area d-flex flex-column flex-grow-1">
    <p>Board Area</p>
    <Canvas v-for="canvas in canvases" :key="canvas.id" :canvas="canvas" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Canvas from '@/components/canvas.vue';
import { Store } from '@/data/store';

export default defineComponent({
  name: 'BoardArea',
  components: {
    Canvas,
  },
  setup() {
    const store = new Store();
    const canvases = ref(store.GetCanvases());
    console.log('CANVASES: ', canvases);
    return { canvases };
  },
});
</script>
<style scoped></style>
