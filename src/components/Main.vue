<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">
          Welcome to Breaking Bad web application
        </h1>

        <p class="subheading font-weight-regular">
          This application is only for study and practice purposes,
          <br />for the API, please refer to
          <a href="https://www.breakingbadapi.com/" target="_blank"
            >Breaking Bad API</a
          >
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Created using
        </h2>

        <v-row justify="center">
          <a
            href="https://cli.vuejs.org/"
            class="subheading mx-3"
            target="_blank"
          >
            Vue CLI
          </a>
          <a
            href="https://vuetifyjs.com/"
            class="subheading mx-3"
            target="_blank"
          >
            Vuetify
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Contact me on
        </h2>

        <v-row justify="center">
          <a
            href="https://github.com/pillowslept"
            class="subheading mx-3"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/juan-camilo-velasquez-vanegas/"
            class="subheading mx-3"
            target="_blank"
          >
            Linkedin
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Main'
};
</script>
