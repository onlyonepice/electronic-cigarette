<template>
  <div class="video">
    <video
      id="my-video"
      class="video-js"
      controls
      preload="auto"
      poster=""
      autoplay
      muted
    >
      <source :src="Video" type="video/mp4" />
    </video>
    <div class="text-description">
      <h1>Grand Opening Celebration Event Details</h1>
      <span>To celebrate the grand opening of the cloudPuff website, we’re offering an exclusive deal you won’t want to miss! For the entire first month, enjoy 50% off all e-cigarette products, plus free shipping on every order.
      </span>
      <span>But that’s not all! We’re also launching our Affiliate Program. Become one of our affiliates and earn up to 20% commission on every successful referral, helping you generate extra income with ease.
      </span>
      <h2>Event Highlights:</h2>
      <p>• 50% off sitewide – unbeatable prices for top-quality products!</p>
      <p>• Free shipping nationwide – no extra costs!</p>
      <p>• Become an affiliate and enjoy 20% commission on every sale!</p>
      <h2>Event Duration: </h2>
      <p>Starting now and lasting for the first month of our opening</p>
      <h2>Affiliate Commission Details: </h2>
      <p>Sign up today and start earning with every sale!</p>
    </div>
    <van-floating-bubble icon="chat" @click="onSubmit" />
    <img class="page-bottom" :src="PageBottom" alt="">
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import Video from "@/assets/video/video.mp4";
import PageBottom from "@/assets/img/page-bottom.png";
const username = ref('');
const password = ref('');
const onSubmit = (values) => {
  console.log('submit', values);
};
console.log("1");
</script>
<style lang="scss" scoped>

.video-js {
  width: 100vw;
  height: 42rem;
}
.text-description {
  padding: 0 2rem;
  margin: 2rem 0;
  h1 {
    font-weight: 600;
    font-size: 3rem;
    margin-bottom: 1.2rem;
  }
  span {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }
  p {
    font-size: 2.4rem;
    line-height: 2.8rem;
    margin-left: 1.2rem;
  }
  h2 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3rem;
    margin: 1.2rem 0;
  }
}
.page-bottom {
  width: 100vw;
  object-fit: contain;
}
</style>
