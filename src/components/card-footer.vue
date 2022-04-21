<template>
  <div class="c-footer">
    <div class="c-footer__description" v-if="props.hasDescription"><i class="fas fa-align-left mr-2"></i></div>
    <div class="c-footer__watching c-footer__watching--is-watching" v-if="props.isWatching"><i class="fas fa-eye mr-2"></i></div>
    <div class="c-footer__checklist" v-if="props.checkList"><i class="fas fa-square-check"></i> {{ props.checkList.checkedCount }}/{{ props.checkList.total }}</div>
    <div class="c-footer__attach" v-if="props.attachedFileCount > 0"><i class="fas fa-paperclip mr-1"></i> {{ props.attachedFileCount }}</div>
    <div v-if="props.dateCreated">{{ props.dateCreated.toDateString() }}</div>
    <div class="c-footer__assignee" v-if="assigneeCount > 0">
      <div class="c-footer__icon" v-for="user in props.assigneeCount" :key="user">
        <img class="w-100" src="../assets/bossu1.png">
      </div>
    </div>
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
  methods: {
    random: function() {
      return "../assets/bossu1.png";
    }
  }
});
</script>
<style lang="scss">
.c-footer {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  &__assignee {
    display: flex;
    flex-direction: row;
    margin-left: auto;
  }
  &__description {
    transform: scaley(-1);
  }
  &__icon {
    width: 2rem;
    margin-left: .25rem;
    clip-path: circle(40%);
  }
}
</style>