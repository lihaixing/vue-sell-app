<template>
  <div class="shopCart">
    <div class="content">
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
      <div class="content-right" :class="{'enough':totalPrice >= minPrice}">
        {{payDesc}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'shop-cart',
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
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

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
    }

  }
</style>
