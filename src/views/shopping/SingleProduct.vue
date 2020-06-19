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
            <div class="form-row">
                <div class="offset-md-1 col-md-5">
                    <img :src="product.imageUrl" class="img-fluid rounded" alt=""
                    style="height:450px" />
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
                        <div class="h4 text-right my-3 text-gold">
                            小計
                            <strong>{{ product.buyNum * product.price }}</strong>元
                        </div>
                        <button type="button" class="btn btn-primary text-white my-3"
                            @click="addtoCart(product.id, product.buyNum)">
                            <i class="fas fa-spinner fa-spin"
                                v-if="product.id === status.loadingItem">
                            </i>
                            <i class="fas fa-cart-plus"></i>
                            購物車
                        </button>
                </div>
            </div>
        </div>
        <!-- <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{product.title}}</h5>
                        <button type="button"
                            class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img :src="product.imageUrl" class="img-fluid" alt=""
                                style="height:250px" />
                        <blockquote class="blockquote mt-3">
                        <p class="mb-0 text-left">{{ product.content }}</p>
                        <footer
                            class="blockquote-footer text-right"
                            >
                            {{ product.description }}
                        </footer>
                        </blockquote>
                        <div class="d-flex justify-content-between align-items-baseline">
                            <del class="h6 text-muted">
                                {{product.origin_price? `原價${product.origin_price}元` : '' }}
                            </del>
                            <div class="h6">特價{{product.price}}元</div>
                        </div>
                        <select class="form-control mt-3" v-model="product.buyNum">
                            <option value="" disabled selected>Select your option</option>
                            <option :value="num" v-for="num in 5" :key="num">
                                選購 {{num}}*{{product.unit}}
                            </option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <div class="text-muted text-nowrap mr-3">
                            小計
                            <strong>{{ product.num * product.price }}</strong> 元
                        </div>
                        <button type="button" class="btn btn-primary text-white"
                            @click="addtoCart(product.id, product.buyNum)">
                            <i class="fas fa-spinner fa-spin"
                                v-if="product.id === status.loadingItem">
                            </i>
                            <i class="fas fa-cart-plus"></i>
                            購物車
                        </button>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'SingleProduct',
    data(){
        return {
            product: {},
            status: {
                loadingItem: '',
            },
            productId: '',
            selected: '請選購商品數量',
        }
    }, 
    computed: {
        ...mapGetters(['cart', 'isLoading']),
    },
    methods:{
        ...mapActions(['getCart']),
        getProduct(productId) {
            const api = `https://vue-course-api.hexschool.io/api/fan630/product/${productId}`;
            this.status.loadingItem = productId;
            this.$http.get(api).then((response) => {
                if(response.data.success){
                    this.product = response.data.product;
                    this.$set(this.product, 'buyNum', 1);
                    this.status.loadingItem = '';
                    // $('#productModal').modal('show');
                    // this.$router.push(`/shop/${response.data.product.id}`)
                }
            });
        },
        addtoCart(id, qty = 1) {
            this.status.loadingItem = id;
            this.$store.dispatch('addtoCart', { id, qty });
            //$('#productModal').modal('hide');
            this.status.loadingItem = '';
        },
    },
    created(){
        this.productId = this.$route.params.productId
        this.getProduct(this.productId);
        this.getCart();
    }
};
</script>

<style lang="scss" scoped>
    .breadcrumb{
        background-color: transparent;
    }

</style>
