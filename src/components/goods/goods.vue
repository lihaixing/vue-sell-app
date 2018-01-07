<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item" v-for="(item,index) in goods" :class="{'active':(index==currentIndex)}"
            @click="selectMenu(index)">
          <span class="text border-1px">
            <span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li class="food-list food-list-hook" v-for="item in goods">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="food-item border-1px" v-for="food in item.foods">
              <div class="icon">
                <img width="57" height="57" :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cart-control-wrapper">
                  <cart-control :food="food" @add-goods="_drop"></cart-control>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shop-cart ref="shopCartCom" :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice"
               :minPrice="seller.minPrice"></shop-cart>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import shopCart from '../shopCart/shopCart'
  import cartControl from '../cartControl/cartControl'

  export default {
    name: 'goods',
    data () {
      return {
        goods: [],
        classMap: [],
        listHeight: [],
        scrollY: 0
      }
    },
    computed: {
      currentIndex () {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i + 1]
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i
          }
        }
        return 0
      },
      selectFoods () {
        let foods = []
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food)
            }
          })
        })
        return foods
      }
    },
    components: {
      shopCart,
      cartControl
    },
    props: {
      seller: {
        type: Object
      }
    },
    methods: {
      _initScroll () {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        })
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3
        })
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      _calculateHeight () {
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      },
      selectMenu (index) {
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        this.foodsScroll.scrollToElement(foodList[index], 300)
      },
      _drop (target) {
        this.$nextTick(() => {
          this.$refs.shopCartCom.drop(target)
        })
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'guarantee', 'special', 'invoice']
      this.$http.get('/api/goods').then((res) => {
        res = res.body
        if (res.errno === 0) {
          // 这是异步的
          this.goods = res.goods
          // 表示dom更新完成之后执行
          this.$nextTick(() => {
            this._initScroll()
            this._calculateHeight()
          })
        }
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .goods {
    display: flex;
    position: absolute;
    top: 174px;
    width: 100%;
    bottom: 46px;
    overflow: hidden;
    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px;
      background: #f3f5f7;
      .menu-item {
        //垂直居中
        display: table;
        height: 54px;
        width: 56px;
        line-height: 14px;
        padding: 0 12px;
        &.active {
          position: relative;
          margin-top: -1px;
          z-index: 10;
          background: #FFF;
          font-weight: 700;
          .text {
            border-none();
          }
        }
        .icon {
          vertical-align: top;
          background-size: 12px 12px;
          display: inline-block;
          width: 12px;
          height: 12px;
          background-repeat: no-repeat;
          margin-right: 2px;
          &.decrease {
            bg-image('decrease_3');
          }
          &.discount {
            bg-image('discount_3');
          }
          &.guarantee {
            bg-image('guarantee_3');
          }
          &.invoice {
            bg-image('invoice_3');
          }
          &.special {
            bg-image('special_3');
          }
        }
        .text {
          font-size: 12px;
          line-height: 14px;
          vertical-align: middle;
          display: table-cell;
          border-1px(rgba(7, 17, 27, 0.1));
        }
      }
    }
    .foods-wrapper {
      flex: 1;
      .food-list {
        .title {
          padding-left: 14px;
          height: 26px;
          line-height: 26px;
          border-left: 2px solid #d9dde1;
          font-size: 12px;
          color: rgb(147, 153, 159);
          background: #f3f5f7;
        }
        .food-item {
          display: flex;
          margin: 18px;
          padding-bottom: 18px;
          border-1px(rgba(7, 17, 27, 0.1));
          &:last-child {
            border-none();
            margin-bottom: 0;
          }
          .icon {
            flex: 0, 0, 57px;
            margin-right: 10px;
          }
          .content {
            flex: 1;
            .name {
              font-size: 14px;
              margin: 2px 0 8px 0;
              line-height: 14px;
              color: rgb(7, 17, 27);
            }
            .desc, .extra {
              line-height: 10px;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
            .desc {
              margin-bottom: 8px;
              line-height: 12px;
            }
            .extra {
              margin-bottom: 8px;
              .count {
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
            .cart-control-wrapper {
              position: absolute;
              right: 0;
              bottom: 12px;
            }
          }
        }
      }
    }
  }
</style>
