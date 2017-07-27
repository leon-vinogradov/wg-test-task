<template>
  <section>
    <h3>Comparison of players</h3>

    <form @submit="compare">
      <input v-model="playerName1" placeholder="First player name">
      <input v-model="playerName2" placeholder="Second player name">
      <button>Compare</button>
    </form>

    <table v-if="player1 && player2">
      <thead>
        <th>Property</th>
        <th>First player</th>
        <th>Second player</th>
      </thead>

      <tbody>
        <tr>
          <th>ID</th>
          <td>{{ player1.id }}</td>
          <td>{{ player2.id }}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{{ player1.name }}</td>
          <td>{{ player2.name }}</td>
        </tr>
        <tr>
          <th>Battles</th>
          <td :style="compareStyle(player1.battles_total, player2.battles_total, 1)">{{ player1.battles_total }}</td>
          <td :style="compareStyle(player1.battles_total, player2.battles_total, 2)">{{ player2.battles_total }}</td>
        </tr>
        <tr>
          <th>Wins</th>
          <td :style="compareStyle(player1.wins_total, player2.wins_total, 1)">{{ player1.wins_total }}</td>
          <td :style="compareStyle(player1.wins_total, player2.wins_total, 2)">{{ player2.wins_total }}</td>
        </tr>
        <tr>
          <th>Days</th>
          <td :style="compareStyle(player1.days_total, player2.days_total, 1)">{{ player1.days_total }}</td>
          <td :style="compareStyle(player1.days_total, player2.days_total, 2)">{{ player2.days_total }}</td>
        </tr>
        <tr>
          <th>Vehicles</th>
          <td :style="compareStyle(player1.vehicles_x, player2.vehicles_x, 1)">{{ player1.vehicles_x }}</td>
          <td :style="compareStyle(player1.vehicles_x, player2.vehicles_x, 2)">{{ player2.vehicles_x }}</td>
        </tr>
        <tr>
          <th>Rating</th>
          <td :style="compareStyle(player1.rating, player2.rating, 1)">{{ player1.rating }}</td>
          <td :style="compareStyle(player1.rating, player2.rating, 2)">{{ player2.rating }}</td>
        </tr>
        <tr>
          <th>Experience total</th>
          <td :style="compareStyle(player1.exp_total, player2.exp_total, 1)">{{ player1.exp_total }}</td>
          <td :style="compareStyle(player1.exp_total, player2.exp_total, 2)">{{ player2.exp_total }}</td>
        </tr>
        <tr>
          <th>Experience average</th>
          <td :style="compareStyle(player1.exp_avg, player2.exp_avg, 1)">{{ player1.exp_avg }}</td>
          <td :style="compareStyle(player1.exp_avg, player2.exp_avg, 2)">{{ player2.exp_avg }}</td>
        </tr>
        <tr>
          <th>Registered</th>
          <td>{{ formatDate(player1.created_at) }}</td>
          <td>{{ formatDate(player2.created_at) }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else>Enter valid player names</p>
  </section>
</template>

<script>
  export default {
    name: 'player-compare',
    data() {
      return {
        player1: undefined,
        player2: undefined,
        playerName1: undefined,
        playerName2: undefined
      }
    },
    methods: {
      formatDate(dateString) {
        return new Date(dateString).toLocaleDateString();
      },
      compare(event) {
        event.preventDefault();

        this.player1 = this.$store.getters.playerForCompare(this.playerName1);
        this.player2 = this.$store.getters.playerForCompare(this.playerName2);
      },
      compareStyle(value1, value2, player) {
        let backgroundColor = '#fff';

        if (value1 === value2) {
          backgroundColor = '#ff7f00';
        } else if (value1 > value2) {
          backgroundColor = player === 1 ? '#090' : '#f00';
        } else if (value1 < value2) {
          backgroundColor = player === 1 ? '#f00' : '#090';
        }

        return {
          'background-color': backgroundColor
        };
      }
    }
  }
</script>
