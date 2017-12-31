<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{path:'/goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'/ratings'}">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'/seller'}">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import vHeader from './components/header/header'

  export default {
    name: 'app',
    components: {
      vHeader
    },
    data () {
      return {
        seller: {}
      }
    },
    created () {
      this.$http.get('/api/seller').then((res) => {
        res = res.body
        if (res.errno === 0) {
          this.seller = res.seller
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/index.styl";

  #app {
    .tab {
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-1px(rgba(7, 17, 27, 0.2));
      .tab-item {
        flex: 1;
        text-align: center;
        > a {
          display: block;
          font-size: 14px;
          color: rgb(77, 85, 93);
          &.active {
            color: rgb(240, 20, 20);
          }
        }
      }
    }
  }
</style>
