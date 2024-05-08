<template>
    <div>
        <el-container class="layout-container">
            <!-- <el-container> -->
                <LayoutAside></LayoutAside>
                <el-container direction="vertical">
                    <LayoutHeader></LayoutHeader>
                    <LayoutMain></LayoutMain>
                </el-container>
            <!-- </el-container> -->
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';
const LayoutAside = defineAsyncComponent(() => import('./layoutAside/index.vue'))
const LayoutHeader = defineAsyncComponent(() => import('./layoutHeader/index.vue'))
const LayoutMain = defineAsyncComponent(() => import('./layoutMain/index.vue'))


</script>

<style scoped lang="scss"></style>