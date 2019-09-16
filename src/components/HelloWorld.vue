<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Common v-bind:number="number" v-on:changeNum="changeNum" v-on:onchangeNum="onchangeNum"></Common>
    <p>父组件{{number}}</p>
  </div>
</template>

<script>
import Common from "./Common";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      number: 20
    };
  },
  components: {
    Common
  },
  methods: {
    changeNum: function() {
      this.number++;
    },
    onchangeNum: function() {
      this.number--;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
