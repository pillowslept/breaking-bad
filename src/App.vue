<template>
  <v-app>
    <TheNavBar />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheNavBar from '@/components/TheNavBar';

export default {
  name: 'App',

  components: {
    TheNavBar
  }
};
</script>
