<template>
  <div class="c-layout t-min-vh-100 d-flex flex-column flex-grow-1">
    <Navbar />
    <div class="o-container o-row flex-grow-1">
      <div class="o-container__left-side o-col">
        <Sidebar />
      </div>
      <div class="o-container__right-side d-flex o-col flex-grow-1">
        <Board />
      </div>
    </div>
  </div>
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
<style lang="scss">
@import '../assets/base.css';
.o-container {
  &__left-side {
    background: linear-gradient(180deg, #715e91, #5a8ae3);
    padding: 0.5rem;
    width: 4.3%;
  }
  &__right-side {
    background: linear-gradient(45deg, #8687f3, #8687f3, #fc75a3, #fea8d7);
  }
}
</style>
