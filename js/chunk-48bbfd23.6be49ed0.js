(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48bbfd23"],{"367e":function(o,t,s){"use strict";var c=s("7be7"),i=s.n(c);i.a},"7be7":function(o,t,s){},ab2c:function(o,t,s){"use strict";s.r(t);var c=function(){var o=this,t=o.$createElement,s=o._self._c||t;return s("div",{staticClass:"coupon"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title my-5"},[o._v("Click one and get your coupon")]),s("div",{staticClass:"row"},o._l(o.collection,(function(t){return s("div",{key:t.id,staticClass:"col-md-4 mb-4"},[s("div",{staticClass:"card"},[s("vue-flipcard",{ref:"flipcard",refInFor:!0,attrs:{width:343,disable:"disable",direction:"vertical"}},[s("div",{staticClass:"card-body front bg-cover",staticStyle:{height:"100%",width:"100%"},style:{backgroundImage:"url("+t.img+")"},attrs:{slot:"front"},on:{click:function(s){return o.onManualFlip(t.id,o.isFlip,t.coupon.couponCode)}},slot:"front"}),s("div",{staticClass:"card-body back",staticStyle:{height:"100%",width:"100%"},attrs:{slot:"back"},on:{click:function(s){return o.onManualFlip(t.id)}},slot:"back"},[s("div",{staticClass:"card-text text-center"},[s("div",{staticClass:"title"},[o._v("恭喜你！")]),s("p",[o._v("您的coupon優惠碼為:"+o._s(t.coupon.couponCode))]),s("span",[s("strong",{class:[Number(t.coupon.discount)>25?"red":""]},[o._v(" 折扣幅度 :"+o._s(t.coupon.discount)+"% ")])]),s("div",{staticClass:"mt-3"},[s("button",{staticClass:"btn btn-outline-success mr-2",on:{click:function(t){return t.stopPropagation(),o.backtocustomer(t)}}},[o._v("我要使用優惠券 ")])])])])])],1)])})),0)])])},i=[],n=s("56d7"),e={name:"Coupon",data:function(){return{collection:[{id:1,img:"https://source.unsplash.com/250x250/?beer",coupon:{couponCode:"beer",discount:"10"}},{id:2,img:"https://source.unsplash.com/250x250/?bottle",coupon:{couponCode:"bottle",discount:"30"}},{id:3,img:"https://source.unsplash.com/250x250/?pub",coupon:{couponCode:"longtimenosee",discount:"40"}},{id:4,img:"https://source.unsplash.com/250x250/?brewery",coupon:{couponCode:"brewery",discount:"30"}},{id:5,img:"https://source.unsplash.com/250x250/?doll",coupon:{couponCode:"doll",discount:"50"}},{id:6,img:"https://source.unsplash.com/250x250/?poker",coupon:{couponCode:"game",discount:"30"}},{id:7,img:"https://source.unsplash.com/250x250/?movie",coupon:{couponCode:"movie",discount:"20"}},{id:8,img:"https://source.unsplash.com/250x250/?taipei",coupon:{couponCode:"taipei",discount:"30"}},{id:9,img:"https://source.unsplash.com/250x250/?basketball",coupon:{couponCode:"fanbeer",discount:"50"}}],lists:[],isFlip:!1,couponCode:""}},methods:{onManualFlip:function(o,t,s){!1===this.isFlip?(this.$refs.flipcard[o-1].flip(),this.isFlip=!0,this.couponCode=s):this.$bus.$emit("message:push","已經抽過一次囉~","danger")},backtocustomer:function(){var o=this;setTimeout((function(){n["eventBus"].$emit("getCouponed",o.couponCode)}),1e3),this.$router.push("/cart")}}},u=e,a=(s("367e"),s("2877")),d=Object(a["a"])(u,c,i,!1,null,"0465bc9f",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-48bbfd23.6be49ed0.js.map