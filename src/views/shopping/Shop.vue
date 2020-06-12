<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="jumbotron jumbotron-fluid bg-cover jumbotron-bg d-flex flex-column justify-content-center text-left">
            <div class="container bg-transparented">
                <h1 class="display-4">釀‧哲學</h1>
                <p class="lead">
                    最天然的不過濾，不滅菌，不添加非天然香料
                    堅持手工釀造，堅持小批量生產，堅持自然發酵
                    自有配方，自有設備，自有釀酒師，自有酵母農場
                </p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <!--標題列-->
                <div class="col-md-2 mb-2">
                    <div class="list-group sticky-top sticky-top">
                        <a  class="list-group-item list-group-item-action"
                            :class="{'active': show === 'all'}"
                            @click="checkList('all')"    
                        >
                            <span>所有商品</span>
                        </a>
                        <a  class="list-group-item list-group-item-action"
                            :class="{'active': show === 'beer'}"
                            @click="checkList('beer')"    
                        >
                            <i class="fas fa-beer mr-1">
                            </i>
                            Beer
                        </a>
                        <a  class="list-group-item list-group-item-action"
                            :class="{'active': show === 'acc'}"
                            @click="checkList('acc')"     
                        >
                            公仔
                        </a>
                        <a  class="list-group-item list-group-item-action"
                            :class="{'active': show === 'other'}"
                            @click="checkList('other')"     
                        >
                            其餘商品
                        </a>
                    </div>
                </div>
                <!--標題列-->
                <!--商品內容-->
                <div class="col-md-10">
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col mb-4" v-for="item in filterProducts" :key="item.id">
                            <div class="card border-0 shadow h-100">
                                <div style="height: 350px; background-size: cover; background-position: center"
                                    :style = "{backgroundImage: `url(${item.imageUrl})`}"
                                >
                                </div>
                                <div class="card-body">
                                    <span class="badge float-left ml-2" 
                                          :class="[item.category == '啤酒'?'badge-info' : 'badge-warning']">
                                        {{item.category}}
                                    </span>
                                    <h5 class="card-title">
                                        <a class="text-dark">{{item.title}}</a>
                                    </h5>
                                    <p class="card-text text-left">{{item.content}}</p>
                                        <div class="d-flex justify-content-between align-items-baseline">
                                            <!--顯示原價和特價-->
                                            <del class="h6 text-muted">{{item.origin_price? `原價${item.origin_price}元` : '' }}</del>
                                            <div class="h6">特價{{item.price}}元</div>
                                        </div>
                                </div>
                                <div class="card-footer d-flex">
                                    <button type="button" class="btn btn-outline-secondary btn-sm"
                                        @click="getProduct(item.id)"
                                        >
                                        <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                        查看更多
                                    </button>
                                    <button type="button" class="btn btn-outline-primary btn-sm ml-auto"
                                        @click="addtoCart(item.id)">
                                        <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                        加到購物車
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--商品內容-->
            </div>
            <!-- modal -->
            <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{product.title}}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img :src="product.imageUrl" class="img-fluid" alt="">
                            <blockquote class="blockquote mt-3">
                            <p class="mb-0 text-left">{{ product.content }}</p>
                            <footer class="blockquote-footer text-right">{{ product.description }}</footer>
                            </blockquote>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <del class="h6 text-muted">{{product.origin_price? `原價${product.origin_price}元` : '' }}</del>
                                <div class="h6">特價{{product.price}}元</div>
                            </div>
                            <select name="" class="form-control mt-3" v-model="product.num">
                                <option :value="num" v-for="num in 5" :key="num">
                                    選購 {{num}} {{product.unit}}瓶
                                </option>
                            </select>
                        </div>
                        <div class="modal-footer">
                            <div class="text-muted text-nowrap mr-3">
                                小計 
                                <strong>{{ product.num * product.price }}</strong> 元
                            </div>
                            <button type="button" class="btn btn-primary"
                                @click="addtoCart(product.id, product.num)">
                                <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
                                加到購物車
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!--modal -->
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'Shop',
    data(){
        return{
            products:[], 
            product:{},
            status:{
                loadingItem: ''
            }, 
            isLoading: false, 
            cart:{}, 
            show:'all',
        }
    }, 
    created(){
        this.getProducts()
    },
    computed:{
        filterProducts(){
            switch (true) {
                case this.show === 'beer':
                    return this.products.filter(item => item.category === '啤酒')
                    break;
                case this.show === 'acc':
                    return this.products.filter(item => item.category === '公仔')
                    break;
                case this.show === 'other':
                    return this.products.filter(item => (item.category !== '公仔' && item.category !== '啤酒'))
                    break;
                default:
                    return this.products
                    break;
            }
        }
    }, 
    methods:{
        checkList(val){
            this.show = val
        },
        getProducts(){
            this.isLoading = true
            const api = `https://vue-course-api.hexschool.io/api/fan630/products/all`
            this.$http.get(api).then((response) => {
                this.isLoading = false
                this.products = response.data.products
            })
        }, 
        getProduct(id){
            const api = `https://vue-course-api.hexschool.io/api/fan630/product/${id}`
            this.status.loadingItem = id
            this.$http.get(api).then((response) => {
                this.product = response.data.product
                $('#productModal').modal('show')
                this.status.loadingItem = ''
            })
        },
        addtoCart(id, qty = 1){
            const api = `https://vue-course-api.hexschool.io/api/fan630/cart`
            this.status.loadingItem = id
            const cart = {
                product_id: id, 
                qty,
            }
            this.$http.post(api, {data: cart}).then((response) => {
                this.status.loadingItem = ''
                this.getCart()
                $('#productModal').modal('hide')
                this.$bus.$emit('message:push', response.data.message, 'success')
            })
        }, 
        getCart(){
            const api = `https://vue-course-api.hexschool.io/api/fan630/cart`
            this.isLoading = true;
            this.$http.get(api).then((response) => {
                this.cart = response.data.data
                this.isLoading = false
            })
        }, 
        created(){
            this.getProducts();
            this.getCart();
        }
    }
}
</script>

<style lang="scss" scoped>
    .jumbotron-bg{
        background-image:url(https://images.unsplash.com/photo-1554624158-c0d08d8dc6df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
        min-height: 400px;
    }
    .bg-cover{
        background-position: center center; 
        background-size: cover;
    }

    .bg-transparented{
        background-color: rgba(255, 255, 255, .5)
    }
    .box2{
        width: 160px;
        height: 200px;
    }
    .sticky-top {
        top: 80px;
    }
</style>