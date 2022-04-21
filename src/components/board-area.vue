<template>
  <div class="c-board-area d-flex flex-row">
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
<style scoped>
.c-board-area {
  padding: 0.5rem 0;
}
</style>
