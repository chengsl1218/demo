<template>
    <div>
        <el-menu active-text-color="#ffd04b"
         background-color="transparent"
            :default-active="$route.path" 
            :default-openeds="['/system']" 
            router>
            <el-menu-item index="/home">
                <svg-icon icon="HomeFilled"></svg-icon>
                <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="/system">
                <template #title>
                    <svg-icon icon="Setting"></svg-icon>
                    <span>系统管理</span>
                </template>
                <el-menu-item index="/system/menu">
                    <svg-icon icon="IceCream"></svg-icon>
                    <span>菜单管理</span>
                </el-menu-item>
                <el-menu-item index="/system/user">
                    <svg-icon icon="User"></svg-icon>
                    <span>用户管理</span>
                </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/goods">
                <template #title>
                    <svg-icon icon="Goods"></svg-icon>
                    <span>商品管理</span>
                </template>
                <el-menu-item index="/goods/list">
                    <svg-icon icon="GoodsFilled"></svg-icon>
                    <span>商品列表</span>
                </el-menu-item>
                <el-menu-item index="/goods/category">
                    <svg-icon icon="Operation"></svg-icon>
                    <span>商品分类</span>
                </el-menu-item>
                
            </el-sub-menu>
            <el-menu-item index="/usian">
                    <svg-icon icon="Link"></svg-icon>
                    <span>积云官网</span>
                </el-menu-item>
                <el-menu-item index="/401">
                    <svg-icon icon="warning"></svg-icon>
                    <span>401页面</span>
                </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>