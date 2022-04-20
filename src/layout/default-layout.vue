<template>
  <div class="c-layout">
    <div class="c-navbar">
      <Navbar />
    </div>
    <div class="o-container o-row">
      <div class="o-container__left-side o-col">
        <Sidebar />
      </div>
      <div class="o-container__right-side o-col">
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
<style lang="scss" scoped>
.c-layout {
  & .c-navbar {

  }
  & .o-container {
    &__left-side {

    }
    &__right-side {

    }
  }
}
</style>
