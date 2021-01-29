import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
    iconfont: 'mdi'
    },

  theme: {
       dark: true,
    themes: {
      light: {
        background: '#212121',
        secondary: '#b0bec5',
        info: '#8c9eff',
        error: '#b71c1c'
      }
    }
  }
});
