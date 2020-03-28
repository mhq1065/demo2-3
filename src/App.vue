<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-show="show">{{message}}</div>
    <button @click="trans">click</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  // components:{
  //   HelloWorld
  // },
  data() {
    return {
      message:"hello world",
      show:true
    }
  },
  methods:{
    async trans() {
      // 必须加await
      // axios 是Promise对象
      let res = await axios({
          // 方法
          method: "get",
          // url 地址
          url: 'https://api.frankfurter.app/latest',
          // 查询参数
          params: {
              // 需要货币的数量
              amount: this.inputs,
              // 本币的类型 默认欧元
              from: this.from
          }
      })
      
      console.log(res)    
      this.rates = res.data.rates
  }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
