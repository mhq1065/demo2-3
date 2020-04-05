<template>
  <div class="f">
    <button @click="up">+</button>
    <div>{{ n }}</div>
    <button @click="down">-</button>
  </div>
</template>
<script>
  export default {
    name: "hello",
    // 申明可以接收的参数名称
    props: ["start"],
    data() {
      return {
        n: this.start,
      };
    },
    methods: {
      up() {
        this.n++;
      },
      down() {
        this.n--;
      },
    },
  };
</script>
<style scoped>
  .f {
    display: flex;
    flex-direction: row;
  }
</style>
