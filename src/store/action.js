
export default {

  //显示模板
  showMask({ commit }) {
    commit('showMask');
  },

  //隐藏模板
  hideMask({ commit }) {
    commit('hideMask');
  },

  //退出
  exit({ commit }) {
    commit('exit');
  },

  //设置用户名
  setUsername({ commit }, username) {
    commit('setUsername', username);
  },

  //设置商品数量
  setProductNum({ commit }, productNum) {
    commit('setProductNum', productNum);
  },

  //设置商品价格
  setProductPrice({ commit }, productPrice) {
    commit('setProductPrice', productPrice);
  },

  //改变当前选中的导航项的索引
  changeNavIndex({ commit }, currentIndex) {
    commit('changeNavIndex', currentIndex);
  },

  //设置品牌
  setBrand({ commit }, brand) {
    commit('setBrand', brand);
  },

  //设置屏幕尺寸
  setScreenSize({ commit }, screenSize) {
    commit('setScreenSize', screenSize);
  },

  //设置操作系统
  setOperatingSystem({ commit }, operatingSystem) {
    commit('setOperatingSystem', operatingSystem);
  },

  //设置运行内存
  setRunningMemory({ commit }, runningMemory) {
    commit('setRunningMemory', runningMemory);
  },

  //设置网络类型
  setNetworkType({ commit }, networkType) {
    commit('setNetworkType', networkType);
  }
};
