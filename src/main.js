// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font/iconfont.css'


//引入手机端框架
import Vant from 'vant';
import 'vant/lib/index.css';

import { Lazyload } from 'vant';
Vue.use(Lazyload)
Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
//当第一次加载main.js的时候就设置根节点的（html节点）font-size。否则会出现混乱页面
window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  const htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = htmlWidth / 10 + 'px';
};
setHtmlFontSize();
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


//   1rem = 3.7px;
