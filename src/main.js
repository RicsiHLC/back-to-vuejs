import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App.vue'

import ApolloClient from 'apollo-boost'

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
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
