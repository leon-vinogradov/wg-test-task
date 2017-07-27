<template>
  <section>
    <h3>Player list</h3>

    <ul>
      <li v-for="player in players" :title="player.id" @click="selectPlayer(player)">
        {{ player.name }}
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'player-list',
    computed: {
      players() {
        return this.$store.state.players;
      }
    },
    methods: {
      selectPlayer(player) {
        this.$store.commit('selectPlayer', player);
      }
    }
  }
</script>
