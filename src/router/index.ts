import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/video',
    name: 'Video',
    component: () => import("@/views/video/enter.vue"),
    meta: {
      title: '开业狂欢活动详情'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (typeof (to.meta?.title) === 'string') {
    document.title = to.meta?.title;
  }
  next()
})
// 判断是否有 code , 有 code 的值就返回
function GetRequest(queryName) {
  const reg = new RegExp("(^|&)" + queryName + "=([^&*])(&|$)", "i");
  const i = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURI(r[2]);
  } else {
    return null;
  }
}

export default router
