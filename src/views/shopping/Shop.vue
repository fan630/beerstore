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
                <!-- <button class="btn btn-primary" @click="getProducts">重新取得資料</button> -->
                <div class="col-md-2 mb-4">
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
                        <div class="col col-6 mb-4" v-for="item in filterProducts" :key="item.id">
                            <div class="card border-0 shadow h-100">
                                <a class="item-pic-wrap" @click="getProduct(item.id)">
                                    <div class="item-pic" 
                                    style="height: 350px; background-size: cover; background-position: center;}"
                                    :style = "{backgroundImage: `url(${item.imageUrl})`}"
                                >
                                    </div>
                                </a>
                                <div class="card-body">
                                    <span class="badge float-left" 
                                          :class="[item.category == '啤酒'?'badge-info' : 'badge-warning']">
                                        {{item.category}}
                                    </span>
                                    <div class="card-title text-center h5 mr-4">
                                        <a class="text-dark">{{item.title}}</a>
                                    </div>
                                    <!--<p class="card-text text-left">{{item.content}}</p>-->
                                    <div class="d-flex justify-content-between align-items-baseline">
                                        <!--顯示原價和特價-->
                                        <del class="h6 text-muted">{{item.origin_price? `原價${item.origin_price}元` : '' }}</del>
                                        <div class="h6 text-danger">特價{{item.price}}元</div>
                                    </div>
                                </div>
                                <div class="card-footer d-flex">
                                    <button type="button" class="btn btn-primary btn-block ml-auto text-white"
                                        @click="addtoCart(item.id)">
                                        <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                        <i class="fas fa-cart-plus"></i>
                                        購物車
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--商品內容-->
                <GoTop/>
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
                            <img :src="product.imageUrl" class="img-fluid" alt="" style="height:250px">
                            <blockquote class="blockquote mt-3">
                            <p class="mb-0 text-left">{{ product.content }}</p>
                            <footer class="blockquote-footer text-right">{{ product.description }}</footer>
                            </blockquote>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <del class="h6 text-muted">{{product.origin_price? `原價${product.origin_price}元` : '' }}</del>
                                <div class="h6">特價{{product.price}}元</div>
                            </div>
                            <select class="form-control mt-3" v-model="product.num" placeholder="{{}}">
                                <option :selected="true">請選購商品數量</option>
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
                                @click="addtoCart(product.id, product.num)">
                                <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
                                <i class="fas fa-cart-plus"></i>
                                購物車
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
import GoTop from "../../components/Gotop.vue";
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'Shop',
    components:{
       GoTop
    },
    data(){
        return{
            product:{},
            status:{
                loadingItem: ''
            }, 
            show:'all',
            selected: "請選購商品數量"
        }
    }, 
    created(){
        this.getProducts()
    },
    computed:{
        ...mapGetters(['products', 'cart', 'isLoading']),
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
        }, 
    }, 
    methods:{
       ...mapActions(['getProducts', 'getCart']), 
        checkList(val){
            this.show = val
        },
        getProduct(id){
            const api = `https://vue-course-api.hexschool.io/api/fan630/product/${id}`
            this.status.loadingItem = id
            this.$http.get(api).then((response) => {
                this.product = response.data.product
                this.status.loadingItem = ''
                $('#productModal').modal('show')
            })
        },
        addtoCart(id, qty = 1){
            this.status.loadingItem = id
            this.$store.dispatch('addtoCart', {id, qty})
            $('#productModal').modal('hide')
            this.status.loadingItem = ''
        },  
    },
    created(){
        this.getProducts();
        this.getCart();
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
    .card-footer{
        padding:0;
    }
    .item-pic-wrap{
        cursor: pointer;
    }
    .item-pic{
        transform: scale(1);
        transition: .3s; 
    }
    .item-pic-wrap:hover{
        .item-pic{
            transform: scale(1.05);
        }
    }

</style>