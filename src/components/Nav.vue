<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
            >
            <div class="container">
                <button
                    class="navbar-toggler d-md-none"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <router-link to="/" class="nav-link">
                        <img
                            src="../../src/assets/images/logo.png"
                            alt=""
                            srcset=""
                            height="50px"
                            class="d-none d-md-block"
                        >
                        <img
                            src="../../src/assets/images/logo.png"
                            alt=""
                            height="40px"
                            srcset=""
                            class="d-md-none d-block"
                        >
                    </router-link>
                    <div class="order-md-last d-flex">
                        <!--購物車-->
                        <div class="dropdown ml-1">
                            <button class="btn btn-sm btn-cart" data-toggle="dropdown"
                                data-flip="false">
                            <i class="fa fa-shopping-cart text-white fa-2x" aria-hidden="true"></i>
                            <span class="badge badge-pill badge-danger">{{cart.carts.length}}</span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right p-3"
                                style="min-width: 300px"
                            data-offset="400">
                            <h6 class="text-gray">{{cart.carts.length ? '已選擇商品': '您目前未選擇商品'}}</h6>
                            <table class="table table-sm text-black">
                                <tbody v-if="cart.carts.length">
                                <tr v-for="item in cart.carts" :key="item.id">
                                    <td class="align-middle text-center">
                                    <a href="#" class="text-muted"
                                        @click.prevent="removeCartItem(item.id)">
                                        <i class="fas fa-trash-alt text-black"></i>
                                    </a>
                                    </td>
                                    <td class="align-middle">{{ item.product.title }}</td>
                                    <td class="align-middle">
                                            {{ item.qty }}{{item.product.unit}}
                                    </td>
                                    <td class="align-middle text-right">{{item.total}}</td>
                                </tr>
                                </tbody>
                            </table>
                            <router-link to="/cart">
                                <button class="btn btn-primary btn-block text-white">
                                    <i class="fa fa-cart-plus" aria-hidden="true"></i> 結帳去
                                </button>
                            </router-link>
                            </div>
                        </div>
                        <!--我的最愛-->
                        <div class="dropdown ml-1">
                            <button class="btn btn-sm btn-cart" data-toggle="dropdown"
                                data-flip="false">
                            <i class="fas fa-heart text-white fa-2x" aria-hidden="true"></i>
                            <span class="badge badge-pill badge-danger">{{favorites.length}}</span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right p-3"
                                style="min-width: 300px"
                            data-offset="400">
                            <h6 class="text-gray">{{favorites.length ? '已選擇商品': '您目前沒有喜歡的商品'}}</h6>
                            <table class="table table-sm text-black">
                                <tbody v-if="favorites.length">
                                <tr v-for="item in favorites" :key="item.id">
                                    <td class="align-middle text-center">
                                        <a href="#" class="text-muted"
                                            @click.prevent="removeFavorite(item)">
                                            <i class="far fa-heart text-black"></i>
                                        </a>
                                    </td>
                                    <td class="align-middle">
                                        {{ item.title }}
                                    </td>
                                    <td>
                                        <button type="button"
                                            class="btn btn-primary btn-sm text-white"
                                            @click="addtoCart(item, item.id)">
                                            一鍵下訂
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <router-link to="/shop">
                                <button class="btn btn-outline-primary btn-block text-white">
                                    <i class="fas fa-shopping-bag"></i> 繼續逛逛
                                </button>
                            </router-link>
                            </div>
                        </div>
                    </div>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                    <!--桌機版導覽列-->
                    <div
                        class="navbar-nav  ml-auto d-none d-md-inline-block order-last
                                flex-nowrap">
                        <router-link to="/about" class="nav-link h-link">
                                About
                        </router-link>
                        <router-link to="/shop" class="nav-link h-link">
                                Shop
                        </router-link>
                        <router-link to="/coupon" class="nav-link h-link">
                                Coupon
                        </router-link>
                        <router-link to="/my_order" class="nav-link h-link">
                                Orders
                        </router-link>
                        <router-link to="/login" class="nav-link admin">
                            <i class="fas fa-cog"></i>
                        </router-link>
                    </div>
                    <!--手機版導覽列-->
                    <div class="d-flex w-100 flex-wrap d-block d-md-none order-last">
                        <div class="p-2 w-50 mobile-navLink">
                            <router-link to="/shop" class="nav-link">
                                    Shop
                            </router-link>
                        </div>
                        <div class="p-2 w-50 mobile-navLink">
                            <router-link to="/about" class="nav-link">
                                 About
                            </router-link>
                        </div>
                        <div class="p-2 w-50 mobile-navLink">
                            <router-link to="/my_order" class="nav-link">
                                    Orders
                            </router-link>
                        </div>
                        <div class="p-2 w-50 mobile-navLink">
                            <router-link to="/coupon" class="nav-link">
                                    Coupon
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Nav',
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(['favorites', 'cart', 'isLoading']),
  },
  methods: {
    ...mapActions(['getFavorite', 'removeFavorite', 'getCart']),
    removeCartItem(id) {
      this.$store.dispatch('removeCartItem', id);
    },
    removeFavorite(favorite) {
      this.$store.dispatch('removeFavorite', favorite);
    },

    addtoCart(item, id, qty = 1) {
      this.$store.dispatch('addtoCart', { id, qty });
      this.removeFavorite(item);
    },
  },
  created() {
    this.getCart();
    this.getFavorite();
  },
  mounted() {
    $('.mobile-navLink .nav-link').on('click', () => {
      $('#navbarNavAltMarkup').removeClass('show');
    });
  },
};
</script>

<style lang="scss" scoped>
    $gray-700: #495057;
    $gray-300: #dee2e6;
    $primary: #dba377;

    .nav-link{
        display:inline;
        font-family: 'Merriweather', serif;
        font-size:1.1rem;
    }
    /* 購物車按鈕 */
    .btn-cart {
        background-color: transparent;
        position: relative;
    }

    /* 購物車按鈕定位 */
    .btn-cart .badge {
        position: absolute;
        top: 1px;
        right: 1px;
    }

    .dropdown-menu-right {
        right: 0;
        left: auto;
    }
    .dropdown-menu{
        top:121%;
        background-color:$gray-700;
    }
</style>
