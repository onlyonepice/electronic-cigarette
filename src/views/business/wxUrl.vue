<template>
  <div class="go-to-wx-app">
    <div class="app__container">
      <img class="app__container__head__banner" :src="headBanner" alt="">
      <div class="app__container__info">
        <img class="head_sculpture" :src="headSculpture" alt="">
        <div class="app__container__info__title">
          储能展
        </div>
        <div class="app__container__info__text">
          2023年8月30日-9月1日，由EESA储能领跑者联盟主办的EESA第二届中国国际储能展览会将荣耀亮相苏州国际博览中心。作为目前中国乃至整个亚洲区最聚焦的储能展览会，储能领跑者联盟特打造了线上一体化数字平台，助力更多资源对接及信息互通，为打造一体化的储能全产业链生态圈，我们集中展示了展览会中核心企业相关信息，同期配套相关活动及服务，欢迎入驻“储能展”小程序，赢得无限商机！
        </div>
        <div class="app__container__info__btn">
          <a :href="linkUrl"><button>前往体验</button></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid'
import { generateScheme } from '@/api/user'
import { onMounted, ref } from 'vue'
import { useRoute } from "vue-router";
import headBanner from '@/assets/mobileTerminal/head_banner.png'
import headSculpture from '@/assets/mobileTerminal/head_sculpture.png'
const route = useRoute()
onMounted(()=>{
  ( route.query.code !== '' ) && (location.href = 'https://wxaurl.cn/' + route.query.code);
  // interScheme()
})
const linkUrl = ref<any>(null)
// async function interScheme() {
//   let res: any = await generateScheme({choseShowInfo: 4, randomStr: uuidv4(), timeStamp: +new Date()})
//   console.log('获取链接',res)
//   if (res.resp_code === 0 && res.datas.errcode === 0) {
//     linkUrl.value = res.datas.openlink
//     try {
//       window.location.href = res.datas.openlink
//       return
//     }
//     catch (e) {
//       const link = document.createElement('a')
//       link.href = res.datas.openlink
//       link.target = '_blank'
//       link.click()
//     }
//   }
// }
</script>
<style lang="scss" scoped>
.go-to-wx-app {
  background-color: #f0f2f5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  .app__container{
    margin: 0 auto;
    background-color: #FFF;
    height: 100%;
    max-width: 750px;
    min-width: 375px;
    overflow-y: auto;
    .app__container__head__banner {
      width: 100%;
    }
    .app__container__info {
      position: relative;
      background: #FFF;
      background-color: #fff;
      border-radius: 4px 4px 0px 0px;
      padding: calc(100%/375*20) calc(100%/375*24);
      .head_sculpture {
        top: 0;
        position: absolute;
        left: calc(100%/375*24);
        width: calc(100%/375*80);
        transform: translate(0,-20%);
      }
      .app__container__info__title{
        height: 28px;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        color: rgba(0,0,0,0.9);
        margin-left: calc(100%/327*96);
      }
      .app__container__info__text{
        margin-top: 11.07%;
        font-size: 14px;
        font-weight: 400;
        color: rgba(0,0,0,0.6);
        line-height: 22px;
      }
      .app__container__info__btn{
        text-align: center;
        margin-top: 14.07%;
        button{
          width: 280px;
          height: 40px;
          color: #FFF;
          border-radius: 4px;
          background: #143F98;
        }
      }
    }
  }
}
</style>
