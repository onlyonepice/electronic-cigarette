<template>
  <div class="page">
    <div class="downLoad-page">
      <div class="download-page-main">
          <img :src="iconFile" alt="">
          <div class="download-file" @click="downloadFile">复制文件地址</div>
      </div>

    </div>
    <div v-if="showToast" class="showToast">链接复制成功，请在外部浏览器打开链接</div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import iconFile from '@/assets/whitePaper/icon_file_n.png'
const showToast = ref(false)
const downloadFile = () => {
  var aux = document.createElement("input");
  aux.setAttribute("value", 'https://eesa-mini-app.oss-rg-china-mainland.aliyuncs.com/mini-app/secondExhibition-3.0/member-handbook-document.pdf');
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 2000);
}
</script>
<style lang="scss" scoped>
.page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .steer-page {
      background: rgba(0, 0, 0, 0.7);
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      position: absolute;
      top: 0;
      padding: 11rem;
      padding-left: 16rem;
      z-index: 20;

      .step {
          display: flex;
          justify-self: start;
          align-items: center;
          position: relative;
          margin-bottom: 8rem;

          .step__number {
              width: 4.5rem;
              height: 4.5rem;
              background: #0681FC;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 3rem;
              color: #FFFFFF;
              margin-right: 2rem;
          }

          .step__text {
              font-size: 3.2rem;
              color: #FFFFFF;
              margin-right: 2rem;
          }

          .icon-more {
              width: 8rem;
              height: 8rem;
          }

          .icon-steer {
              position: absolute;
              right: -7rem;
              top: -10rem;
              width: 17rem;
              height: 15rem;
          }
      }
  }

  .downLoad-page {
      width: 100vw;
      height: 100vh;
      display: flex;
      background: linear-gradient(184deg, #F3F8FE 0%, #C8E7FF 100%);

      .download-page-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 0 4.3rem;
          margin-top: 23.1rem;
          img {
              width: 22.7rem;
              height: 18.8rem;
          }
          .download-file {
              width: 100%;
              height: 7.3rem;
              background: #0681FC;
              border-radius: 6rem;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 13rem;
              color: #fff;
              cursor: pointer;
          }
      }

  }
}
.showToast{
  width: 40rem;
  height: 10rem;
  line-height: 3.6rem;
  padding: 4rem;
  // padding: 12rem;
  border-radius: 1.8rem;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 99;
  font-size: 3rem;
  color: rgba(255,255,255,1);
  text-align: center;
  display: flex;
  align-items: center;
}
</style>
