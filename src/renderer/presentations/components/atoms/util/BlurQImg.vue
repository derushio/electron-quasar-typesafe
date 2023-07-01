<template>
  <div class="overflow-hidden">
    <q-img
      :src="src"
      :fit="fit"
      :position="position"
      :ratio="ratio"
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
        margin: '-1px',
      }"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  src?: string;
  fit?: 'fill' | 'cover' | 'contain' | 'none' | 'scale-down' | undefined;
  position?: string;
  ratio?: number;
  effectClass?: string;
}>();
props;

// const emit = defineEmits<{}>();
// emit;
</script>
