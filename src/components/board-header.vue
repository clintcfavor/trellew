<template>
  <div class="c-board__header d-flex align-items-center">
    <div class="c-board-header__switcher t-btn d-flex align-items-center">
      <i class="fas fa-align-left rotate-90 mr-5"></i>
      <i class="fas fa-angle-down font-xs"></i>
    </div>
    <div class="c-board-header__board-name">
      <h1 class="font-h5 m-0">Bossu XCorp</h1>
    </div>
    <div class="c-board-header__favorite t-btn">
      <i class="fas fa-star"></i>
    </div>
    <div class="vertical-separator"></div>
    <div class="c-board-header__organization-name t-btn">Bossu, Inc. ™˜šœ</div>
    <div class="vertical-separator"></div>
    <div class="c-board-header__users"></div>
    <div class="c-board-header__invite t-btn font-xxs">Invite</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BoardHeader',
});
</script>
<style lang="scss">
.c-board-header {
  &__switcher, &__favorite {
    height: 84%;
  }

  &__invite {
    font-size: 11rem;
  }

  &__board-name {
    padding: 0 1rem;
    color: #fff;
  }
}
</style>
