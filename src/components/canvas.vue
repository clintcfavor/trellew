<template>
  <div class="c-canvas">
    <div class="c-canvas__top">
      <h6 class="c-canvas__title m-0">{{ title }}</h6>
      <div class="c-canvas__more-options"><i class="fas fa-ellipsis"></i></div>
    </div>
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
<style lang="scss" scoped>
.c-canvas {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: #ebecf0;
  border-radius: 0.25rem;
  margin-right: 0.75rem;
  padding: 0.75rem;
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    padding: 0.25rem;
    font-weight: 700;
  }
}
</style>
