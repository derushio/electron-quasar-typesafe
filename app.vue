<template>
  <div>{{ result }}</div>
</template>

<script setup lang="ts">
const serverFn = useServerFunctions();

const result = ref(await serverFn.serverFunctionTest());
</script>
