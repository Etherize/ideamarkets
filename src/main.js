import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueApollo);

const client = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://api.thegraph.com/subgraphs/name/aragon/aragon-voting-mainnet'
})

const apolloProvider = new VueApollo({
  defaultClient: client,
})

new Vue({
  store,
  render: h => h(App),
    apolloProvider,
}).$mount('#app')
