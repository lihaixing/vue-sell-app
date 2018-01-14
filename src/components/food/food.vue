<template>
  <transition name="food">
    <div class="food" v-show="showFlag" ref="food">
      <div>
        <div class="food-content">
          <div class="image-header">
            <img :src="food.image" alt="">
            <div class="back" @click="hide">
              <i class="icon-arrow_lift"></i>
            </div>
          </div>
          <div class="content">
            <h1 class="title">{{food.name}}</h1>
            <div class="detail">
              <span class="sell-count">月售{{food.sellCount}}份</span>
              <span class="rating">好评率{{food.rating}}%</span>
            </div>
            <div class="price">
              <span class="now">￥{{food.price}}</span>
              <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
            </div>
            <div class="cart-control-wrapper">
              <cartControl :food="food"></cartControl>
            </div>
            <transition name="fade">
              <div class="buy" v-show="!food.count" @click.stop.prevent="addFirst(food,$event)">加入购物车</div>
            </transition>
          </div>

        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <div class="title">商品信息</div>
          <div class="text">{{food.info}}</div>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingSelect :selectType="selectType" :onlyContent="onlyContent" :desc="desc"
                        :ratings="food.ratings" @ratingSelect="select(type)"
                        @ratingToggleContent="toggleContent(content)"></ratingSelect>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Bus from '../Bus'
  import Vue from 'vue'
  import BScroll from 'better-scroll'
  import cartControl from '../cartControl/cartControl'
  import split from '../split/split'
  import ratingSelect from '../ratingSelect/ratingSelect'

  export default {
    name: 'food',
    data () {
      return {
        showFlag: false,
        selectType: 2,
        onlyContent: false,
        // 从子组件返回的值
        returnSelectType: 2,
        returnOnlyContent: false,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      }
    },
    methods: {
      show () {
        this.showFlag = true
        this.selectType = 2
        this.onlyContent = false
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide () {
        this.showFlag = false
      },
      addFirst (food, event) {
        Vue.set(food, 'count', 1)
        Bus.$emit('tran', event.target)
      },
      select (type) {
        this.returnSelectType = type
        console.log(type)
      },
      toggleContent (content) {
        this.returnOnlyContent = content
        console.log(content)
      }
    },
    props: {
      food: {
        type: Object
      }
    },
    components: {
      BScroll,
      cartControl,
      split,
      ratingSelect
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .food {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 48px;
    z-index: 30;
    width: 100%;
    height: auto;
    background: #FFF;
    overflow: hidden;
    &.food-enter,
    &.food-leave-to {
      transform: translate3d(100%, 0, 0);
    }
    &.food-enter-active,
    &.food-leave-active {
      transition: all 0.5s;
    }
    .image-header {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 100%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .back {
        position: absolute;
        top: 10px;
        left: 0;
        .icon-arrow_lift {
          display: block;
          padding: 10px;
          font-size: 20px;
          color: #FFF;
        }
      }
    }

    .content {
      padding: 18px;
      position: relative;
      .title {
        line-height: 14px;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 700;
        color: rgb(7, 17, 27);
      }
      .detail {
        margin-bottom: 18px;
        line-height: 10px;
        font-size: 0;
        .sell-count, .rating {
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .sell-count {
          margin-right: 12px;
        }
      }
      .price {
        font-weight: 700;
        line-height: 24px;
        .now {
          font-size: 14px;
          margin-right: 8px;
          color: rgb(240, 20, 20);
        }
        .old {
          text-decoration: line-through;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }
      .buy {
        position: absolute;
        right: 18px;
        bottom: 18px;
        z-index: 10;
        line-height: 24px;
        height: 24px;
        padding: 0 12px;
        box-sizing: border-box;
        font-size: 10px;
        background: rgb(0, 160, 220);
        border-radius: 12px;
        color: #FFF;
        &.fade-enter, &.fade-leave-to {
          opacity: 0;
        }
        &.fade-enter-active, &.fade-leave-active {
          transition: all 0.5s linear;
        }
      }
      .cart-control-wrapper {
        position: absolute;
        right: 12px;
        bottom: 12px;
      }
    }

    .info {
      padding: 18px;
      .title {
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 6px;
        color: rgb(7, 17, 27);
      }
      .text {
        color: rgb(77, 85, 93);
        line-height: 24px;
        padding: 0 8px;
        font-size: 12px;
      }
    }
    .rating {
      padding-top: 18px;
      .title {
        font-size: 14px;
        line-height: 14px;
        margin-left: 18px;
        color: rgb(7, 17, 27);
      }
    }
  }
</style>
