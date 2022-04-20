<template>
  <div class="c-navbar">
    <div class="c-navbar__left">
      <div class="c-navbar__candy-box-icon"></div>
      <div class="c-navbar__home-icon"></div>
      <div class="c-navbar__search-bar">
        <div class="c-search__search-icon"></div>
      </div>
    </div>
    <div class="c-navbar__logo-icon"></div>
    <div class="c-navbar__right">
      <div class="c-navbar__add-icon"></div>
      <div class="c-navbar__notice-icon"></div>
      <div class="c-navbar__alert-icon"></div>
      <div class="c-navbar__user-icon"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
});
</script>
<style lang="scss" scoped>
.c-navbar {
}
</style>
