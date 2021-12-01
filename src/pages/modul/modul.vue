<template>
  <div id="modul">
      {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Modul',
  data() {
    return {
      msg: "welcome to model"
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style s>
#modul {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
