<template>
  <div class="seller" ref="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc border-1px">
          <star :size="36" :score="seller.score"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}元</span>
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}元</span>
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}分钟</span>
            </div>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul class="supports" v-if="seller.supports">
          <li class="support-item border-1px" v-for="item in seller.supports">
            <span class="icon" :class="classMap[item.type]"></span>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList">
            <li class="pic-item" v-for="pic in seller.pics">
              <img :src="pic" width="120" height="90" alt="">
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import star from '../star/star'
  import split from '../split/split'

  export default {
    name: 'seller',
    data () {
      return {
        classMap: []
      }
    },
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      star,
      split
    },
    methods: {
      scrollInit () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.seller, {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      },
      picScrollInit () {
        let width = (120 + 6) * (this.seller.pics.length) - 6
        this.$refs.picList.style.width = width + 'px'
        if (!this.scrollPics) {
          this.scrollPics = new BScroll(this.$refs.picWrapper, {
            scrollX: true,
            click: true
          })
        } else {
          this.scrollPics.refresh()
        }
      }
    },
    created () {
      // dom加载完成
      console.log(1)
    },
    mounted () {
      // dom渲染完成
      console.log(2)
      this.scrollInit()
      this.picScrollInit()
    },
    watch: {
      seller () {
        console.log(3)
        this.classMap = ['decrease', 'discount', 'guarantee', 'special', 'invoice']
        // 同步
        this.$nextTick(() => {
          this.scrollInit()
          this.picScrollInit()
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .seller {
    position: absolute;
    width: 100%;
    top: 174px;
    bottom: 0;
    left: 0;
    overflow: hidden;
    .overview {
      padding: 18px;
      .title {
        color: rgb(7, 17, 27);
        margin-bottom: 8px;
        font-size: 14px;
        line-height: 14px;
      }
      .desc {
        font-size: 0;
        padding-bottom: 18px;
        line-height: 18px;
        border-1px(rgba(7, 17, 27, 0.1));
        .star {
          display: inline-block;
          margin-right: 8px;
          vertical-align: top;
        }
        .text {
          display: inline-block;
          margin-right: 16px;
          font-size: rgb(77, 85, 93);
          vertical-align: top;
          font-size: 12px;
        }
      }
      .remark {
        display: flex;
        padding-top: 18px;
        .block {
          flex: 1;
          text-align: center;
          border-right: 1px solid rgba(7, 17, 27, 0.1);
          &:last-child {
            border: none;
          }
        }
      }
    }
    .bulletin {
      padding: 18px 18px 0 18px;
      .title {
        color: rgb(7, 17, 27);
        margin-bottom: 8px;
        font-size: 14px;
        line-height: 14px;
      }
      .content-wrapper {
        padding: 0 12px 16px 12px;
        border-1px(rgba(7, 17, 27, 0.1));
        .content {
          line-height: 24px;
          font-size: 12px;
        }
      }
      .supports {
        .support-item {
          padding: 16px 12px;
          font-size: 0;
          .icon {
            vertical-align: top;
            background-size: 16px 16px;
            display: inline-block;
            width: 16px;
            height: 16px;
            background-repeat: no-repeat;
            margin-right: 6px;
            &.decrease {
              bg-image('decrease_4');
            }
            &.discount {
              bg-image('discount_4');
            }
            &.guarantee {
              bg-image('guarantee_4');
            }
            &.invoice {
              bg-image('invoice_4');
            }
            &.special {
              bg-image('special_4');
            }
          }
          .text {
            font-size: 12px;
            line-height: 16px;
          }
        }
      }
    }
    .pics {
      padding: 18px;
      .title {
        color: rgb(7, 17, 27);
        margin-bottom: 12px;
        font-size: 14px;
        line-height: 14px;
      }
      .pic-wrapper {
        width: 100%;
        overflow: hidden;
        //超出不折行
        white-space: nowrap;
        .pic-list {
          font-size: 0;
          .pic-item {
            display: inline-block;
            margin-right: 6px;
            width: 120px;
            height: 90px;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
</style>
