<script setup lang="ts">
import { RouterView } from "vue-router";
import axios from "axios";
const handleClick = async () => {
  const res = await axios.request({
    url: " https://mock.mengxuegu.com/mock/66384848cab9671f88bd2f1e/api/focus",
    method: "GET",
  });

  console.log("Res==>", res);
};

// import { h } from "vue";
// type   props  children
// const vnode = h("div", { class: "test" }, ["hello", h("span", "456")]);
</script>

<template>
  <!-- <vnode /> -->

  <SvgIcon icon="Edit" size="18" color="blue" @click="handleClick" />
  <!-- <div>hello</div>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button> -->

  <!-- <div id="hello"></div> -->

  <!-- const vnode = {
    type : "div",
    props : {
      id : "hello"
    },
    children : [
    ]
  } -->

  <!-- <Edit style="width: 1em; height: 1em; margin-right: 8px" />
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
  </el-icon> -->
  <!-- 
  常规封装 render封装 jsx

  <svg-icon icon="elid" size="" color=""></svg-icon> -->
  <RouterView />
</template>

<style scoped lang="scss"></style>
