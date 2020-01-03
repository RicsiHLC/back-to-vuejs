import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import ApolloClient from 'apollo-boost'

import './assets/styles/tailwind.css';

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://api.spacex.land/graphql/'
})

Vue.config.productionTip = false
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  render: h => h(App),
  apolloProvider,
}).$mount('#app')
