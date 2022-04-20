<template>
  <div class="c-card">
    <div v-if="isBlankCard">BLANK CARD</div>
    <h4>tag count: {{ data.tagCount }}</h4>
    <h4 v-if="data.hasImage">Has image</h4>
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
<style scoped></style>
