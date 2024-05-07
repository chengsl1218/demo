<script setup lang="ts">
// import LayoutAside from "./layoutAside/index.vue";
// import LayoutHeader from "./layoutHeader/index.vue";
// import LayoutMain from "./layoutMain/index.vue";

import { defineAsyncComponent } from "vue";
// 异步加载
const LayoutAside = defineAsyncComponent(
  () => import("./layoutAside/index.vue")
);
const LayoutHeader = defineAsyncComponent(
  () => import("./layoutHeader/index.vue")
);
const LayoutMain = defineAsyncComponent(() => import("./layoutMain/index.vue"));
</script>

<template>
  <el-container>
    <LayoutAside></LayoutAside>
    <el-container>
      <LayoutHeader></LayoutHeader>
      <LayoutMain></LayoutMain>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss"></style>
