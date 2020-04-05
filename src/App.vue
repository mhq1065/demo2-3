<template>
  <div id="app">
    <!-- <input type="number" class="input" v-model="inputs" /> -->
    <el-input
      v-model="inputs"
      type="number"
      placeholder="请输入内容"
    ></el-input>
    <!-- <button @click="trans">转换</button> -->
    <div class="select">
      <!-- 单选选择框 -->
      <!-- <select v-model="from">
        <option v-for="(value, name) in DIC" :key="name">{{ name }}</option>
      </select> -->
      <el-select v-model="from" placeholder="请选择">
        <el-option v-for="(value, name) in DIC" :key="name" :value="name">
        </el-option>
      </el-select>
    </div>
    <!-- v-for循环对象，会仿写即可 与python一样不加括号也可以 -->
    <div v-for="(value, name) in rates">
      {{ name }}:{{ value }}
      <hello v-bind:start="value"></hello>
    </div>
    <div id="main" style="width: 600px; height: 400px;"></div>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import axios from "axios";
  import hello from "./components/demo1";
  export default {
    name: "App",
    components: {
      hello,
    },
    data() {
      return {
        DIC: {
          AUD: "澳大利亚元",
          BGN: "保加利亚列弗",
          BRL: "巴西雷亚尔",
          CAD: "加拿大元",
          CHF: "瑞士法郎",
          CNY: "人民币元",
          CZK: "捷克克朗",
          DKK: "丹麦克朗",
          GBP: "英镑",
          HKD: "港元",
          HRK: "克罗地亚库纳",
          HUF: "匈牙利福林",
          IDR: "印尼盾",
          ILS: "以色列新谢克尔",
          INR: "印度卢比",
          ISK: "冰岛克朗",
          JPY: "日圆",
          KRW: "韩圆",
          MXN: "墨西哥比索",
          MYR: "马来西亚令吉",
          NOK: "挪威克朗",
          NZD: "新西兰元",
          PHP: "菲律宾比索",
          PLN: "波兰兹罗提",
          RON: "罗马尼亚列伊",
          RUB: "俄罗斯卢布",
          SEK: "瑞典克朗",
          SGD: "新加坡元",
          THB: "泰铢",
          TRY: "土耳其里拉",
          USD: "美元",
          ZAR: "南非兰特",
        },
        inputs: 1, //amount
        rates: [], // 汇率
        from: "CNY", //默认初始值
      };
    },
    async created() {
      this.trans();
    },
    // 挂载的时候执行 vue生命周期
    mounted() {
      this.drawChart();
    },
    // 每次被监听的变量值发生变化就会执行相应的函数
    watch: {
      // 监听data中的inputs
      inputs: function () {
        this.trans();
      },
      // 监听data中的from
      from: function () {
        this.trans();
      },
    },
    methods: {
      // 发送请求 必须加async
      // async await
      async trans() {
        // 必须加await
        // axios 是Promise对象
        let res = await axios({
          // 方法
          method: "get",
          // url 地址
          url: "https://api.frankfurter.app/latest",
          // 查询参数
          params: {
            // 需要货币的数量
            amount: this.inputs,
            // 本币的类型 默认欧元
            from: this.from,
          },
        });

        console.log(res);
        this.rates = res.data.rates;
      },
      drawChart() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById("main"));
        // 指定图表的配置项和数据
        let option = {
          angleAxis: {},
          radiusAxis: {
            type: "category",
            data: ["周一", "周二", "周三", "周四"],
            z: 10,
          },
          polar: {},
          series: [
            {
              type: "bar",
              data: [1, 2, 3, 4],
              coordinateSystem: "polar",
              name: "A",
              stack: "a",
            },
            {
              type: "bar",
              data: [2, 4, 6, 8],
              coordinateSystem: "polar",
              name: "B",
              stack: "a",
            },
            {
              type: "bar",
              data: [1, 2, 3, 4],
              coordinateSystem: "polar",
              name: "C",
              stack: "a",
            },
          ],
          legend: {
            show: true,
            data: ["A", "B", "C"],
          },
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
    },
  };
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
