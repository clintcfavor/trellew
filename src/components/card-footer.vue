<template>
  <div class="c-footer">
    <div class="c-footer__watching is-watching" v-if="props.isWatching"><i class="fas fa-eye mr-1"></i></div>
    <div class="c-footer__checklist" v-if="props.checkList"><i class="fas fa-square-check mr-1"></i> {{ props.checkList.checkedCount }}/{{ props.checkList.total }}</div>
    <div class="c-footer__attach" v-if="props.attachedFileCount > 0"><i class="fas fa-paperclip mr-1"></i> {{ props.attachedFileCount }}</div>
    <div v-if="props.hasDescription">Has Description</div>
    <div v-if="props.dateCreated">{{ props.dateCreated.toDateString() }}</div>
    <div v-if="assigneeCount > 0">assignee count: {{ props.assigneeCount }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { ICheckbox } from '@/data/store';
export default defineComponent({
  name: 'CardFooter',
  props: {
    assigneeCount: {
      type: Number,
      required: true,
    },
    attachedFileCount: {
      type: Number,
      required: true,
    },
    isWatching: {
      type: Boolean,
      required: true,
    },
    hasDescription: {
      type: Boolean,
      required: true,
    },
    dateCreated: {
      type: Object as PropType<Date>,
      defaultValue: undefined,
    },
    checkList: {
      type: Object as PropType<ICheckbox>,
      defaultValue: undefined,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>
<style lang="scss">
.c-footer {
  display: flex;
  flex-direction: row;
}
</style>