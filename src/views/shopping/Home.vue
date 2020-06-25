<template>
    <div>
        <header>
            <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
            >
            <ol class="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                ></li>
            </ol>
            <!-- 圖片位置 -->
            <div class="carousel-inner">
                <div class="carousel-item header-carousel-item bg-cover"
                    :style="{backgroundImage: `url(https://images.unsplash.com/photo-1539192009026-4163d2da8925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80)`}">
                </div>
                <div class="carousel-item header-carousel-item bg-cover active"
                    :style="{backgroundImage: `url(https://images.unsplash.com/photo-1570380888376-ff4a100975f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80)`}">
                </div>
                <div class="carousel-item header-carousel-item bg-cover"
                    :style="{backgroundImage: `url(https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`}">
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </header>
        <!--四欄式-->
        <div class="container-fluid">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-10">
                    <div class="row mt-3">
                        <div class="col-md-3 col-6 box"
                            >
                            <router-link to="/shop">
                                <div class="innerbox bg-cover"
                                    style="background-image:url(https://images.unsplash.com/photo-1507310951869-fe0941df4dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
                                    >
                                        <div class="overlay">
                                            <h2>所有品項</h2>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-3 col-6 box"
                            >
                            <router-link to="/shop">
                                <div class="innerbox bg-cover"
                                    style="background-image:url(https://images.unsplash.com/photo-1556720072-94ce7d90544c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)"
                                    >
                                        <div class="overlay">
                                            <h2>啤酒</h2>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-3 col-6 box"
                            >
                            <router-link to="/shop">
                                <div class="innerbox bg-cover"
                                    style="background-image:url(https://images.unsplash.com/photo-1559762817-7506931c90d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)"
                                    >
                                        <div class="overlay">
                                            <h2>公仔</h2>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-3 col-6 box"
                            >
                            <router-link to="/shop">
                                <div class="innerbox bg-cover"
                                    style="background-image:url(https://images.unsplash.com/photo-1569879973648-3181113d2d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80)"
                                    >
                                        <div class="overlay">
                                            <h2>其餘商品</h2>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- coupon -->
        <div class="container-fluid mb-3">
            <div class="row">
                <div class="col">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-10 d-flex">
                            <div class="py-3 flex-grow-1 bd-highlight">
                                <router-link to="/coupon" class="btn btn-secondary" href="#" role="button">
                                    立即領取Coupon
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--商品頁面-->
        <div class="container-fluid mb-3">
            <div class="row">
                <div class="col">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-10">
                            <swiper class="swiper" :options="swiperOption" ref="mySwiper">
                                <swiper-slide v-for="item in products" :key="item.id">
                                    <div class="card" @click="getSingleProductBtn(item.id)">
                                        <div class="u-item-img bg-cover" :style="{backgroundImage: `url(${item.imageUrl})`}">
                                            <a class="u-item-cover"
                                        >
                                                <div class="u-item-btn">See more</div>
                                            </a>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--訂閱-->
        <div class="container-fluid">
            <div class="form-row justify-content-center align-items-center">
                <div class="col-md-10">
                    <div class="subscribe bg-cover">
                        <div class="subscribe-item d-flex justify-content-center align-items-center flex-column my-3">
                            <div class="col-md-2">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group">
                                    <input type="text"
                                        class="form-control"
                                        placeholder="Enter your email address">
                                        <div class="input-group-append">
                                            <button class="btn btn-secondary" type="button">
                                                GO!
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         <GoTop/>
    </div>
</template>

<script>
import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';
import GoTop from '../../components/Gotop.vue';

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'

export default {
    name: 'Home',
    components: {
        GoTop,
        swiper,
        swiperSlide
    },
    data(){
        return{
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
                loop: true,
                on:{
                    click:function(){
                        this.getSingleProductBtn(productId)
                    }
                }, 
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    }
                },
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    computed: {
        ...mapGetters(['products','cart', 'isLoading']),
        swiper() {
          return this.$refs.mySwiper.swiper;
      }
    },
    methods: {
        ...mapActions(['getProducts','getCart']),
        getSingleProductBtn(productId) {
            this.$router.push({ path: `/shop/${productId}` });
        },
    },
    created(){
        this.getProducts()
    },
};

</script>

<style lang="scss">
    $gray-700:#495057;

    .bd-highlight{
        background-color: $gray-700;
        border-radius: 5px; 
    }

    .innerbox {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        text-align: center;
        cursor: pointer;
        border-radius: 5px;
        box-shadow:1px 2px 1px 1px $gray-700;
    }

    // 覆蓋的那一層
    .innerbox .overlay {
        position: absolute;
        overflow: hidden;
        width: 80%;
        height: 80%;
        left: 10%;
        top: 10%;
        border: 1px solid #ccc;
        transition: opacity 0.8, transform 0.35s;
        transform: scale(0,1);
    }

    .innerbox:hover .overlay {
        opacity: 1;
        filter: alpha(opacity=100);
        transform: scale(1);
    }

    .innerbox h2 {
        text-transform: uppercase;
        text-align: center;
        position: relative;
        font-size: 20px;
        background-color: transparent;
        color:#fff;
        line-height:200px;
        opacity: 0;
        filter: alpha(opacity=0);
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: translate3d(0,-100%,0);
        transform: translate3d(0,-100%,0);
    }

    .innerbox a, .innerbox p {
        color: #fff;
        line-height:200px;
        opacity: 0;
        filter: alpha(opacity=0);
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0);
    }

    .innerbox:hover a, .innerbox:hover p, .innerbox:hover h2 {
        line-height:200px;
        opacity: 1;
        filter: alpha(opacity=100);
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
</style>

