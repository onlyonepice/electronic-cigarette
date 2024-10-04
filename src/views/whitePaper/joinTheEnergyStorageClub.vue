<template>
  <div class="white-paper-audience-handbook">
    <img
      class="img-background"
      src="@/assets/whitePaperAndAudienceHandbook/img-background.png"
      alt=""
    >
    <div class="container">
      <div class="container-head">
        <img class="img-title" src="@/assets/whitePaperAndAudienceHandbook/img-title.png" alt="">
        <img class="img-QR-code" src="@/assets/whitePaperAndAudienceHandbook/img-QR-code.png" alt="">
      </div>
      <div class="container-body">
        <img class="img-content" src="@/assets/whitePaperAndAudienceHandbook/img-content.png" alt="">
      </div>
      <div class="container-footer">
        <img class="img-QR-code" src="@/assets/whitePaperAndAudienceHandbook/img-QR-code.png" alt="">
        <p class="footer-title">观展手册、白皮书、一手展会资讯</p>
        <p class="footer-subtitle">扫码添加小助手获取</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.white-paper-audience-handbook{
  width: 100%;
  position: relative;
  background-color: #000938;
  .img-background{
    width: 100%;
  }
  .container{
    overflow: hidden;
    padding: 0 3.75rem;
    position: absolute;
    top: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    .container-head{
      margin-top: 24.6rem;
      position: relative;
      .img-title{
        width: 100%;
        height: 22.25rem;
      }
      .img-QR-code{
        position: absolute;
        width: 16.25rem;
        height: 16.25rem;
        right: 1.25rem;
        top: 12.25rem;
      }
    }
    .container-body{
      .img-content{
        width: 100%;
      }
    }
    .container-footer{
      margin-top: 3.75rem;
      text-align: center;
      .img-QR-code{
        width: 16.25rem;
      }
      .footer-title{
        margin-top: 2.5rem;
        color: #fff;
        font-weight: 500;
      }
      .footer-subtitle{
        margin-top: 2.5rem;
        color: #f3823d;
        font-weight: 400;
      }
    }
  }
}
</style>