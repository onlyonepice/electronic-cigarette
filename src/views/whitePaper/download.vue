<template>
    <div class="page">
        <div class="downLoad-page">
            <div class="download-page-main">
                <img :src="iconFile" alt="">
                <div class="download-file" @click="downloadFile">下载文件</div>
            </div>

        </div>
        <!-- 引导页 -->
        <div class="steer-page" v-if="isDownLoad">
            <div class="step__one step">
                <div class="step__number">1</div>
                <div class="step__text">点击右上角</div>
                <img :src="iconMore" alt="" class="icon-more">
                <img :src="iconSteer" alt="" class="icon-steer">
            </div>
            <div class="step__two step">
                <div class="step__number">2</div>
                <div class="step__text">选择在浏览器中打开</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import iconMore from '@/assets/whitePaper/icon-more.png'
import iconSteer from '@/assets/whitePaper/icon_yindao.png'
import iconFile from '@/assets/whitePaper/icon_file_n.png'
const isDownLoad = ref(false)
const downloadFile = () => {
    var ua = navigator.userAgent.toLowerCase();
    var isWeiXin = ua.indexOf('micromessenger') != -1;
    if (isWeiXin) {
        isDownLoad.value = true
    } else {
        const link = document.createElement('a')
        link.href = `https://storageenergy.oss-cn-shanghai.aliyuncs.com/exhibition/%E3%80%8A2023%E4%B8%AD%E5%9B%BD%E6%96%B0%E5%9E%8B%E5%82%A8%E8%83%BD%E8%A1%8C%E4%B8%9A%E5%8F%91%E5%B1%95%E7%99%BD%E7%9A%AE%E4%B9%A6%EF%BC%9A%E6%9C%BA%E9%81%87%E4%B8%8E%E6%8C%91%E6%88%98%E3%80%8B.pdf`
        link.target = '_blank'
        link.download = '白皮书'
        link.style.display = 'none'
        document.body.append(link)
        link.click()
    }
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
</style>
  