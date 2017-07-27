import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router'

import App from './app.vue';
import PageList from './page-list.vue';
import PageCompare from './page-compare.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: PageList },
  { path: '/compare', component: PageCompare }
];

const router = new VueRouter({
  routes
});

const store = new Vuex.Store({
  state: {
    players: [],
    selectedPlayer: undefined
  },
  getters: {
    selectedPlayers: state => {
      return state.players.filter(player => player.selected);
    },
    playerForCompare: (state) => playerName => {
      return state.players.find(
        (player) => !player.is_hidden && (player.name === playerName)
      );
    },
  },
  mutations: {
    setPlayers: (state, players) => {
      state.players = players;
    },
    selectPlayer: (state, player) => {
      state.selectedPlayer = player;
    }
  }
});

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted() {
    fetch('/api/get-players/')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((players) => {
        this.$store.commit('setPlayers', players);
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
