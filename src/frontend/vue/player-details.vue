<template>
  <section>
    <h3>Player details</h3>

    <dl v-if="player">
      <dt>ID</dt>
      <dd>{{ player.id }}</dd>

      <dt>Name</dt>
      <dd>{{ player.name }}</dd>

      <dt>Battles</dt>
      <dd>{{ player.battles_total }}</dd>

      <dt>Wins</dt>
      <dd>{{ player.wins_total }}</dd>

      <dt>Days</dt>
      <dd>{{ player.days_total }}</dd>

      <dt>Vehicles</dt>
      <dd>{{ player.vehicles_x }}</dd>

      <dt>Rating</dt>
      <dd>{{ player.rating }}</dd>

      <dt>Experience total</dt>
      <dd>{{ player.exp_total }}</dd>

      <dt>Experience average</dt>
      <dd>{{ player.exp_avg }}</dd>

      <dt>Is hidden</dt>
      <dd>{{ player.is_hidden }}</dd>

      <dt>Registered</dt>
      <dd>{{ formatDate(player.created_at) }}</dd>
    </dl>

    <p v-else>Select player from list</p>
  </section>
</template>

<script>
  export default {
    name: 'player-details',
    computed: {
      player() {
        return this.$store.state.selectedPlayer;
      }
    },
    methods: {
      formatDate(dateString) {
        return new Date(dateString).toLocaleDateString();
      }
    }
  }
</script>
