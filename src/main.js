// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;
Vue.filter('uppercase',function (value) {
  return value.toString().toUpperCase()
});
Vue.directive('my-model',{
  bind: function (el,binding,vNode,oldVNode) {
    el.value=binding.value;
  },
  inserted: function (el,binding,vNode,oldVNode) {
    el.addEventListener('keyup',function (event) {
      if(vNode.context[binding.expression]!==el.value+event){
        vNode.context[binding.expression]=el.value
      }
    })
  },
  update: function (el,binding,vNode,oldVNode) {
    if(el.value !==binding.value){
      el.value=binding.value
    }
  },
  componentUpdated: function (el,binding,vNode,oldVNode) {

  },
  unbind: function (el,binding,vNode,oldVNode) {

  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
