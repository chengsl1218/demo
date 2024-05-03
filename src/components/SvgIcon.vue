<script setup lang="ts">
import { h, resolveComponent } from "vue";

const props = withDefaults(
  defineProps<{
    icon: string;
    size?: string | number;
    color?: string;
  }>(),
  {
    size: 16,
  }
);

// resolveComponent
const render = () => {
  if (props.icon) {
    return h(
      resolveComponent("el-icon"),
      {
        size: props.size,
        color: props.color,
      },
      () => h(resolveComponent(props.icon))
    );
  } else {
    return h("i");
  }
};
</script>

<template>
  <render />
  <!-- <el-icon :size="20">
    <Edit />
  </el-icon> -->
</template>

<style lang="scss" scoped></style>
