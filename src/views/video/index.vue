<template>
  <div class="invite">
    <div class="invite-head">LOST MARY</div>
    <div class="invite-title">
      <h1>MT15000 TURBO</h1>
      <h2>Double the Power,Go Turbo!</h2>
    </div>
    <video class="invite-video" controls preload="auto" poster="" autoplay muted>
      <source :src="Video" type="video/mp4" />
    </video>
    <div class="invite-option">
      <div @click="onUrl()">Smooth Mode</div>
      <div @click="onCode()">Turbo Mode</div>
    </div>
    <div class="invite-special-title">EXCLUSIVE DEAL</div>
    <div class="invite-special-text">
      <p>Grand Opening Celebration Event Details</p>
      <span>To celebrate the grand opening of the cloudPuff website, we’re offering an exclusive deal you won’t want to miss! For the entire first month, enjoy 50% off all e-cigarette products, plus free shipping on every order. But that’s not all! We’re also launching our Affiliate Program. Become one of our affiliates and earn up to 20% commission on every successful referral, helping you generate extra income with ease.</span>
      <p>Event Highlights:</p>
      <span point>50% off sitewide – unbeatable prices for top-quality products!</span>
      <span point>Free shipping nationwide – no extra costs!</span>
      <span point>Become an affiliate and enjoy 20% commission on every sale!</span>
      <span>To celebrate the grand opening of the cloudPuff website, we’re offering an exclusive deal you won’t want to miss! For the entire first month, enjoy 50% off all e-cigarette products, plus free shipping on every order. But that’s not all! We’re also launching our Affiliate Program. Become one of our affiliates and earn up to 20% commission on every successful referral, helping you generate extra income with ease.</span>
      <p>Event Duration:</p>
      <span>Starting now and lasting for the first month of our opening Affiliate Commission Details: Sign up today and start earning with every sale!</span>
    </div>
    <div class="invite-special-title" width="29">RANKING LIST</div>
    <div class="invite-ranking">
      <div class="invite-ranking-head">
        <p>Serial Number</p>
        <p>Profile Picture</p>
        <p>Winning Amount</p>
      </div>
      <div v-for="item in 5" :key="item" class="invite-ranking-body">
        <p>{{ item }}</p>
        <img src="" alt="">
        <p>$100.00</p>
      </div>
    </div>
    <div class="invite-special-title" width="26">Contact Us</div>
    <div class="invite-connectUs">
      <div>Phone: </div>
      <div>Address: </div>
    </div>
  </div>
  <Popup v-model:show="showCenter" round :style="{ padding: '64px' }" >
    <div class="invite-code">
      <h2>请扫描二维码</h2>
      <img src="@/assets/img/connect-us.png" alt=""/>
    </div>
  </Popup>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import Video from "@/assets/video/video.mp4";
import ConnectLeft from "@/assets/img/connect-left.png";
import ConnectRight from "@/assets/img/connect-right.png";
import { Popup } from 'vant';
const showCenter: Ref<boolean> = ref(false); // 弹窗
const onUrl = () => {
  window.open("https://www.cloudpuff.org", "externalWindow");
};
const onCode = () => {
  showCenter.value = true;
};
</script>
<style lang="scss" scoped>
@import "@/style/mixin.scss";

.invite {
  background: #181819;
  width: 100%;
  padding: 7rem 0;
}
.invite-head {
  width: 67.4rem;
  height: 6.6rem;
  background: linear-gradient( 90deg, #FF4545 0%, #7935EE 100%);
  margin: 0 auto;
  font-family: PangMenZhengDao, PangMenZhengDao;
  padding: 1rem 0 0.8rem 2.4rem;
  @include font(4rem, 700, #FFFFFF, 4rem);
}
.invite-title {
  margin: 3.6rem auto 4.6rem;
  text-align: center;
  h1 {
    @include font(6rem, 700, #FFFFFF, 5.2rem);
  }
  h2 {
    @include font(2.6rem, 500, #FFFFFF, 5.2rem);
  }
}
.invite-video {
  @include widthAndHeight(100%, 49.2rem);
}
.invite-option {
  width: 67.4rem;
  @include flex(center, space-between, nowrap);
  margin: 0 auto;
  div {
    @include widthAndHeight(31rem, 23.6rem);
    @include flex(center, center, nowrap);
  }
  div:nth-of-type(1) {
    background-image: url("@/assets/img/connect-left.png");
    background-size: 100% 100%;
    @include font(3.6rem, 400, #000000, 3.6rem);
  }
  div:nth-of-type(2) {
    background-image: url("@/assets/img/connect-right.png");
    background-size: 100% 100%;
    @include font(3.6rem, 400, #FFFFFF, 3.6rem);
  }
}
.invite-special-title {
  @include widthAndHeight(30.8rem, 4rem);
  @include relative();
  margin: 7.8rem auto 6.6rem;
  @include font(3.6rem, 700, #ffffff, 3.6rem);
  &::before {
    @include widthAndHeight(2.4rem, 2.8rem);
    border: 0.6rem solid #7D30E9;
    content: "";
    display: inline-block;
    @include absolute(1, none, none, 0, -3rem);
    border-right: 2px solid rgba(255, 255, 255, 0);
    border-top: 2px solid rgba(255, 255, 255, 0);
  }
  &::after {
    @include widthAndHeight(2.4rem, 2.8rem);
    border: 0.6rem solid #7D30E9;
    content: "";
    display: inline-block;
    @include absolute(1, 0, -2rem, none, none);
    border-left: 2px solid rgba(255, 255, 255, 0);
    border-bottom: 2px solid rgba(255, 255, 255, 0);
  }
}
.invite-special-title[width="29"] {
  width: 25rem;
  &::after {
    @include absolute(1, 0, -3.6srem, none, none);
  }
}
.invite-special-title[width="26"] {
  width: 20rem;
  &::after {
    @include absolute(1, 0, -1.6rem, none, none);
  }
}
.invite-special-text {
  padding: 6rem 3rem;
  width: 67.4rem;
  margin: 0 auto;
  background: #000000;
  p {
    @include font(2.8rem, 400, #ffffff, 4.4rem);
    margin-bottom: 1.4rem;
  }
  span {
    @include font(2.6rem, 200, rgba(255,255,255,0.6), 4.8rem);
    @include relative();
    padding-left: 2rem;
    display: block;
  }
  span[point] {
    &::before {
      @include widthAndHeight(1rem, 1rem);
      content: "";
      display: inline-block;
      background-color: #7D30E9;
      border-radius: 100%;
      @include absolute(1, 1.8rem, none, none, 0);
    }
  }
}
.invite-ranking {
  width: 67.6rem;
  margin: 0 auto;
  background: #000000;
  padding-bottom: 5.6rem;
  .invite-ranking-head {
    background: linear-gradient( 90deg, #FF4545 0%, #7935EE 100%);
    border-radius: 2rem 2rem 0px 0px;
    @include flex(center, space-between, nowrap);
    padding: 0.2rem 3.8rem;
    @include font(2.4rem, 400, #FFFFFF, 4.8rem);
  }
  .invite-ranking-body {
    @include flex(center, space-between, nowrap);
    text-align: center;
    height: 11rem;
    margin-top: 4.8rem;
    padding-bottom: 4.8rem;
    padding: 0 3.8rem;
    p:nth-of-type(1){
      width: 16rem;
      @include font(2.4rem, 400, #FFFFFF, 4.8rem);
    }
    img {
      @include widthAndHeight(11rem, 11rem);
      border-radius: 100%;
    }
    p:nth-of-type(2) {
      width: 18.4rem;
      @include font(2.8rem, 400, #FF4545, 4.8rem);
    }
  }
}
.invite-connectUs {
  padding: 7.6rem 4.2rem;
  background-color: #000000;
  width: 67.4rem;
  margin: 0 auto;
  div {
    @include widthAndHeight(59rem, 10rem);
    background: #EEE6FD;
    border-radius: 2rem;
    padding: 2.6rem 3.2rem;
    @include font(2.6rem, 400, #000000, 4.8rem);
    margin: 0 auto;
    &:nth-of-type(1) {
      margin-bottom: 4.8rem;
    }
  }
}
.invite-code {
  text-align: center;
  h2 {
    font-size: 4rem;
    font-weight: 600;
  }
  img {
    @include widthAndHeight(30rem, 30rem);
    margin-top: 3rem;
  }
}
</style>
