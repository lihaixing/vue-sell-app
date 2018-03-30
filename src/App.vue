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
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import vHeader from './components/header/header'
  // import {urlParse} from '@/common/js/util'

  export default {
    name: 'app',
    components: {
      vHeader
    },
    data () {
      return {
        seller: {
          // id: (() => {
          //   let queryParam = urlParse()
          //   return queryParam.id
          // })()
        }
      }
    },
    created () {
      this.$http.get('http://yapi.dev.ycdmm.com:23000/mock/31/seller').then((res) => {
        res = res.body
        if (res.errno === 0) {
          this.seller = res.seller
          // this.seller = Object.assign({}, res.seller, {id: this.seller.id})
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
