export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/ety001/workspace/docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/steem-api/", { loader: () => import(/* webpackChunkName: "steem-api_index.html" */"/home/ety001/workspace/docs/docs/.vuepress/.temp/pages/steem-api/index.html.js"), meta: {"title":"Steem API"} }],
  ["/steem-js-sdk/", { loader: () => import(/* webpackChunkName: "steem-js-sdk_index.html" */"/home/ety001/workspace/docs/docs/.vuepress/.temp/pages/steem-js-sdk/index.html.js"), meta: {"title":"Steem JS SDK"} }],
  ["/steem-python-sdk/", { loader: () => import(/* webpackChunkName: "steem-python-sdk_index.html" */"/home/ety001/workspace/docs/docs/.vuepress/.temp/pages/steem-python-sdk/index.html.js"), meta: {"title":"Steem Python SDK"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/ety001/workspace/docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
