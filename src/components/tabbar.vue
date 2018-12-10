<template>
  <div>
    <ul class="title_img clearfix">
      <li>
        <img src="../../static/tabbar_img/header1.jpg" alt="">
      </li>
      <li>
        <img src="../../static/tabbar_img/header2.jpg" alt="">
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
      name: "tabbar",
      data() {
        return {
        }
      }
    }
</script>

<style scoped lang="scss">
  .title_img{
    li{
      float: left;
      width: 50%;
      margin: 5px 0;
    }
    img{
      width: 100%;
    }
  }
  .seek{
    position: relative;
    .seek_div{
      position: absolute;
      left: 0;
      top: 0;
      width: 74%;
      border: 1px solid #ccc;
    }
    input{
      padding: 0;
      margin: 0;
      width: 74%;
      border: 2px solid #e60012;
      border-right: none;
      height: 40px;
      line-height: 40px;
      text-indent: 10px;
      float: left;
      font-size: 14px;
      border-radius: 0;
    }
    button{
      width: 26%;
      background: #e60012;
      color: #fdd000;
      border: none;
      float: left;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      left: 6px;
    }
  }
</style>
