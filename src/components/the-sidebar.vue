<template>
  <div class="c-sidebar">
    <div class="c-sidebar__company-icon"><img class="w-100" src="../assets/company-logo.jpg" /></div>
    <div class="c-sidebar__expand d-flex align-items-center justify-content-center my-4"><i class="fas fa-angles-right t-btn bg-transparent"></i></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
});
</script>
<style lang="scss" scoped>
.c-sidebar {
  &__company-icon {
    img {
      border-radius: 0.25rem;
    }
  }
}
</style>