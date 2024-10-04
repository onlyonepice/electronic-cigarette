import { http } from "@/utils/http";


export const registerAccount = (data) => {
  return http.request("post", "api-user/register/registerAccount",{data});
}

// 验证邮箱是否已注册
export const checkEmail = (data) => {
  return http.request("get", "api-user/account/checkEmail",{params:data});
}
// 领取白皮书 上传信息
export const frontCreateInfo = (data) => {
  return http.request("post", "/eesa-report/promotion/prWhitePaperReceive/front/v1.0/frontCreate",{data});
}


// 获取加密密钥
export const getPublicKeyApi = () => {
  return http.request<void>("post", "/api-uaa/clients/findPublicKey");
};

// 生成scheme
export const generateScheme = (data) => {
  return http.request<void>("post", "/api-user/wx/miniapp/front/v1.0/generateScheme",{data});
};