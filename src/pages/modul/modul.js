// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import modul from './modul.vue'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#modul',
  components: { modul },
  template: '<modul/>'
})
