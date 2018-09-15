webpackJsonp([0],{0:function(t,s){},"0+UM":function(t,s){},"3xgK":function(t,s){},"4d5x":function(t,s){},BMz4:function(t,s){},Jm4l:function(t,s){},JnMg:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("/ocq"),n=e("8+8L"),r={name:"star",props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t){return s("span",{staticClass:"star-item",class:t})}))},staticRenderFns:[]};var l=e("VU/8")(r,o,!1,function(t){e("3xgK")},"data-v-358aba0e",null).exports,c={name:"header",data:function(){return{classMap:[],detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},props:{seller:{type:Object}},components:{star:l},created:function(){this.classMap=["decrease","discount","guarantee","special","invoice"]}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,alt:"",width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]};var d={name:"app",components:{vHeader:e("VU/8")(c,v,!1,function(t){e("hozB")},"data-v-0269a87c",null).exports},data:function(){return{seller:{}}},created:function(){var t=this;this.$http.get("https://yapi-dev.ycdmm.com/mock/31/seller").then(function(s){0===(s=s.body).errno&&(t.seller=s.seller)})}},p={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("v-header",{attrs:{seller:this.seller}}),this._v(" "),s("div",{staticClass:"tab border-1px"},[s("div",{staticClass:"tab-item"},[s("router-link",{attrs:{to:{path:"/goods"}}},[this._v("商品")])],1),this._v(" "),s("div",{staticClass:"tab-item"},[s("router-link",{attrs:{to:{path:"/ratings"}}},[this._v("评论")])],1),this._v(" "),s("div",{staticClass:"tab-item"},[s("router-link",{attrs:{to:{path:"/seller"}}},[this._v("商家")])],1)]),this._v(" "),s("keep-alive",[s("router-view",{attrs:{seller:this.seller}})],1)],1)},staticRenderFns:[]};var u=e("VU/8")(d,p,!1,function(t){e("coVU")},null,null).exports,h=e("GQaK"),f=new i.a,_={name:"cart-control",props:{food:{type:Object}},methods:{addCart:function(t){this.food.count?this.food.count++:i.a.set(this.food,"count",1),f.$emit("tran",t.target)},decreaseCart:function(){event.stopPropagation(),this.food.count--}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cart-control"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("i",{staticClass:"icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCart(s)}}},[e("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]};var m=e("VU/8")(_,C,!1,function(t){e("Jm4l")},"data-v-dbf826a4",null).exports,g={name:"shop-cart",data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],listShow:!1}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t||(this.listShow=!1),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去结算"}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.el=t,e.show=!0,void this.dropBalls.push(e)}},toggleList:function(){var t=this;this.totalCount?(this.listShow=!this.listShow,this.listShow&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new h.a(t.$refs.listContent,{click:!0})})):this.listShow=!1},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},pay:function(t){this.totalPrice>=this.minPrice&&window.alert("支付"+this.totalPrice+"元")},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);return t.style.display="",t.style.webkitTransform="translate3d("+a+"px,"+n+"px,0)",void(t.style.transform="translate3d("+a+"px,"+n+"px,0)")}}},enter:function(t){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)"})},afterEnter:function(t){var s=this;this.$nextTick(function(){var e=s.balls[0];e&&(e.show=!1,t.style.display="none")})}},props:{deliveryPrice:{type:Number},minPrice:{type:Number},selectFoods:{type:Array}},components:{cartControl:m},created:function(){var t=this;f.$on("tran",function(s){t.drop(s)})}},w={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopCart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice)+"元")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",class:{enough:t.totalPrice>=t.minPrice},on:{click:function(s){s.stopPropagation(),t.pay(s)}}},[t._v("\n        "+t._s(t.payDesc)+"\n      ")]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s){return e("transition",{attrs:{name:"pwx"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"})])})),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shop-cart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cart-control-wrapper"},[e("cart-control",{attrs:{food:s}})],1)])}))])])])],1)]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:function(s){t.listShow=!1}}})])],1)},staticRenderFns:[]};var y=e("VU/8")(g,w,!1,function(t){e("0+UM")},"data-v-33dd9ba3",null).exports;var x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]};var b=e("VU/8")({name:"split"},x,!1,function(t){e("RzeI")},"data-v-a40f92a2",null).exports,k={name:"rating-select",data:function(){return{}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}},methods:{select:function(t){this.ratingFilter.selectType=t},toggleContent:function(){this.ratingFilter.onlyContent=!this.ratingFilter.onlyContent}},props:{ratings:{type:Array,default:function(){return[]}},ratingFilter:{type:Object,default:function(){return{}}},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}}},F={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rating-select"},[e("div",{staticClass:"rating-type"},[e("span",{staticClass:"block positive",class:{active:2===t.ratingFilter.selectType},on:{click:function(s){s.stopPropagation(),t.select(2)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.ratingFilter.selectType},on:{click:function(s){s.stopPropagation(),t.select(0)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.ratingFilter.selectType},on:{click:function(s){s.stopPropagation(),t.select(1)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.ratingFilter.onlyContent},on:{click:t.toggleContent}},[e("i",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var T=e("VU/8")(k,F,!1,function(t){e("JnMg")},"data-v-6ba0dfb3",null).exports,P={name:"food",data:function(){return{showFlag:!1,ratingFilter:{selectType:2,onlyContent:!1},desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},filters:{formatDate:function(t){new Date(t)}},methods:{show:function(){var t=this;this.showFlag=!0,this.ratingFilter.selectType=2,this.ratingFilter.onlyContent=!1,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new h.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t,s){i.a.set(t,"count",1),f.$emit("tran",s.target)},isShowRating:function(t,s){return!(this.ratingFilter.onlyContent&&!s)&&(2===this.ratingFilter.selectType||t===this.ratingFilter.selectType)}},props:{food:{type:Object,default:function(){return{ratings:[]}}}},components:{BScroll:h.a,cartControl:m,split:b,ratingSelect:T}},S={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"food"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image,alt:""}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cart-control-wrapper"},[e("cartControl",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count,expression:"!food.count"}],staticClass:"buy",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addFirst(t.food,s)}}},[t._v("加入购物车")])])],1)]),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("div",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingSelect",{attrs:{ratingFilter:t.ratingFilter,desc:t.desc,ratings:t.food.ratings}})],1),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings&&food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.isShowRating(s.rateType,s.text),expression:"isShowRating(rating.rateType,rating.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{width:"12",height:"12",src:s.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(s.rateTime))]),t._v(" "),e("p",{staticClass:"text"},[e("i",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text)+"\n            ")])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings||!food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)])])},staticRenderFns:[]};var $={name:"goods",data:function(){return{goods:[],classMap:[],listHeight:[],scrollY:0,selectedFood:{}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},components:{shopCart:y,cartControl:m,food:e("VU/8")(P,S,!1,function(t){e("Ps2I")},"data-v-75a34014",null).exports},props:{seller:{type:Object}},methods:{_initScroll:function(){var t=this;this.menuScroll=new h.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new h.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},selectMenu:function(t){var s=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook");this.foodsScroll.scrollToElement(s[t],300)},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopCartCom.drop(t)})},selectFood:function(t){this.selectedFood=t,this.$refs.foodInfo.show()}},created:function(){var t=this;this.classMap=["decrease","discount","guarantee","special","invoice"],this.$http.get("https://yapi-dev.ycdmm.com/mock/31/goods").then(function(s){0===(s=s.body).errno&&(t.goods=s.goods,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))})}},N={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{staticClass:"menu-item",class:{active:i==t.currentIndex},on:{click:function(s){t.selectMenu(i)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n        ")])])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item border-1px",on:{click:function(e){t.selectFood(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cart-control-wrapper"},[e("cart-control",{attrs:{food:s},on:{"add-goods":t._drop}})],1)])])}))])}))]),t._v(" "),e("shop-cart",{ref:"shopCartCom",attrs:{selectFoods:t.selectFoods,deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice}}),t._v(" "),e("food",{ref:"foodInfo",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]};var E=e("VU/8")($,N,!1,function(t){e("4d5x")},"data-v-649c3c49",null).exports,M={name:"ratings",data:function(){return{ratings:[],ratingFilter:{selectType:2,onlyContent:!1},desc:{all:"全部",positive:"满意",negative:"不满意"}}},methods:{isShowRating:function(t,s){return!(this.ratingFilter.onlyContent&&!s)&&(2===this.ratingFilter.selectType||t===this.ratingFilter.selectType)}},props:{seller:{type:Object}},components:{star:l,split:b,ratingSelect:T},created:function(){var t=this;this.$http.get("https://yapi-dev.ycdmm.com/mock/31/ratings").then(function(s){0===(s=s.body).errno&&(t.ratings=s.ratings,t.$nextTick(function(){t.scroll=new h.a(t.$refs.ratingsWrapper,{click:!0})}))})}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratingsWrapper",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.ra))])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{staticClass:"star",attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"deliveryTime"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingSelect",{attrs:{ratingFilter:t.ratingFilter,desc:t.desc,ratings:t.ratings}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.isShowRating(s.rateType,s.text),expression:"isShowRating(rating.rateType,rating.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"28",height:"28",src:s.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime)+"分钟")])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend&&rating.recommend.length"}],staticClass:"recommend"},[e("i",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"recommend-item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(s.rateTime))])])])}))])],1)])},staticRenderFns:[]};var U=e("VU/8")(M,R,!1,function(t){e("BMz4")},"data-v-c1784ef0",null).exports,H={name:"seller",data:function(){return{classMap:["decrease","discount","guarantee","special","invoice"],favorite:!1}},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},props:{seller:{type:Object}},components:{star:l,split:b},methods:{scrollInit:function(){this.scroll?this.scroll.refresh():this.scroll=new h.a(this.$refs.seller,{click:!0})},picScrollInit:function(){if(this.seller.pics){var t=126*this.seller.pics.length-6;this.$refs.picList.style.width=t+"px"}this.scrollPics?this.scrollPics.refresh():this.scrollPics=new h.a(this.$refs.picWrapper,{scrollX:!0,click:!0})},toggleFavorite:function(){this.favorite=!this.favorite}},created:function(){console.log(1)},mounted:function(){console.log(2),this.scrollInit(),this.picScrollInit()},watch:{seller:function(){var t=this;console.log(3),this.$nextTick(function(){t.scrollInit(),t.picScrollInit()})}}},I={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("i",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t){return e("li",{staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90",alt:""}})])}))])])],1)])},staticRenderFns:[]};var z=e("VU/8")(H,I,!1,function(t){e("immi")},"data-v-18f8e300",null).exports;i.a.config.productionTip=!1,i.a.use(a.a),i.a.use(n.a);var V=new a.a({mode:"history",linkActiveClass:"active",base:"/vue-sell-app/",routes:[{path:"/",redirect:"/goods"},{path:"/goods",component:E},{path:"/ratings",component:U},{path:"/seller",component:z}]});new i.a({el:"#app",router:V,template:"<App/>",components:{App:u}})},Ps2I:function(t,s){},RzeI:function(t,s){},coVU:function(t,s){},hozB:function(t,s){},immi:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.361f785f44d263be9e71.js.map