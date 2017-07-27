<template>
  <div>
    <player-list></player-list>
    <player-details></player-details>
  </div>
</template>

<script>
import PlayerListVue from './player-list.vue';
import PlayerDetailsVue from './player-details.vue';

export default {
  name: 'page-list',
  components: {
    'player-list': PlayerListVue,
    'player-details': PlayerDetailsVue
  }
}
</script>
