<template>
  <div class="register">
    <img class="register__bg animate__animated animate__fadeInDown" :src="registerBg" alt="">
    <template v-if="registerSuccess">
      <div class="register__body animate__animated animate__fadeInUp">
        <h1 class="register__body__title">注册信息</h1>
        <h2 class="register__body__desc">以下信息均为必填项，请认真填写</h2>
        <div class="register__body__userInfo animate__animated animate__fadeIn" v-show="step === 1">
          <field ref="company" :class="{errorBorder: showError && errorForm.type === 'company'}" v-model="userInfo.company" type="text" placeholder="公司名称" @blur="onBlur()" />
          <field ref="realName" :class="{errorBorder: showError && errorForm.type === 'realName'}" v-model="userInfo.realName" type="text" placeholder="您的姓名" @blur="onBlur()" />
          <field ref="position" :class="{errorBorder: showError && errorForm.type === 'position'}" v-model="userInfo.position" type="text" placeholder="您的职位" @blur="onBlur()" />
          <field ref="email" :class="{errorBorder: showError && errorForm.type === 'email'}" v-model="userInfo.email" type="text" placeholder="常用邮箱" @blur="onBlur()" />
        </div>
        <div class="register__body__mobile animate__animated animate__fadeIn" v-show="step === 2">
          <span @click="onSendCode" class="send-code" :class="{ disabled: btnDesc.indexOf('s') !== -1 }">{{ btnDesc }}</span>
          <field ref="mobile" :class="{errorBorder: showError && errorForm.type === 'mobile'}" v-model="userInfo.mobile" type="digit" placeholder="手机号" maxlength="11" @blur="onBlur()" />
          <field ref="smsCode" :class="{errorBorder: showError && errorForm.type === 'smsCode'}" v-model="userInfo.smsCode" type="digit" placeholder="验证码" maxlength="6" @blur="onBlur()" />
          <field ref="password" :class="{errorBorder: showError && errorForm.type === 'password'}" v-model="userInfo.password" type="text" placeholder="密码" @blur="onBlur()" />
        </div>
        <span v-if="showError" class="mobileCode-register-errorFormDesc" >{{ errorForm.desc }}</span>
        <div class="register__body__userInfo__agree" @click="onChangeRadio()">
          <img :src="agree ? hasChose : noChose" alt="" >
          <span>请仔细阅读并同意<a @click.stop="onProtocol()">《隐私政策》</a></span>
        </div>
      </div>
      <div class="register__bottom">
        <div v-show="step === 1" class="register__bottom__next" @click="onStep(2)">下一步</div>
        <div v-show="step === 2" class="register__bottom__commit">
          <div @click="onStep(1)">上一步</div>
          <div @click="onRegister()">注册</div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="animate__animated animate__flipInY register__body register__code">
        <div>恭喜您已完成注册</div>
        <div>使用PC端浏览器登录即可获取「免费报告」</div>
        <img :src="registerCode" alt="">
        <div>扫码关注公众号</div>
        <div>可获取更多一手信息</div>
      </div>
    </template>
    <action-sheet v-model:show="protocolInfo.show" :title="protocolInfo.title">
      <privacy v-if="protocolInfo.title === '隐私政策'" />
    </action-sheet>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import registerBg from '@/assets/register/register-bg.png'
import noChose from '@/assets/radio-no-chose.png'
import hasChose from '@/assets/radio-has-chose.png'
import registerCode from '@/assets/register-code.png'
import { Field, showToast,ActionSheet} from 'vant';
import { registerAccount ,checkEmail} from '@/api/user'
import {regMobile,regEmail,regPassword} from '@/utils/validate'
import privacy from './protocol/privacyProtocol.vue'
const step = ref(1)
const agree = ref(false)
const btnDesc = ref('发送验证码')
const showError = ref(false) // 是否显示错误提示
const timer = ref(null) // 定时器
const mobile = ref(null)
const smsCode = ref(null)
const password = ref(null)
const company = ref(null)
const realName = ref(null)
const position = ref(null)
const email = ref(null)
const registerSuccess = ref(true)
const protocolInfo = ref({show:false,title: '隐私政策'})
const userInfo = ref({
  company: '',
  realName: '',
  position: '',
  email: '',
  mobile: '',
  smsCode: '',
  password: ''
})
const errorForm = ref({
  type: '',
  desc: ''
}) // 错误提示信息
const onProtocol = (type) => {
  protocolInfo.value.show = true
  // protocolInfo.value.title = '隐私政策'
}
const onChangeRadio = () => {
  agree.value = !agree.value
}
const onStep = async(value) => {
  errorForm.value = { type: '', desc: '' }
  if( value === 2 ){
    if( userInfo.value.company === '' ){
      onAddError('company', '请输入公司名称')
      return false
    }
    if( userInfo.value.realName === '' ){
      onAddError('realName', '请输入您的姓名')
      return false
    }
    if( userInfo.value.position === '' ){
      onAddError('position', '请输入您的职位')
      return false
    }
    if( userInfo.value.email === '' ){
      onAddError('email', '请输入常用邮箱')
      return false
    }
    if (!regEmail.test(userInfo.value.email)) {
      onAddError('email', '邮箱输入错误，请重新输入')
      return false
    }else{
      try {
        await checkEmail({ email: userInfo.value.email })
      } catch (error) {
        onAddError('email', error.resp_msg)
        return false
      }
    }
  }
  step.value = value
}
// 失去焦点
const onBlur = () => {
  showError.value = false
}
// 发送验证码
const onSendCode = () => {
  // 1.判断是否为倒计时状态
  if (btnDesc.value.indexOf('s') !== -1) {
    return false
  }
  // 2.判断是否有手机号
  if (userInfo.value.mobile === '') {
    onAddError('mobile', '请输入手机号')
    return false
  }
  // 3.判断手机号输入是否正确
  if (!regMobile.test(userInfo.value.mobile)) {
    onAddError('mobile', '手机号码输入错误，请重新输入')
    return false
  }
  smsCode.value.focus()
  countDown()
}
// 注册
const onRegister = async() => {
  // 1.判断是否有手机号
  if (userInfo.value.mobile === '') {
    onAddError('mobile', '请输入手机号')
    return false
  }
  // 2.判断手机号输入是否正确
  if (!regMobile.test(userInfo.value.mobile)) {
    onAddError('mobile', '手机号码输入错误，请重新输入')
    return false
  }
  // 3.判断是否有验证码
  if (userInfo.value.smsCode === '') {
    onAddError('smsCode', '请输入验证码')
    return false
  }
  // 4.判断是否有密码
  if (userInfo.value.password === '') {
    onAddError('password', '请输入密码')
    return false
  }
  // 5.判断密码输入是否正确
  if (!regPassword.test(userInfo.value.password)) {
    onAddError('password', '8-16位密码，需包含大小写字母、数字以及特殊字符')
    return false
  }
  // 6.判断是否同意协议
  if (!agree.value) {
    showToast('请勾选《用户协议》与《隐私政策》')
    return false
  }
  try {
    await registerAccount(userInfo.value)
    registerSuccess.value = true
  } catch (error) {
    return false
  }
}
// 添加错误提示
const onAddError = (target, info) => {
  showError.value = true
  errorForm.value.type = target
  errorForm.value.desc = info
  target === 'mobile' ? mobile.value.focus() : target === 'smsCode' ? smsCode.value.focus() : target === 'password' ? password.value.focus() : target === 'company' ? company.value.focus() : target === 'realName' ? realName.value.focus() : target === 'position' ? position.value.focus() : email.value.focus()
}
// 倒计时
const countDown = () => {
  btnDesc.value = '60s 后可重发'
  timer.value = setInterval(() => {
    let seconds:any = btnDesc.value.replace('s 后可重发', '')
    seconds--
    btnDesc.value = seconds + 's 后可重发'
    if (seconds === 0) {
      clearInterval(timer.value)
      btnDesc.value = '重新获取'
    }
  }, 1000)
}
</script>
<style lang="scss" scoped>
.register{
  background: #F5F5F5;
  min-height: 100vh;
  .register__bg{
    width: 75rem;
    height: 54rem;
    position: relative;
    top: 0;
    left: 0;
  }
  .register__body{
    width: 68.6rem;
    height: 83.6rem;
    position: absolute;
    top: 32rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 1.6rem;
    padding: 3.2rem;
    box-sizing: border-box;
    :deep(.van-field){
      padding: 0;
      background: #F4F5F7;
      margin-bottom: 1.6rem;
      font-weight: 500;
      input{
        border: 0.1rem solid transparent;
        border-radius: 0.8rem;
        padding: 1rem 4.21rem 1rem 3.2rem;
        &:focus{
          background: #fff;
          border: 0.1rem solid #165dff ;
        }
      }
    }
    :deep(.van-field).errorBorder{
      input{
        border: 0.1rem solid #FF4D4F !important;
      }
    }
    .register__body__title{
      font-size: 3.6rem;
      color: #1C232F;
      font-weight: 600;
      line-height: 5.2rem;
    }
    .register__body__desc{
      line-height: 4rem;
      font-size: 2.4rem;
      color: #5B6985;
      margin: 0.8rem 0 3.2rem;
    }
    .register__body__userInfo{
      font-size: 2.8rem;
    }
    .register__body__userInfo__agree{
      font-size: 2.4rem;
      margin-top: 1.6rem;
      display: flex;
      align-items: center;
      img{
        width: 4.8rem;
        height: 4.8rem;
        margin-right: 1.6rem;
      }
      span{
        color: #919DB5;
        a{
          color: #1C232F;
        }
      }
    }
  }
  .register__bottom{
    width: 75rem;
    height: 18rem;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 1.6rem 4.8rem 8.4rem;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0 -4px 16px 0 #0000000d;
    div{
      font-size: 2.8;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .register__bottom__next{
      width: 65.4rem;
      height: 8rem;
      background: #2D5CF6;
      border-radius: 0.8rem;
      font-size: 2.8rem;
    }
    .register__bottom__commit{
      div{
        height: 8rem;
        border-radius: 0.8rem;
        background: #2D5CF6;
        font-size: 2.8rem;
      }
      div:nth-of-type(1){
        width: 21.6rem;
        background: #F3F4F7;
        color: #5B6985;
        margin-right: 1.6rem;
      }
      div:nth-of-type(2){
        width: 42.2rem;
      }
    }
  }
  .register__code{
    text-align: center;
    padding-top: 12.8rem;
    box-sizing: border-box;
    font-size: 2.4rem;
    color: #5B6985;
    line-height: 4rem;
    div:nth-of-type(1){
      font-weight: 600;
      font-size: 3.6rem;
      line-height: 5.2rem;
      color: #1C232F;
    }
    div:nth-of-type(2){
      font-size: 2.8rem;
      color: #1c232fff;
      line-height: 4.4rem;
      margin: 0.8rem 0 3.2rem;
    }
    img{
      width: 28.8rem;
      height: 28.8rem;
      margin-bottom: 0.8rem;
    }
  }
  .send-code{
    color: #165DFF;
    margin-right: 3.2rem;
    position: absolute;
    right: 0;
    top: 10rem;
    z-index: 2;
    font-size: 2.8rem;
  }
  .mobileCode-register-errorFormDesc{
    font-weight: 400;
    font-size: 2.4rem;
    color: #F53F3F;
    line-height: 4rem;
    margin-left: 3.2rem;
  }
  .register__body__mobile{
    position: relative;
  }
  .disabled {
    color: #999999;
  }
}
</style>
