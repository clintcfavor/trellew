<template>
  <div class="c-card">
    <div class="o-card__blank is-blank" v-if="isBlankCard"></div>
    <div class="c-card__tag d-flex">
      <span v-for="tag in data.tagCount" :key="tag">
        <span class="c-card__tag-color mr-2"></span>
      </span>
    </div>
    <div class="c-card__image" v-if="data.hasImage">
      <img src="../assets/bossu4.png" />
    </div>
    <div class="c-card__image is-blank" v-if="!data.hasImage">
      <div class="o-card__blank" v-if="isBlankCard"></div>
    </div>
    <CardFooter
      v-if="showFooter"
      :assigneeCount="data.assigneeCount"
      :attachedFileCount="data.attachedFileCount"
      :isWatching="data.isWatching"
      :hasDescription="data.hasDescription"
      :checkList="data.checkList"
      :dateCreated="data.dateCreated"
    />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, reactive } from 'vue';
import type { PropType } from 'vue';
import type { ICard } from '@/data/store';
import CardFooter from '@/components/card-footer.vue';

export default defineComponent({
  name: 'Card',
  components: {
    CardFooter,
  },
  props: {
    card: {
      type: Object as PropType<ICard>,
      required: true,
    },
  },
  setup(props) {
    const data = reactive(props.card);
    const showFooter = computed(() => {
      return (
        data.isWatching || data.assigneeCount > 0 || data.attachedFileCount > 0 || data.checkList || data.dateCreated || data.hasDescription
      );
    });
    const isBlankCard = computed(() => {
      return showFooter && data.tagCount === 0 && !data.hasImage;
    });
    return { data, showFooter, isBlankCard };
  },
});
</script>
<style lang="scss" scoped>
.c-card {
  display: flex;
  background: #fff;
  margin-bottom: 0.5rem;
  flex-direction: column;
  padding: 0.75rem;
  box-shadow: 0 1px 2px #adadad;
  border-radius: 0.25rem;
  &__image {
    display: flex;
    justify-content: center;
    height: 20rem;
    margin-top: 1.25rem;
    img {
      height: 100%;
    }
  }
  &__image.is-blank {
    height: 2rem;
    width: 10rem;
    & .o-card__blank {
      width: 100%;
    }
  }
  &__tag-color {
    display: block;
    background: rgb(103, 128, 238);
    border-radius: 25px;
    width: 2rem;
    height: 0.5rem;
  }
}
</style>
