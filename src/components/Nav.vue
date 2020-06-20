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
                    <div class="dropdown ml-auto order-md-1 ml-1">
                        <button class="btn btn-sm btn-cart" data-toggle="dropdown"
                            data-flip="false">
                        <i class="fa fa-shopping-cart text-white fa-2x" aria-hidden="true"></i>
                        <span class="badge badge-pill badge-danger">{{cart.carts.length}}</span>
                        <span class="sr-only">unread messages</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right p-3" style="min-width: 300px"
                        data-offset="400">
                        <h6 class="text-gray">{{cart.carts.length ? '已選擇商品': '您目前未選擇商品'}}</h6>
                        <table class="table table-sm text-black">
                            <tbody v-if="cart.carts.length">
                            <tr v-for="item in cart.carts" :key="item.id">
                                <td class="align-middle text-center">
                                <a href="#" class="text-muted"
                                    @click.prevent="removeCartItem(item.id)">
                                    <i class="fas fa-trash-alt text-black" aria-hidden="true"></i>
                                </a>
                                </td>
                                <td class="align-middle">{{ item.product.title }}</td>
                                <td class="align-middle">{{ item.qty }}{{item.product.unit}}</td>
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
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                    <!--桌機版導覽列-->
                    <div class="navbar-nav ml-auto d-none d-md-block">
                        <router-link to="/about" class="nav-link h-link">
                                About
                        </router-link>
                        <router-link to="/shop" class="nav-link h-link">
                                Shop
                        </router-link>
                        <router-link to="/my_order" class="nav-link h-link">

                                Orders
                        </router-link>
                        <router-link to="/coupon" class="nav-link h-link">
                                Coupon
                        </router-link>
                        <router-link to="/login" class="nav-link">
                            <i class="fas fa-cog"></i>
                        </router-link>
                    </div>
                    <!--手機版導覽列-->
                    <div class="d-flex w-100 flex-wrap d-block d-md-none">
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
                            <router-link to="/login" class="nav-link">
                                <i class="fas fa-cog"></i>
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
  computed: {
    ...mapGetters(['cart', 'isLoading']),
  },
  methods: {
    ...mapActions(['getCart']),
    removeCartItem(id) {
      this.$store.dispatch('removeCartItem', id);
    },
  },
  created() {
    this.getCart();
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

    .nav{
        line-height:66px;
    }
    .navbar-brand{
        background-color: transparent;
        box-shadow:none;
    }
    .navbar{
        padding-top:0;
        padding-bottom:0;
    }
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

    .main-content {
        min-height: calc(100vh - 56px - 176px)
    }

    .box-shadow {
        box-shadow: 0px 2px 5px rgba(0, 0, 0, .05);
        transition: .3s linear;
    }

    .box-shadow:hover {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, .08);
    }

    .dropdown-menu-right {
        right: 0;
        left: auto;
    }

    .alert-rounded {
        border-radius: 50px;
    }

    .dropdown-menu{
        top:121%;
        background-color:$gray-700;
    }
    .text-gray{
        color:$gray-300;
    }
    .mobile-navLink{
        border: 1px solid#333;
        background-color: $gray-700;
        &:hover{
            background-color: darken($gray-300, 25%);
        }
        .nav-link{
            color:white;
        }
    }

</style>
