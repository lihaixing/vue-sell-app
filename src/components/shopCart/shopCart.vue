<template>
  <div>
    <div class="shopCart">
      <div class="content" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight':(totalCount>0)}">
              <i class="icon-shopping_cart"></i>
            </div>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{highlight:totalPrice>0}">￥{{totalPrice}}元</div>
          <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right" :class="{'enough':totalPrice >= minPrice}" @click.stop="pay">
          {{payDesc}}
        </div>
        <div class="ball-container">
          <transition name="pwx" v-for="ball in balls" @before-enter="beforeEnter"
                      @enter="enter"
                      @after-enter="afterEnter">
            <div class="ball" v-show="ball.show"></div>
          </transition>
        </div>
        <transition name="fold">
          <div class="shop-cart-list" v-show="listShow">
            <div class="list-header">
              <h1 class="title">购物车</h1>
              <span class="empty" @click="empty">清空</span>
            </div>
            <div class="list-content" ref="listContent">
              <ul>
                <li class="food" v-for="food in selectFoods">
                  <span class="name">{{food.name}}</span>
                  <div class="price"><span>￥{{(food.price)*(food.count)}}</span></div>
                  <div class="cart-control-wrapper">
                    <cart-control :food="food"></cart-control>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <transition name="fade">
      <div class="list-mask" v-show="listShow" @click="listShow=false"></div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bus from '../Bus'
  import BScroll from 'better-scroll'
  import cartControl from '../cartControl/cartControl'

  export default {
    name: 'shop-cart',
    data () {
      return {
        balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ],
        dropBalls: [],
        listShow: false
      }
    },
    computed: {
      totalPrice () {
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.price * food.count
        })
        return total
      },
      totalCount () {
        let totalCount = 0
        this.selectFoods.forEach((food) => {
          totalCount += food.count
        })
        // 驱动listShow
        if (!totalCount) {
          this.listShow = false
        }
        return totalCount
      },
      payDesc () {
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}元起送`
        } else if (this.totalPrice < this.minPrice) {
          return `还差￥${this.minPrice - this.totalPrice}元起送`
        } else {
          return '去结算'
        }
      }
    },
    methods: {
      drop (el) {
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i]
          if (!ball.show) {
            ball.el = el
            ball.show = true
            this.dropBalls.push(ball)
            return
          }
        }
      },
      toggleList () {
        if (!this.totalCount) {
          this.listShow = false
          return
        }
        this.listShow = !this.listShow
        if (this.listShow) {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.listContent, {
                click: true
              })
            } else {
              this.scroll.refresh()
            }
          })
        }
      },
      empty () {
        this.selectFoods.forEach((food) => {
          food.count = 0
        })
      },
      pay (event) {
        if (this.totalPrice >= this.minPrice) {
          window.alert(`支付${this.totalPrice}元`)
        }
      },
      beforeEnter: function (el) {
        let count = this.balls.length
        while (count--) {
          let ball = this.balls[count]
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect()
            let x = rect.left - 32
            let y = -(window.innerHeight - rect.top - 22)
            el.style.display = ''
            el.style.webkitTransform = `translate3d(${x}px,${y}px,0)`
            el.style.transform = `translate3d(${x}px,${y}px,0)`
            return
          }
        }
      },
      // 此回调函数是可选项的设置
      // 与 CSS 结合时使用
      enter: function (el) {
        /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight
        this.$nextTick(() => {
          el.style.webkitTransform = 'translate3d(0,0,0)'
          el.style.transform = 'translate3d(0,0,0)'
        })
        // done()
      },
      afterEnter: function (el) {
        this.$nextTick(() => {
          let ball = this.balls[0]
          if (ball) {
            ball.show = false
            el.style.display = 'none'
          }
        })
      }
    },
    props: {
      deliveryPrice: {
        type: Number
      },
      minPrice: {
        type: Number
      },
      selectFoods: {
        type: Array
      }
    },
    components: {
      cartControl
    },
    created () {
      var vm = this
      Bus.$on('tran', function (target) {
        vm.drop(target)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .pwx-enter-active {
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
  }

  .shopCart {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    height: 48px;
    background: #000;
    .content {
      display: flex;
      .content-left {
        flex: 1;
        background: #141d27;
        .logo-wrapper {
          display: inline-block;
          position: relative;
          top: -10px;
          margin: 0 12px;
          padding: 6px;
          width: 56px;
          height: 56px;
          box-sizing: border-box;
          vertical-align: top;
          border-radius: 50%;
          background: #141d27;
          .logo {
            background: #2b343c;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            text-align: center;
            i {
              line-height: 44px;
              color: #80858a;
              font-size: 24px;
            }
            &.highlight {
              background: rgb(0, 160, 220);
              i {
                color: #FFF;
              }
            }
          }
          .num {
            position: absolute;
            top: 0;
            right: 0;
            width: 24px;
            height: 16px;
            line-height: 16px;
            border-radius: 8px;
            text-align: center;
            font-size: 9px;
            font-weight: 700;
            color: #FFF;
            background: rgb(240, 20, 20);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
          }
        }
        .price {
          display: inline-block;
          line-height: 24px;
          margin-top: 12px;
          box-sizing: border-box;
          padding-right: 12px;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 16px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          &.highlight {
            color: #FFF;
          }
        }
        .desc {
          display: inline-block;
          margin: 12px 0 0 12px;
          line-height: 24px;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.4);
        }
      }
      .content-right {
        flex: 0 0 105px;
        width: 105px;
        background: #2b333b;
        color: rgba(255, 255, 255, 0.4);
        line-height: 48px;
        font-size: 12px;
        text-align: center;
        font-weight: 700;
        &.enough {
          background: #00b43c;
          color: #FFF;
        }
      }
      .ball-container {
        .ball {
          position: fixed;
          left: 32px;
          bottom: 22px;
          z-index: 200;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgb(0, 160, 220);
        }
      }
      .shop-cart-list {
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        transform: translate3d(0, -100%, 0);
        &.fold-enter,
        &.fold-leave-to {
          transform: translate3d(0, 0, 0);
        }
        &.fold-enter-active,
        &.fold-leave-active {
          transition: all 0.5s;
        }
        .list-header {
          height: 40px;
          line-height: 40px;
          padding: 0 18px;
          background: #f3f5f7;
          border-bottom: 1px solid rgba(7, 17, 27, 0.1);
          .title {
            float: left;
            font-size: 14px;
            color: rgb(7, 17, 27);
          }
          .empty {
            float: right;
            font-size: 12px;
            color: rgb(0, 160, 220);
          }
        }
        .list-content {
          padding: 0 18px;
          max-height: 217px;
          background: #fff;
          overflow: hidden;
          .food {
            position: relative;
            padding: 12px 0;
            box-sizing: border-box;
            border-1px(rgba(7, 17, 27, 0.1));
            .name {
              line-height: 24px;
              font-size: 14px;
              color: rgb(7, 17, 27);
            }
            .price {
              position: absolute;
              right: 90px;
              bottom: 12px;
              line-height: 24px;
              font-size: 14px;
              font-weight: 700;
              color: rgb(240, 20, 20);
            }
            .cart-control-wrapper {
              position: absolute;
              right: 0;
              bottom: 6px;
            }
          }
        }
      }
    }
  }

  .list-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    background: rgba(7, 17, 27, 0.6);
    backdrop-filter: blur(10px);
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
      background: rgba(7, 17, 27, 0);
    }
    &.fade-enter-active,
    &.fade-leave-active {
      transition: all 0.5s;
    }
  }
</style>
