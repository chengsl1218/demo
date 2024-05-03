<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string;
    size?: string | number;
    color?: string;
  }>(),
  {
    size: 16,
  }
);
</script>

<template>
  <el-icon :size="size" :color="color">
    <component :is="icon"></component>
  </el-icon>
</template>

<style lang="scss" scoped></style>
