// 引入element-plus icon图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import type { App } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";

export default {
  install: (app: App) => {
    // 全局注册element-plus icon图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
    // 全局注册svg-icon组件
    app.component("SvgIcon", SvgIcon);
  },
};
