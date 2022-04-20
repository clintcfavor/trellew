<template>
  <div class="c-canvas">
    <p>{{ title }}</p>
    <Card v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { PropType } from 'vue';
import type { ICanvas } from '@/data/store';
import Card from '@/components/card.vue';
export default defineComponent({
  name: 'Canvas',
  components: {
    Card,
  },
  props: {
    canvas: {
      type: Object as PropType<ICanvas>,
      required: true,
    },
  },
  setup(props) {
    const cards = ref(props.canvas?.cards ?? []);
    const title = ref(props.canvas?.title);
    return { title, cards };
  },
});
</script>
<style scoped></style>
