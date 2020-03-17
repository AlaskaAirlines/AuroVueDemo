import Vue from 'vue'
import App from './App.vue'
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  'ods-button',
  'ods-inputoptions',
  'ods-toast'
]

// add this line
window.addEventListener('WebComponentsReady', () => {
  return import('./webcomponents');
});

new Vue({
  render: h => h(App),
}).$mount('#app')