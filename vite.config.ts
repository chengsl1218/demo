import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [vue(), vueJsx()],
    base: "./",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      // 端口号
      port: 8888,
      // 自动打开浏览器
      open: true,
      // 主机名
      host: "localhost",
      // 解决跨域
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target:
            "https://mock.mengxuegu.com/mock/66384848cab9671f88bd2f1e/api",
          changeOrigin: true,
          rewrite: (path) => path.replace(/`^${env.VITE_APP_BASE_API}`/, ""),
        },
        // "/dev-api": {
        //   target: "http://localhost:7777",
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/dev-api/, ""),
        // },
      },
    },
  };
});
