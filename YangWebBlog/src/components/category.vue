<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params);
</script>

<template>
  <div>
    {{ route.params.category }}
  </div>
</template>

<style scoped lang="scss"></style>
