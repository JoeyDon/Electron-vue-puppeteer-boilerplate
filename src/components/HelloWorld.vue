<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col cols="12">
        <v-btn @click="test">
          Open puppeteer(Chromium)
        </v-btn>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { ipcRenderer } from "electron";

export default Vue.extend({
  name: "HelloWorld",
  data: () => ({
    importantLinks: [
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ]
  }),
  mounted() {
    ipcRenderer.on("reply", (event, arg) => {
      console.log(arg); // prints "pong"
    });
  },
  methods: {
    test() {
      console.log("test from helloworld component");
      ipcRenderer.send("clicktest");
    },
    openURL(url: string) {
      console.log(`Open URL "${url}"`);
      window.open(url);
    }
  }
});
</script>
