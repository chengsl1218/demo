<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div>hello</div>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>

  <Edit style="width: 1em; height: 1em; margin-right: 8px" />
  <Share style="width: 1em; height: 1em; margin-right: 8px" />
  <Delete style="width: 1em; height: 1em; margin-right: 8px" />
  <Search style="width: 1em; height: 1em; margin-right: 8px" />

  <el-icon :size="20">
    <Edit />
  </el-icon>
  <el-icon color="#409efc" class="no-inherit">
    <Share />
  </el-icon>
  <el-icon>
    <Delete />
  </el-icon>
  <RouterView />
</template>

<style scoped lang="scss">
div {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
