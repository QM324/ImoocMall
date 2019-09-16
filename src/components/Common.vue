<template>
  <div class>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <p>{{number}}</p>
  </div>
</template>

<script>
export default {
  props: ["number"],
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    increase() {
      this.$emit('changeNum')
    },
    decrease() {
      this.$emit("onchangeNum")
    }
  }
};
</script>


<style scoped>
</style>
