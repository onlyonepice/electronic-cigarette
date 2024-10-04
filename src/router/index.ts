import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/register',
    name: 'register',
    component: () => import("@/views/register.vue"),
    meta: {
      title: 'iReport智能云报告'
    }
  },
  {
    path: '/whitePaper',
    name: 'whitePaper',
    component: () => import("@/views/whitePaper/index.vue"),
    meta: {
      title: ''
    }
  },
  {
    path: '/joinTheEnergyStorageClub',
    name: 'joinTheEnergyStorageClub',
    component: () => import("@/views/whitePaper/joinTheEnergyStorageClub.vue"),
    meta: {
      title: '加入储能俱乐部'
    }
  },
  {
    path: '/whiteInfo',
    name: 'whiteInfo',
    component: () => import("@/views/whitePaper/info.vue"),
    meta: {
      title: '白皮书下载通道限时开放'
    }
  },
  {
    path: '/whiteDownload',
    name: 'whiteDownload',
    component: () => import("@/views/whitePaper/download.vue"),
    meta: {
      title: '下载文件'
    }
  },
  {
    path: '/miniAppDownload',
    name: 'miniAppDownload',
    component: () => import("@/views/whitePaper/miniAppDownload.vue"),
    meta: {
      title: '下载文件'
    }
  },
  {
    path: '/wxUrl',
    name: 'wxUrl',
    component: () => import("@/views/business/wxUrl.vue"),
    meta: {
      title: '打开小程序'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (typeof (to.meta?.title) === 'string') {
    document.title = to.meta?.title;
  }
  const code = true;
  const openid = localStorage.getItem("openId") || "";	// 有 openid 则不用再获取权限
  if (!openid) {
    if (!code) {
      const path = encodeURIComponent(`https://activity.innoempower.com${to.fullPath}`);
      const newURL = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5be55c1c9992ac2f&redirect_uri=${path}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
      window.location.replace(newURL);
    } else {
      next()
    }
  } else {
    next();
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
