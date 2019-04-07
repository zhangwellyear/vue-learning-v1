<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格放置区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu1.png" alt>
          <div class="mui-media-body">Home</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt>
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt>
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt>
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt>
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt>
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunBoTuList: []
    };
  },
  created() {
    this.getLunBoTu();
  },
  methods: {
    getLunBoTu() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          if (result.body.status) {
            console.log(result.body);
            this.lunBoTuList = result.body;
            Toast("ok");
          } else {
            Toast("error");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 300px;
  margin: 0;
  padding: 0;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: purple;
    }

    &:nth-child(2) {
      background-color: cyan;
    }

    &:nth-child(3) {
      background-color: pink;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  li {
    border: none;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>