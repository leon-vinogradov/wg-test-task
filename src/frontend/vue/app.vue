<template>
  <div>
    <h2>Implementation on VueJS</h2>

    <ul>
      <li><router-link to="/">List of players</router-link></li>
      <li><router-link to="/compare">Comparison of players</router-link></li>
    </ul>

    <router-view></router-view>
  </div>
</template>
