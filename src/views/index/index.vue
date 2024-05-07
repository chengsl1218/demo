<script lang="ts" setup>
import { getList } from "@/api/test";
const handleClick = async () => {
  const res = await getList();
  console.log("res=>", res);
};
</script>
<template>
  <div @click="handleClick">index</div>
</template>

<style scoped lang="scss"></style>
