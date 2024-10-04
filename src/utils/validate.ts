// 手机号正则
export const regMobile = /^1[23456789][0-9]{9}$/

// 验证码校验
export const regCode = /^[0-9]{6}$/

// 验证邮箱
export const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

// 验证密码
export const regPassword = /^(?![A-z0-9]+$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/