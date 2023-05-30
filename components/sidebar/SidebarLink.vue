<template>
  <q-item clickable @click="onClick">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label v-if="caption !== ''" caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    caption?: string;
    link?: string;
    icon?: string;
  }>(),
  {
    caption: '',
    link: '#',
    icon: '',
  },
);

const emits = defineEmits<{
  (e: 'click'): void;
}>();

function onClick() {
  location.href = props.link;
  emits('click');
}
</script>
