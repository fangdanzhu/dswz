
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import mutations from './mutations';

//使用Vuex状态管理器
Vue.use(Vuex);

const state = {

  //用户名是否登录了
  isLogin: true,

  //是否显示蒙版
  isShowMask: false,

  //用户名
  username: 'meishadevs',

  //商品的数量
  productNum: 0,

  //商品价格
  productPrice: 0,

  //当前选中的导航项的索引
  currentNavIndex: 1,

  //品牌
  brand: null,

  //屏幕尺寸
  screenSize: null,

  //操作系统
  operatingSystem: null,

  //运行内存
  runningMemory: null,

  //网络类型
  networkType: null,

  //标记是否设置了收货信息
  isReceive: false,

  //标记用户选择的支付方式，0:没有选择支付方式、1:微信支付、2:现金支付
  payMethod: 0,

  //标记是否需要发票
  isInvoice: false,

  //检测的状态，0:不显示检测结果、1:显示正确的检测结果,、2:显示错误的检测结果
  checkStatus: 0,

  //检测结果中显示的内容
  checkContent: null
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
