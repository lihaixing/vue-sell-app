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
          <ratingSelect :ratingFilter="ratingFilter" :desc="desc" :ratings="food.ratings"></ratingSelect>
        </div>
        <div class="rating-wrapper">
          <ul v-show="food.ratings&&food.ratings.length">
            <li class="rating-item" v-for="rating in food.ratings" v-show="isShowRating(rating.rateType,rating.text)">
              <div class="user">
                <span class="name">{{rating.username}}</span>
                <img width="12" height="12" :src="rating.avatar" alt="" class="avatar">
              </div>
              <!--<div class="time">{{rating.rateTime|formatDate}}</div>-->
              <div class="time">{{rating.rateTime}}</div>
              <p class="text">
                <i :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></i>{{rating.text}}
              </p>
            </li>
          </ul>
          <div class="no-rating" v-show="!food.ratings||!food.ratings.length">暂无评价</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Bus from '../../common/js/Bus'
  import {formatDate} from '../../common/js/date'
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
        ratingFilter: {
          selectType: 2,
          onlyContent: false
        },
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      }
    },
    filters: {
      formatDate (value) {
        let date = new Date(value)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    },
    methods: {
      show () {
        this.showFlag = true
        this.ratingFilter.selectType = 2
        this.ratingFilter.onlyContent = false
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
      isShowRating (rateType, text) {
        if (this.ratingFilter.onlyContent && !text) {
          return false
        }
        if (this.ratingFilter.selectType === 2) {
          return true
        } else {
          return rateType === this.ratingFilter.selectType
        }
      }
    },
    props: {
      food: {
        type: Object,
        default () {
          return {
            ratings: []
          }
        }
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
  @import "../../common/stylus/mixin.styl"
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
    .rating-wrapper {
      padding: 0 18px;
      .rating-item {
        position: relative;
        padding: 16px 0;
        border-1px(rgba(7, 17, 27, 0.1));
        .user {
          position: absolute;
          right: 0;
          top: 16px;
          font-size: 0;
          line-height: 12px;
          .name {
            display: inline-block;
            vertical-align: top;
            font-size: 10px;
            color: rgb(147, 153, 159);
            marign-right: 6px;
          }
          .avatar {
            border-radius: 50%;
          }
        }
        .time {
          line-height: 12px;
          font-size: 10px;
          margin-bottom: 6px;
          color: rgb(147, 153, 159);
        }
        .text {
          line-height: 16px;
          font-size: 12px;
          color: rgb(7, 17, 27);
          i {
            margin-right: 4px;
            line-height: 16px;
            font-size: 12px;
            &.icon-thumb_up {
              color: rgb(0, 160, 220);
            }
            &.icon-thumb_down {
              color: rgb(147, 153, 159);
            }
          }
        }
      }
      .no-rating {
        padding: 16px 0;
        color: rgb(7, 17, 27);
        line-height: 24px;
      }
    }
  }
</style>
