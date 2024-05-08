<template>
    <!-- <div> -->
        <el-aside width="200px" class="layout-aside">
            <Logo></Logo>
            <Menu></Menu>
        </el-aside>
    <!-- </div> -->
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const Logo = defineAsyncComponent(() => import('./Logo.vue'))
const Menu = defineAsyncComponent(() => import('./Menu.vue'))



</script>

<style scoped>

</style>