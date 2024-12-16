import { CodeTabs } from "/home/ety001/workspace/docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.66_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_mxdtxbgydx5wj5wezsowj22w6u/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/ety001/workspace/docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.66_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_mxdtxbgydx5wj5wezsowj22w6u/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/ety001/workspace/docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.66_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_mxdtxbgydx5wj5wezsowj22w6u/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
