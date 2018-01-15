<template>
  <div class="rating-select">
    <div class="rating-type">
      <span class="block positive" :class="{'active':ratingFilter.selectType===2}"
            @click.stop="select(2)">{{desc.all}}<span
        class="count">{{ratings.length}}</span></span>
      <span class="block positive" :class="{'active':ratingFilter.selectType===0}" @click.stop="select(0)">{{desc.positive}}<span
        class="count">{{positives.length}}</span></span>
      <span class="block negative" :class="{'active':ratingFilter.selectType===1}" @click.stop="select(1)">{{desc.negative}}<span
        class="count">{{negatives.length}}</span></span>
    </div>
    <div class="switch" :class="{'on':ratingFilter.onlyContent}" @click="toggleContent">
      <i class="icon-check_circle"></i>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'rating-select',
    data () {
      return {}
    },
    computed: { // sType: this.selectType,
      // oContent: this.onlyContent
      positives () {
        return this.ratings.filter((rating) => {
          return rating.rateType === 0
        })
      },
      negatives () {
        return this.ratings.filter((rating) => {
          return rating.rateType === 1
        })
      }
    },
    methods: {
      select (type) {
        this.ratingFilter.selectType = type
      },
      toggleContent () {
        this.ratingFilter.onlyContent = !this.ratingFilter.onlyContent
      }
    },
    props: {
      ratings: {
        type: Array,
        default () {
          return []
        }
      },
      ratingFilter: {
        type: Object,
        default () {
          return {}
        }
      },
      desc: {
        type: Object,
        default () {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .rating-select {
    .rating-type {
      padding: 18px 0;
      margin: 0 18px;
      border-1px(rgba(7, 17, 27, 0.1));
      font-size: 0;
      .block {
        display: inline-block;
        padding: 8px 12px;
        border-radius: 1px;
        margin-right: 8px;
        color: rgb(77, 85, 93);
        font-size: 12px;
        &.active {
          color: #FFF;
        }
        &.positive {
          background: rgba(0, 160, 220, 0.2);
          &.active {
            background: rgb(0, 160, 220);
          }
        }
        &.negative {
          background: rgba(77, 85, 93, 0.2);
          &.active {
            background: rgb(77, 85, 93);
          }
        }
        .count {
          font-size: 8px;
          margin-left: 2px;
        }
      }
    }
    .switch {
      padding: 12px 18px;
      line-height: 24px;
      font-size: 0;
      color: rgb(147, 153, 159);
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      &.on {
        color: #00c580;
      }
      .icon-check_circle {
        margin-right: 4px;
        font-size: 24px;
        display: inline-block;
        vertical-align: top;
      }
      .text {
        font-size: 12px;
        display: inline-block;
        vertical-align: top;
      }
    }
  }
</style>
