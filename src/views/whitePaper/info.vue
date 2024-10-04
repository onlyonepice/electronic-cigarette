<template>
  <div class="white-page">
    <div class="white-info">
      <div class="info__content animate__animated animate__fadeInDown">
        <div class="info-content__item" v-for="(formDataItem, formDataIndex) in formData.value" :key="formDataIndex">
          <div class="info-content-item__label">
            <span>*</span>
            {{ formDataItem.label }}
          </div>
          <div class="info-content-item__value register__body__userInfo animate__animated animate__fadeIn">
            <field v-model="userInfo[`${formDataItem.value}`]" :type="formDataItem.type" placeholder="请输入"
              :maxlength="formDataItem.value === 'phone' ? 11 : null" />
          </div>
        </div>
      </div>
      <div class="info__confirm animate__animated animate__fadeInUp" :class="btnStatus ? 'has-receive' : 'no-receive'"
        @click="infoConfirm">一键领取</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import { Field, showToast } from 'vant';
import { regMobile, regEmail } from '@/utils/validate'
import { frontCreateInfo } from '@/api/user'
import { useRouter } from "vue-router";
const btnStatus = ref(false)
const userInfo = ref({
  company: '',
  name: '',
  position: '',
  industry: '',
  email: '',
  phone: ''
})
watch(
  () => userInfo.value,
  (val) => {
    if (Object.values(val).every(arrItem => arrItem !== "")) {
      btnStatus.value = true
    }
    if (Object.values(val).some(arrItem => arrItem === "")) {
      btnStatus.value = false
    }
  }, {
  deep: true
}
)
const router = useRouter()
const formData = reactive({
  value: [
    {
      label: '姓名',
      value: 'name',
      require: true,
      type: 'text'
    },
    {
      label: '公司名称',
      value: 'company',
      require: true,
      type: 'text'
    },
    {
      label: '所属行业',
      value: 'industry',
      require: true,
      type: 'text'
    },
    {
      label: '职位',
      value: 'position',
      require: true,
      type: 'text'
    },
    {
      label: '联系电话',
      value: 'phone',
      require: true,
      type: 'number'
    },
    {
      label: '邮箱',
      value: 'email',
      require: true,
      type: 'text'
    }
  ]
})
const infoConfirm = async () => {
  if (btnStatus.value) {
    console.log(userInfo.value);
    if (!regMobile.test(userInfo.value.phone)) {
      showToast('手机号码输入错误，请重新输入')
      return false
    }
    if (!regEmail.test(userInfo.value.email)) {
      showToast('邮箱输入错误，请重新输入')
      return false
    }
    try {
      const res = await frontCreateInfo(userInfo.value)
      if (res['resp_code'] === 0) {
        router.push('/whiteDownload')
      } else {
        showToast('信息提交失败， 请重新输入')
      }
    } catch (error) {
      showToast('信息提交失败， 请重新输入')
      return false
    }
  }
}
</script>
<style lang="scss" scoped>
.info__confirm {
  width: 65.4rem;
  height: 8rem;
  border-radius: 4rem;
  font-size: 2.8rem;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 8rem;
  text-align: center;
  margin: 4.8rem auto 0;
}

.has-receive {
  background: #0681FC;
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-receive {
  background: #B2D4FF;
  display: flex;
  align-items: center;
  justify-content: center;
}

.white-page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .white-info {
    padding: 1.5rem 1rem;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(184deg, #C8E7FF 0%, #F3F8FE 100%);

    .info__content {
      width: 68.6rem;
      background: #FFFFFF;
      border-radius: 1.6rem;
      margin: 0 auto;
      padding: 0 3.2rem;
      margin-top: 3.2rem;

      .info-content__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.1rem solid rgba(219, 226, 234, 1);
        padding: 1rem 0;
        height: 9.6rem;

        .info-content-item__label {
          span {
            color: #FF2E2E;
          }

          font-size: 2.8rem;
          font-weight: 600;
          color: #1C232F;
        }

        .info-content-item__value {
          font-size: 2.8rem;
          font-weight: 600;
          color: #1C232F;

          :deep(.van-field) {
            padding: 0;
            background: #fff;
            font-weight: 500;

            input {
              border: 0.1rem solid transparent;
              border-radius: 0.8rem;
              padding: 1rem 0 1rem 3.2rem;
              text-align: right;
              color: #1C232F;
              font-size: 2.8rem;

              &:focus {
                background: #fff;
              }
            }
          }
          :deep(.van-field).errorBorder {
            input {
              border: 0.1rem solid #FF4D4F !important;
            }
          }
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
