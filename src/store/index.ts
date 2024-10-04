import { createStore } from 'vuex'
import { getPublicKeyApi } from "@/api/user";
export default createStore({
  state: {
  },
  getters: {
    // 获取加密秘钥
    getPublicKey: () => {
      return window.localStorage.getItem("publicKey");
    }
  },
  mutations: {
  },
  actions: {
    // 设置加密密钥
    async setPublicKey() {
      return new Promise((resolve, reject) => {
        getPublicKeyApi()
          .then(data => {
            if (data["resp_code"] === 0) {
              window.localStorage.setItem("publicKey", data["datas"]);
              resolve(data);
            } else {
              reject(data);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
  modules: {
  }
})
