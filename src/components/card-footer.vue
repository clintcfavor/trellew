<template>
  <div v-if="props.isWatching">I'm Watching</div>
  <div v-if="props.checkList">checkbox: {{ props.checkList.checkedCount }}/{{ props.checkList.total }}</div>
  <div v-if="props.attachedFileCount > 0">attached file count: {{ props.attachedFileCount }}</div>
  <div v-if="props.hasDescription">Has Description</div>
  <div v-if="props.dateCreated">{{ props.dateCreated.toDateString() }}</div>
  <div v-if="assigneeCount > 0">assignee count: {{ props.assigneeCount }}</div>
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
