import comp from "/home/ety001/workspace/docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroText\":\"Steem Documentation\",\"tagline\":\"The Documentation for the Steem Blockchain\",\"actions\":[{\"text\":\"Steem Whitepaper\",\"link\":\"/whitepaper/\",\"type\":\"primary\"},{\"text\":\"Steem Bluepaper\",\"link\":\"/bluepaper/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Steem JS SDK\",\"link\":\"/steem-js-sdk/\",\"details\":\"The JavaScript SDK for the Steem Blockchain\"},{\"title\":\"Steem Python SDK\",\"link\":\"/steem-python-sdk/\",\"details\":\"The Python SDK for the Steem Blockchain\"},{\"title\":\"Steem API\",\"link\":\"/steem-api/\",\"details\":\"The API for the Steem Blockchain\"}],\"footer\":\"MIT Licensed | Copyright © 2016 Steemit, Inc.\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
