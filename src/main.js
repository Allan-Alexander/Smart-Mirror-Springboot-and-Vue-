import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import VueMqtt from 'vue-mqtt'

Vue.use(VueMqtt, 'ws://mqtt.eclipseprojects.io/mqtt', {clientId: 'WebClient-' + parseInt(Math.random() * 100000)})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
