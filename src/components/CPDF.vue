<template>
  <div class="Public" v-if="loading">
    <div class="dialog">
    </div>
      <i class="el-icon-loading"></i>
      <p>拼命加载中！</p>
  </div>
</template>

<script>
export default {
  name: 'Cpdf',
  data () {
    return {
      loading: true
    }
  },
  created() {

  },
  mounted() {
    this.getNumPages()
  },
  methods: {
    getNumPages() {
      console.log("url", this.url);
      let loadingTask = PDF.createLoadingTask(this.url)
      loadingTask.promise.then(pdf => {
        this.numPages = pdf.numPages
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Public {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.dialog {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.8;
  z-index: 10;
}
.Public p {
  z-index: 100;
  position: initial;
  color: #409EFF;
}
</style>
