import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 本地存储的读取
var car = JSON.parse(localStorage.getItem("car") || "[]");

export default new Vuex.Store({
  // vuex的组件数据
  state: {
    // this.$store.state.***
    car: car
    // car中的数据合集{id:商品id,count:数量,price:单价,selected:false(是否选中)}
  },
  // vuex的组件方法
  mutations: {
    // this.$store.commit('方法', '传递唯一参数')
    // 增加
    increment(state) {
      state.count++;
    },
    // 减少
    // 最多支持两个参数
    subtract(state, a) {
      state.count -= a;
    },
    //subtract(state, a) {
    //  state.count -= (a.c-a.d);
    //}

    // 购物车传入的数据
    addToCar(state, goodsinfo) {
      var flag = false;
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true;
        }
      });
      if (!flag) {
        state.car.push(goodsinfo);
      }
      // 写入本地存储 localStorage
      localStorage.setItem("car", JSON.stringify(state.car));
    },

    // 修改购物车信息
    updateGoodsInfo(state, goodsinfo) {
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          item.count = parseInt(goodsinfo.count);
          return true;
        }
      });

      // 写入本地存储 localStorage
      localStorage.setItem("car", JSON.stringify(state.car));
    },

    // 删除购物车
    removeFormCar(state, id) {
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1);
          return true;
        }
      });

      // 写入本地存储 localStorage
      localStorage.setItem("car", JSON.stringify(state.car));
    },

    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected;
        }
      });

      // 写入本地存储 localStorage
      localStorage.setItem("car", JSON.stringify(state.car));
    }
  },
  // vuex数据的获取
  getters: {
    // this.$store.getters.***
    optCount: function(state) {
      return state.count;
    },

    // 购物车数据显示
    getAllCount(state) {
      let a = 0;
      state.car.forEach(item => {
        a += item.count;
      });
      return a;
    },

    getgoodCount(state) {
      var a = {};
      state.car.forEach(item => {
        a[item.id] = item.count;
      });
      return a;
    },

    getGoodsSelected(state) {
      var a = {};
      state.car.forEach(item => {
        a[item.id] = item.selected;
      });
      return a;
    },

    getGoodsCountAmount(state) {
      var a = {
        count: 0,
        amount: 0
      };
      state.car.forEach(item => {
        if (item.selected) {
          a.count += item.count;
          a.amount += item.price * item.count;
        }
      });
      return a;
    }
  },
  actions: {},
  modules: {}
});
