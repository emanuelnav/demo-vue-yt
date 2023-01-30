<template>
  <div>
    <youtube :video-id="videoId" ref="youtube" :player-vars="playerVars"></youtube>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'OrxmtDw4pVI',
      lastPosition: null,
      playerVars: {
        autoplay: 1
      }
    }
  },

  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  },

  methods: {
    seek () {
      if (this.player.getCurrentTime().seconds > this.lastPosition) {
        setTimeout(() => {
          this.player.pauseVideo();
        }, 300);
        alert('Seek');
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
