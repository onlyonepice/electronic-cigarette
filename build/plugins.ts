import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import removeConsole from "vite-plugin-remove-console";

export function getPluginsList(
) {
  return [
    vue(),
    // jsx、tsx语法支持
    vueJsx(),
    // 线上环境删除console
    removeConsole({ external: ["src/assets/iconfont/iconfont.js"] }),
  ];
}
