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
            <div class="row">
                <!--標題列-->
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
                <!-- <div class="col-md-12 my-3 sticky-top">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link"
                            :class="{'active': show === 'all'}"
                            @click="checkList('all')"
                        >
                                <span>所有商品</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link"
                                :class="{'active': show === 'beer'}"
                                @click="checkList('beer')"
                            >
                                <i class="fas fa-beer mr-1">
                                </i>
                                Beer
                            </a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link"
                                :class="{'active': show === 'acc'}"
                                @click="checkList('acc')"
                            >
                                公仔
                            </a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link"
                                :class="{'active': show === 'other'}"
                                @click="checkList('other')"
                            >
                                其餘商品
                            </a>
                        </li>
                    </ul>
                </div> -->
                <!--商品內容-->
                <div class="col-md-10">
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col col-6 mb-4" v-for="item in filterProducts" :key="item.id">
                            <div class="card border-0 shadow h-100">
                                <div class="u-item-img bg-cover" :style="{backgroundImage: `url(${item.imageUrl})`}">
                                    <!-- <a class="u-item-cover" @click="getProduct(item.id)"
                                >
                                        <div class="u-item-btn">See more</div>
                                    </a> -->
                                    <span class="heart" @click="addtoFavorite(item)" v-if="status.isFavorite !== item.id">
                                        <i class="far fa-heart fa-2x"></i>
                                    </span>
                                    <span class="heart" @click="removeFavorite(item)" v-else>
                                        <i class="fas fa-heart fa-2x"></i>
                                    </span>
                                </div>
                                <div class="card-body">
                                    <span class="badge float-left"
                                        :class=
                                        "[item.category == '啤酒'?'badge-info' : 'badge-warning']"
                                        >
                                        {{item.category}}
                                    </span>
                                    <div class="card-title text-center h5 mr-4">
                                        <a class="text-dark">{{item.title}}</a>
                                    </div>
                                    <!--<p class="card-text text-left">{{item.content}}</p>-->
                                    <div class="d-flex justify-content-between">
                                        <!--顯示原價和特價-->
                                        <del class="h6 text-muted">
                                            {{item.origin_price? `原價${item.origin_price}元` : '' }}
                                        </del>
                                        <div class="h6 text-danger">特價{{item.price}}元</div>
                                    </div>
                                </div>
                                <div class="card-footer d-flex">
                                    <div class="btn-group btn-group-toggle btn-block">
                                        <label class="btn btn-secondary active" @click="getProduct(item.id)">
                                                <i class="fas fa-spinner fa-spin"
                                                    v-if="status.loadingItem === item.id">
                                                </i>
                                            查看更多
                                        </label>
                                        <label class="btn btn-primary text-white" @click="addtoCart(item.id)">
                                            <i class="fas fa-cart-plus"></i>
                                            購物車
                                        </label>
                                    </div>
                                    <!-- <button type="button"
                                        class="btn btn-primary btn-block ml-auto text-white"
                                            @click="addtoCart(item.id)">
                                            <i class="fas fa-spinner fa-spin"
                                                v-if="status.loadingItem === item.id">
                                            </i>
                                            <i class="fas fa-cart-plus"></i>
                                            購物車
                                    </button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--商品內容-->
                <MyCart/>
                <GoTop/>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';
import GoTop from '../../components/Gotop.vue';
import MyCart from '../../components/MyCart.vue';

export default {
  name: 'Shop',
  components: {
    GoTop,
    MyCart
  },
  data() {
    return {
      product: {},
      status: {
        loadingItem: '',
        isFavorite:''
      },
      show: 'all',
      selected: '請選購商品數量',
    };
  },
  computed: {
    ...mapGetters(['favorites','products', 'cart', 'isLoading']),
    filterProducts() {
      switch (true) {
        case this.show === 'beer':
          return this.products.filter((item) => item.category === '啤酒');
        case this.show === 'acc':
          return this.products.filter((item) => item.category === '公仔');
        case this.show === 'other':
          return this.products.filter((item) => (item.category !== '公仔' && item.category !== '啤酒'));
        default:
          return this.products;
      }
    },
  },
  methods: {
    ...mapActions(['getFavorite', 'addtoFavorite', 'removeFavorite','getProducts', 'getCart']),
    checkList(val) {
      this.show = val;
    },
    getProduct(id) {
      const api = `https://vue-course-api.hexschool.io/api/fan630/product/${id}`;
      this.status.loadingItem = id;
      this.$http.get(api).then((response) => {
        if(response.data.success){
            this.product = response.data.product;
            this.$set(this.product, 'buyNum', 1);



            this.status.loadingItem = '';
            this.$router.push(`/shop/${response.data.product.id}`)
        }
      });
    },
    addtoCart(id, qty = 1) {
      this.status.loadingItem = id;
      this.$store.dispatch('addtoCart', { id, qty });
      this.status.loadingItem = '';
    },
    addtoFavorite(item){
        this.status.isFavorite = item.id;
        this.$store.dispatch('addtoFavorite',  item);
        // if(this.favorites.filter(target => target.id.includes(item.id))){
        //     console.log(this.favorites)
        // }
    },
    removeFavorite(item) {
        this.$store.dispatch('removeFavorite', item);
        this.status.isFavorite = '';
    },
  },
  created() {
    this.getCart();
    this.getFavorite();
  },
};
</script>

<style lang="scss" scoped>
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
    .nav-link.active{
        color:#dba377;
    }
    // .nav-tabs{
    //     border: 2px solid #dee2e6;
    // }
    .heart{
        position: absolute;
        top:1%; 
        right: 1%;
        color:red;
        font-size: 16px;
    }

</style>
