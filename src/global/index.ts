// 引入element plus全局注册
import registerElementPlus from "./registerElementPlus";
// 引入element plus icon 全局注册
import registerElementPlusIcon from "./registerElementPlusIcon";

import type { App } from "vue";

// 全局注册
export const setRegisterGlobal = (app: App) => {
  app.use(registerElementPlus);
  app.use(registerElementPlusIcon);
};
