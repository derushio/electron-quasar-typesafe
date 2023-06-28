<template>
  <div>
    <q-img
      :src="src"
      :fit="fit"
      :style="{
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 1,
      }"
    />
    <div
      :class="`absolute-full ${effectClass}`"
      :style="{
        zIndex: 2,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  src?: string;
  fit?: 'fill' | 'cover' | 'contain' | 'none' | 'scale-down' | undefined;
  effectClass?: string;
}>();
props;

// const emit = defineEmits<{}>();
// emit;
</script>
