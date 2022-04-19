<template>
  <div>
      <p>Canvas</p>
      <card />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/card.vue';
export default defineComponent({
  name: 'Canvas',
  components: {
    Card,
  },
});
</script>
<style scoped></style>
