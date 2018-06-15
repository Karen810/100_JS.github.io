import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);


const state = {count: 0};

const store = new Vuex.Store({
  state
});
//计数器
new Vue({
  el: '#app',
  ...App,
  store     //store被注册到了实例上，所有组件都会有一个属性 this.$store
})
