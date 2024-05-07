import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/layout/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/index/index.vue"),
        meta: {
          // 面包屑显示的内容
          title: "首页",
          // 菜单图标
          icon: "Menu",
          // 页面是否需要缓存 false为不缓存 true缓存
          cache: false,
          // 控制当前是否显示为菜单 false 为显示 true 为不显示
          hidden: false,
        },
      },
      {
        path: "/system",
        name: "System",
        redirect: "/system/menu",
        meta: {
          // 面包屑显示的内容
          title: "系统管理",
          // 菜单图标
          icon: "Menu",
        },
        children: [
          {
            path: "/system/menu",
            name: "SystemMenu",
            component: () => import("@/views/system/menu/index.vue"),
            meta: {
              // 面包屑显示的内容
              title: "菜单管理",
              // 菜单图标
              icon: "Menu",
              // 页面是否需要缓存 false为不缓存 true缓存
              cache: false,
              // 控制当前是否显示为菜单 false 为显示 true 为不显示
              hidden: false,
            },
          },
          {
            path: "/system/role",
            name: "SystemRole",
            component: () => import("@/views/system/role/index.vue"),
            meta: {
              // 面包屑显示的内容
              title: "角色管理",
              // 菜单图标
              icon: "Menu",
              // 页面是否需要缓存 false为不缓存 true缓存
              cache: false,
              // 控制当前是否显示为菜单 false 为显示 true 为不显示
              hidden: false,
            },
          },
          {
            path: "/system/user",
            name: "SystemUser",
            component: () => import("@/views/system/user/index.vue"),
            meta: {
              // 面包屑显示的内容
              title: "用户管理",
              // 菜单图标
              icon: "Menu",
              // 页面是否需要缓存 false为不缓存 true缓存
              cache: false,
              // 控制当前是否显示为菜单 false 为显示 true 为不显示
              hidden: false,
            },
          },
        ],
      },
      {
        path: "/goods",
        name: "Goods",
        redirect: "/goods/list",
        meta: {
          // 面包屑显示的内容
          title: "商品管理",
          // 菜单图标
          icon: "Menu",
        },
        children: [
          {
            path: "/goods/list",
            component: () => import("@/views/goods/list/index.vue"),
            name: "GoodsList",
            meta: {
              title: "商品管理",
              icon: "Menu",
              cache: false,
              hidden: false,
            },
          },
          {
            path: "/goods/category",
            component: () => import("@/views/goods/category/index.vue"),
            name: "GoodsCategory",
            meta: {
              title: "商品管理",
              icon: "Menu",
              cache: false,
              hidden: false,
            },
          },
        ],
      },
      {
        path: "/usian",
        name: "Usian",
        component: () => import("@/views/link/index.vue"),
        meta: {
          title: "积云教育",
          icon: "Menu",
          cache: false,
          hidden: false,
        },
      },
      {
        path: "/401",
        name: "NoPermission",
        component: () => import("@/views/error/401.vue"),
        meta: {
          title: "401页面",
          icon: "Menu",
          cache: true,
          hidden: true,
        },
      },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/error/404.vue"),
        meta: {
          title: "未找到此页面",
          icon: "Menu",
          cache: true,
          hidden: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: dynamicRoutes,
});

export default router;
