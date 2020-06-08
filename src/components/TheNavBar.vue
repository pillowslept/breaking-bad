<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      class="hidden-xs-only"
      small
      text
      v-for="(route, i) in routes"
      :key="i"
      :to="route.to"
    >
      {{ route.text }}
    </v-btn>

    <v-menu bottom left>
      <template v-slot:activator="{ on }">
        <v-btn dark icon v-on="on" class="hidden-sm-and-up">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(route, i) in routes" :key="i" :to="route.to">
          <v-list-item-title>
            {{ route.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheNavBar',

  data: () => ({
    routes: [
      {
        text: 'Characters',
        to: '/characters'
      },
      {
        text: 'Episodes',
        to: '/episodes'
      },
      {
        text: 'Quotes',
        to: '/quotes'
      },
      {
        text: 'Deaths',
        to: '/deaths'
      },
      {
        text: 'About',
        to: '/about'
      }
    ]
  })
};
</script>
