<template>
  <div id="app">
    <div class="index-info__box">
      <img src="./assets/head.png" alt="头像" class="index-info__header" />
      <div class="index-info__name">名字</div>
    </div>
    <div class="index-table__box">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="index-table__item"
      >
        <!-- index->页面 table->部位 item->细节 -->
        <img :src="item.image" alt="" class="index-table__image" />
        <div class="index-table__name">
          {{ item.name }}
          <div v-if="item.tip" class="index-table__tip">未认证</div>
        </div>
        <div class="index-table__link">></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        items: [
          {
            name: "基本信息",
            image: require("./assets/id.png"),
          },
          {
            name: "身份认证",
            tip:"未认证",
            image: require("./assets/info.png"),
          },
          {
            name: "我的收藏",
            image: require("./assets/favor.png"),
          },
        ],
      };
    },
  };
</script>

<style>
  * {
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    /* color: #2c3e50; */
    /* margin-top: 60px; */
  }
  .index-info__box {
    width: 100px;
    margin: 60px auto;
  }
  .index-info__header {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid black;
  }
  .index-info__name {
    text-align: center;
  }
  .index-table__box {
    margin: 0 30px;
  }
  .index-table__item {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    border-bottom: 2px solid green;
  }
  .index-table__item:first-child {
    border-top: 2px solid green;
  }
  .index-table__image {
    width: 20px;
    height: 20px;
  }
  .index-table__link {
    font-size: 25px;
    color: red;
  }
  .index-table__name{
    position: relative;
  }
  .index-table__tip{
    position: absolute;
    top: 0;
    left: 100%;
    white-space: nowrap;
    font-size: 12px;
    background-color: red;
  }
</style>
