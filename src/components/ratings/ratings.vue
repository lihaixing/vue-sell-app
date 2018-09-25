<template>
  <div class="ratings" ref="ratingsWrapper">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.ra}}</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star class="star" :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="deliveryTime">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingSelect :ratingFilter="ratingFilter" :desc="desc" :ratings="ratings"></ratingSelect>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="rating in ratings" v-show="isShowRating(rating.rateType,rating.text)">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar" alt="">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show="rating.recommend&&rating.recommend.length">
                <i class="icon-thumb_up"></i>
                <span class="recommend-item" v-for="recommend in rating.recommend">{{recommend}}</span>
              </div>
              <div class="time">{{formatDate(rating.rateTime,'yyyy-MM-dd HH:mm:ss')}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import star from '../star/star'
  import split from '../split/split'
  import ratingSelect from '../ratingSelect/ratingSelect'
  import formatDate from '../../common/js/date'

  export default {
    name: 'ratings',
    data () {
      return {
        ratings: [],
        ratingFilter: {
          selectType: 2,
          onlyContent: false
        },
        desc: {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        }
      }
    },
    methods: {
      formatDate: formatDate,
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
      seller: {
        type: Object
      }
    },
    components: {
      star,
      split,
      ratingSelect
    },
    created () {
      this.$http.get('http://yapi.demo.qunar.com/mock/20004/ratings').then((res) => {
        res = res.body
        if (res.errno === 0) {
          // 这是异步的
          this.ratings = res.ratings
          // 表示dom更新完成之后执行
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.ratingsWrapper, {
              click: true
            })
          })
        }
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .ratings {
    position: absolute;
    width: 100%;
    top: 174px;
    bottom: 0;
    left: 0;
    overflow: hidden;
    .overview {
      display: flex;
      padding: 18px 0;
      .overview-left {
        flex: 0 0 137px;
        width: 137px;
        border-right: 1px solid rgba(7, 17, 27, 0.1);
        text-align: center;
        padding: 6px 0;
        @media only screen and (max-width: 320px) {
          flex: 0 0 120px;
          width: 120px;
        }
        .score {
          line-height: 28px;
          font-size: 24px;
          color: rgb(255, 153, 0);
          margin-bottom: 6px;
        }
        .title {
          line-height: 12px;
          font-size: 12px;
          color: rgb(7, 17, 27);
          margin-bottom: 8px;
        }
        .rank {
          color: rgb(147, 153, 159);
          line-height: 10px;
          font-size: 10px;
        }
      }
      .overview-right {
        flex: 1;
        padding: 6px 0 6px 24px;
        .score-wrapper {
          line-height: 18px;
          margin-bottom: 8px;
          font-size: 0;
          .title {
            font-size: 12px;
            color: rgb(7, 17, 27);
            vertical-align: top;
          }
          .star {
            display: inline-block;
            margin: 0 12px;
            vertical-align: top;
          }
          .score {
            color: rgb(255, 153, 0);
            font-size: 12px;
            vertical-align: top;
          }
        }
        .delivery-wrapper {
          line-height: 18px;
          font-size: 0;
          .title {
            font-size: 12px;
            color: rgb(7, 17, 27);
          }
          .deliveryTime {
            color: rgb(147, 153, 159);
            font-size: 12px;
            margin-left: 12px;
          }
        }
      }
    }
    .rating-wrapper {
      padding: 0 18px;
      .rating-item {
        display: flex;
        padding: 18px 0;
        border-1px(rgba(7, 17, 27, 0.1));
        .avatar {
          flex: 0 0 28px;
          width: 28px;
          margin-right: 12px;
          img {
            border-radius: 50%;
          }
        }
        .content {
          position: relative;
          flex: 1;
          .name {
            margin-bottom: 4px;
            line-height: 12px;
            font-size: 10px;
            color: rgb(7, 17, 27);
          }
          .star-wrapper {
            margin-bottom: 6px;
            font-size: 0;
            .star {
              display: inline-block;
              margin-right: 6px;
            }
            .delivery {
              font-size: 12px;
            }
          }
          .text {
            line-height: 18px;
            font-size: 12px;
            margin-bottom: 8px;
            color: rgb(7, 17, 27);
          }
          .recommend {
            line-height: 16px;
            font-size: 0;
            .icon-thumb_up, .recommend-item {
              display: inline-block;
              margin: 0 8px 4px 0;
              font-size: 9px;
            }
            .icon-thumb_up {
              color: rgb(0, 160, 220);
            }
            .recommend-item {
              padding: 0 6px;
              border: 1px solid rgba(7, 17, 27, 0.1);
              border-radius: 1px;
              color: rgb(147, 153, 159);
              background: #FFF;
            }
          }
          .time{
            font-size: 12px;
            color: #93999f;
          }
        }
      }
    }
  }
</style>
