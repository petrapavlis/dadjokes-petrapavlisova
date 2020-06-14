"use strict";

new Vue({
  el: "#app",

  data: {
    upLikes: 0,
    downLikes: 0,
  },

  methods: {
    btnUp() {
      this.upLikes++;
    },
    btnDown() {
      this.downLikes++;
    },
  }
})