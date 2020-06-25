<template>
    <div>
        <loading :active.sync="isLoading"></loading>
            <div class="jumbotron jumbotron-fluid bg-cover jumbotron-bg d-flex
                flex-column justify-content-center text-left">
            <div class="container bg-transparented">
                <h1 class="display-4">釀‧哲學</h1>
                <p>
                    最天然的不過濾，不滅菌，不添加非天然香料
                    堅持手工釀造，堅持小批量生產，堅持自然發酵
                    自有配方，自有設備，自有釀酒師，自有酵母農場
                </p>
            </div>
        </div>
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
                <div class="offset-md-1 col-md-5">
                    <img :src="product.imageUrl" class="img-fluid rounded" alt=""
                    style="height:80%; width:80%" 
                    />
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
                        <div class="h5">特價{{product.price}}元</div>
                    </div>

                        <select class="form-control mt-3" v-model="product.buyNum">
                            <option value="" disabled selected>Select your option</option>
                            <option :value="num" v-for="num in 5" :key="num">
                                選購 {{num}}{{product.unit}}
                            </option>
                        </select>

                        <div class="h4 text-right mt-3 mb-5">
                            小計
                            <strong>{{ product.buyNum * product.price }}</strong>元
                        </div>
                        <button type="button" class="btn btn-primary text-white my-3"
                            @click="addtoCart(product.id, product.buyNum)">
                            <i class="fas fa-cart-plus"></i>
                            加入購物車
                        </button>
                        <button type="button" class="btn btn-info text-white my-3 ml-1"
                            @click="addtoFavorite(product)" v-if="product.is_favorite == false">
                            <i class="fas fa-heart"></i>
                            加入我的最愛
                        </button>
                        <button type="button" class="btn btn-danger my-3 ml-1"
                            @click="removeFavorite(product)" v-else>
                            <i class="fas fa-heart"></i>
                            取消我的最愛
                        </button>
                </div>
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
                            <div class="card border-0 shadow h-100">
                                <div class="u-item-img bg-cover"
                                    style="height:250px"
                                    :style="{backgroundImage: `url(${item.imageUrl})`}"
                                    >
                                    <a class="u-item-cover" @click="getProduct(item.id)"
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
import { mapGetters, mapActions } from 'vuex';
import GoTop from '../../components/Gotop.vue';

export default {
    name: 'SingleProduct',
    components: {
        GoTop,
    },
    data(){
        return {
            product: {},
            productId: '',
            selected: '請選購商品數量',
            isFavorite: false
        }
    }, 
    computed: {
        ...mapGetters(['favorites','products','cart', 'isLoading']),
        relatedProduct(){
            return this.products.filter(item => item.category === this.product.category)
        }
    },
    methods:{
        ...mapActions(['getFavorite', 'addtoFavorite', 'removeFavorite' ,'getProducts','getCart']),
        getProduct(productId) {
            const api = `https://vue-course-api.hexschool.io/api/fan630/product/${productId}`;
            this.$http.get(api).then((response) => {
                if(response.data.success){
                    this.product = response.data.product;
                    this.$set(this.product, 'buyNum', 1);
                    this.$set(this.product, 'is_favorite', false)
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
        addtoFavorite(product){
            this.product.is_favorite = true;
            this.$store.dispatch('addtoFavorite',  product);
        },
        removeFavorite(product) {
            this.$store.dispatch('removeFavorite', product);
            this.product.is_favorite = false;
        },
    },
    created(){
        this.productId = this.$route.params.productId
        this.getProduct(this.productId);
    }
};
</script>

<style lang="scss" scoped>
    .form-row > .col {
        padding: 0 1px; 
    }
</style>
