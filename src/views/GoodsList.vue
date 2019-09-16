<template>
  <div id="app">
    这是商品列表页面
    <span>{{$route.params.goodsId}}</span>
    <br />
    <span>{{$route.params.name}}</span>
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/img">显示商品图片</router-link>
    <div>
      <router-view></router-view>
    </div>
    <br />
    <br />
    <!-- <router-link to="/Cart">跳转到购物车01</router-link> -->
    <router-link v-bind:to="{name:'Cart',params:{cartId:123}}">跳转到购物车02</router-link>
    <br />
    <br />
    <button @click="jump">button - 跳转到购物车页面</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我和我的祖国"
    };
  },
  methods: {
    jump() {
      this.$router.push({ path: "/Cart?goodsId=123" });
      // this.$router.go(-2)
    }
  }
};
</script>

<style>
</style>
