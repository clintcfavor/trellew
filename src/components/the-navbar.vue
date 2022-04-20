<template>
  <div class="c-navbar">
    <div class="c-navbar__left">
      <div class="c-navbar__candy-box-icon t-btn"><i class="fas fa-bars"></i></div>
      <div class="c-navbar__home-icon t-btn"><i class="fas fa-house"></i></div>
      <div class="c-navbar__search-bar">
        <div class="c-search__search-icon"><i class="fas fa-search"></i></div>
      </div>
    </div>
    <div class="c-navbar__logo-icon"><img src="../assets/Trello-Logo.png" /></div>
    <div class="c-navbar__right">
      <div class="c-navbar__add-icon t-btn"><i class="fas fa-plus"></i></div>
      <div class="c-navbar__notice-icon t-btn"><i class="fas fa-circle-exclamation"></i></div>
      <div class="c-navbar__alert-icon t-btn"><i class="fas fa-bell"></i></div>
      <div class="c-navbar__user-icon"><img class="w-100" src="../assets/bossu1.png" /></div>
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
  display: flex;
  flex-direction: row;
  background: linear-gradient(45deg, #866cb4, #ae33a3, #d88fa3);
  padding: 0 0.25rem;

  &__left {
    display: flex;
  }
  &__search-bar {
    border-radius: 0.25rem;
    width: 15rem;
    border: 0;
    padding: 0.6rem;
    margin: 0.25rem;
    font-size: 1.25rem;
    color: #fff;
    background-color: #01b8d9;
    text-align: right;
  }
  &__logo-icon {
    display: flex;
    align-items: center;
    margin: 0 auto;
    img {
      width: 6rem;
    }
  }

  &__right {
    display: flex;
  }

  &__user-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 34px;
    border: 0;
    margin: 0.25rem;
    clip-path: circle(40%);
  }
}
</style>
