<template>
  <p>LAYOUT</p>
  <Navbar />
  <Sidebar />
  <Board />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/the-navbar.vue';
import Sidebar from '@/components/the-sidebar.vue';
import Board from '@/views/board.vue';
export default defineComponent({
  components: {
    Navbar,
    Sidebar,
    Board,
  },
});
</script>
<style scoped></style>
