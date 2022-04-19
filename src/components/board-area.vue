<template>
  <div class="c-board-area">
    <p>Board Area</p>
    <Canvas />
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
