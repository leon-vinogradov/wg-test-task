<template>
  <div>
    <player-compare></player-compare>
  </div>
</template>

<script>
import PlayerCompareVue from './player-compare.vue';

export default {
  name: 'page-compare',
  components: {
    'player-compare': PlayerCompareVue
  }
}
</script>
