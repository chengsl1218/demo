<script setup lang="ts">
import { defineAsyncComponent } from "vue";
// 侧边栏组件
const LayoutAside = defineAsyncComponent(
  () => import("./layoutAside/index.vue")
);
// 头部组件
const LayoutHeader = defineAsyncComponent(
  () => import("./layoutHeader/index.vue")
);
// 主体内容组件
const LayoutMain = defineAsyncComponent(() => import("./layoutMain/index.vue"));
</script>

<template>
  <el-container class="layout-container">
    <LayoutAside></LayoutAside>
    <el-container direction="vertical">
      <LayoutHeader></LayoutHeader>
      <LayoutMain></LayoutMain>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss"></style>
