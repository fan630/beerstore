<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/shop">Shop</router-link></li>
                    <li class="breadcrumb-item active">
                        {{product.category}}
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
                </ol>
            </nav>
            <div class="row">
                <div class="col-md-5">
                    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                     <swiper-slide class="slide-1">
                        <img :src="product.imageUrl" class="rounded" data-image="img1.jpg" alt=""
                          style="height:90%; width:100%"/>
                      </swiper-slide>
                     <swiper-slide class="slide-2">
                        <img :src="product.imageUrlOne" class="rounded" data-image="img1.jpg" alt=""
                          style="height:90%; width:100%"/>
                      </swiper-slide>
                     <swiper-slide class="slide-3">
                        <img :src="product.imageUrlTwo" class="rounded" data-image="img1.jpg" alt=""
                          style="height:90%; width:100%"/>
                      </swiper-slide>
                    </swiper>
                </div>
                <div class="col-md-6 text-md-left text-center">
                    <h3>{{product.title}}</h3>
                    <div class="badge"
                        :class=
                        "[product.category == '啤酒'?'badge-info' : 'badge-warning']"
                        >
                        {{product.category}}
                    </div>
                    <blockquote class="blockquote text-right">
                        <p class="text-left">{{ product.content }}</p>
                         <footer class="blockquote-footer">
                             <cite>{{ product.description }}</cite>
                        </footer>
                    </blockquote>
                    <div class="d-flex justify-content-between align-items-baseline">
                        <del class="h6 text-muted">
                            {{product.origin_price? `原價${product.origin_price}元` : '' }}
                        </del>
                        <span>特價{{product.price}}元</span>
                    </div>
                    <select class="form-control mt-3" v-model="product.buyNum">
                        <option value="" disabled selected>Select your option</option>
                        <option :value="num" v-for="num in 5" :key="num">
                            選購 {{num}}{{product.unit}}
                        </option>
                    </select>
                    <div class="h5 text-right mt-3 mb-4">
                        小計
                        <strong>{{ product.buyNum * product.price }}</strong>元
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <div class="form-row">
                      <swiper class="swiper gallery-thumbs"
                          :options="swiperOptionThumbs" ref="swiperThumbs">
                      <div class="col-md-6">
                        <swiper-slide class="slide-1">
                          <img :src="product.imageUrl" class="rounded" data-image="img1.jpg" alt=""
                             @click="bigSize" style="height:90%; width:100%"/>
                        </swiper-slide>
                      </div>
                      <div class="col-md-6">
                          <swiper-slide class="slide-2">
                            <img :src="product.imageUrlOne" class="rounded" alt=""
                              id="bigImage" data-image="img2.jpg"
                              style="height:80%; width:100%"
                              />
                          </swiper-slide>
                      </div>
                      <div class="col-md-6">
                          <swiper-slide class="slide-3">
                            <img :src="product.imageUrlTwo" class="rounded" alt=""
                              id="bigImage" data-image="img2.jpg"
                              style="height:80%; width:100%"
                              />
                          </swiper-slide>
                        <div class="swiper-button-next swiper-button-white"
                          slot="button-next"></div>
                        <div class="swiper-button-prev swiper-button-white"
                        slot="button-prev"></div>
                      </div>
                      </swiper>
                    </div>
                </div>
              <div class="col-md-6">
                <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                        <div class="text-left primary-dark"
                          data-toggle="collapse" data-target="#collapseOne">
                          產品細節
                        </div>
                    </div>
                    <div id="collapseOne" class="collapse"
                      aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div class="card-body text-left text-white">
                        {{product.details}}
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                        <div class="text-left primary-dark"
                          data-toggle="collapse" data-target="#collapseTwo">
                          {{product.FAQ}}
                        </div>
                    </div>
                    <div id="collapseTwo" class="collapse"
                      aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div class="card-body text-left text-white">
                        {{product.answer}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                <div class="btn-group mt-3" role="group" aria-label="">
                    <button type="button" class="btn btn-primary text-white text-left"
                        @click="addtoCart(product.id, product.buyNum)">
                        <i class="fas fa-cart-plus"></i>
                        加入購物車
                    </button>
                    <button type="button" class="btn btn-info text-white"
                        @click="addtoFavorite(product)" v-if="product.is_favorite == false">
                        <i class="fas fa-heart"></i>
                        加入我的最愛
                    </button>
                    <button type="button" class="btn btn-danger"
                        @click="removeFavorite(product)" v-else>
                        <i class="fas fa-heart"></i>
                        取消我的最愛
                    </button>
                </div>
            <h3 class="text-left" v-if="this.relatedProduct.length > 2">相關產品</h3>
            <h3 class="text-left" v-else>沒有相關產品</h3>
            <hr>
        </div>
        <div class="container-fluid my-3">
            <div class="row">
                <div class="offset-md-1 col-md-10">
                    <div class="form-row" v-if="this.relatedProduct.length > 2">
                        <div class="col-md mb-4 col-4" style="padding: 0 1px"
                            v-for="item in relatedProduct" :key="item.id">
                            <div class="card">
                                <div class="u-item-img bg-cover"
                                    style="height:250px"
                                    :style="{backgroundImage: `url(${item.imageUrl})`}"
                                    >
                                    <a class="u-item-cover"
                                    @click="getProduct(item.id); scrollToTop()"
                                >
                                        <div class="u-item-btn">See more</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row" v-else>
                    </div>
                </div>
            </div>
        </div>
        <GoTop/>
    </div>
</template>

<script>
// import $ from 'jquery';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { mapGetters, mapActions } from 'vuex';
import GoTop from '../../components/GoTop.vue';
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css';

export default {
  name: 'SingleProduct',
  components: {
    GoTop,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      product: {},
      productId: '',
      selected: '請選購商品數量',
      isFavorite: false,
      fullWidth: 0,
      image: [],
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  computed: {
    ...mapGetters(['favorites', 'products', 'cart', 'isLoading']),
    relatedProduct() {
      return this.products.filter((item) => item.category === this.product.category);
    },
  },
  methods: {
    ...mapActions(['getFavorite', 'addtoFavorite', 'removeFavorite', 'getProducts', 'getCart']),
    getProduct(productId) {
      const api = `https://vue-course-api.hexschool.io/api/fan630/product/${productId}`;
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.product = response.data.product;
          this.$set(this.product, 'buyNum', 1);
          this.$set(this.product, 'is_favorite', false);
          this.favorites.forEach((item) => {
            if (this.productId === item.id) {
              this.product.is_favorite = true;
            }
          });
        }
      });
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch('addtoCart', { id, qty });
      setTimeout(() => {
        this.$router.push('/cart');
      }, 1500);
    },
    addtoFavorite(product) {
      this.product.is_favorite = true;
      this.$store.dispatch('addtoFavorite', product);
    },
    removeFavorite(product) {
      this.$store.dispatch('removeFavorite', product);
      this.product.is_favorite = false;
    },
    scrollToTop() {
      if (this.fullWidth <= 500) {
        setTimeout(() => {
          window.scrollTo(0, 400);
        }, 1800);
      }
    },
    bigSize() {
      // this.image.push(this.$data.product.imageUrl,
      //   this.$data.product.imageUrlOne, this.$data.product.imageUrlTwo);
      // console.log(this.image);
      // for (let i = 0; i < this.image.length; i += 1) {
      //   console.log(this.image[1]);
      //   this.image[i].$on('click', () => {
      //     $('bigImage').src = this.dataset.image;
      //   });
      // }
    },
  },
  created() {
    this.productId = this.$route.params.productId;
    this.getProduct(this.productId);
  },
  mounted() {
    const vm = this;
    vm.fullWidth = window.innerWidth;
    window.onresize = () => {
      vm.fullWidth = window.innerWidth;
    };
    // this.$nextTick(() => {
    //   const swiperTop = this.$refs.swiperTop.$swiper;
    //   const swiperThumbs = this.$refs.swiperThumbs.$swiper;
    //   console.log(this.$refs.swiperTop, swiperThumbs);
    //   swiperTop.controller.control = swiperThumbs;
    //   swiperThumbs.controller.control = swiperTop;
    // });
  },
  updated() {
    if (this.isInit === 1) {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper;
        const swiperThumbs = this.$refs.swiperThumbs.swiper;
        console.log(this.$refs);
        swiperTop.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperTop;
      });
      this.isInit = 0;
    }
  },
};
</script>

<style lang="scss" scoped>
    $primary:#dba377;
    $gray-700: #495057;
    $dark-primary: darken($primary, 20%);

    .form-row > .col {
        padding: 0 1px;
    }
    .card{
      background-color:$gray-700;
    }
    .btn:focus{
      box-shadow: none;
    }
    .card-header{
      font-style:italic;
    }
    .primary-dark{
      color: $dark-primary;
    }
    .swiper {
    .swiper-slide {
      background-size: cover;
      background-position: center;

      &.slide-1 {
        background-image:url('../../assets/images/ghost.jpg');
      }
    }
    }
</style>
