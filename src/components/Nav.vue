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
                    <!-- <div class="dropdown ml-auto">
                        <button class="btn btn-sm btn-cart" data-toggle="dropdown" data-flip="false">
                        <i class="fa fa-shopping-cart text-dark fa-2x" aria-hidden="true"></i>
                        <span class="badge badge-pill badge-danger">{{cart.carts.length}}</span>
                        <span class="sr-only">unread messages</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right p-3" style="min-width: 300px"
                        data-offset="400">
                        <h6>已選擇商品</h6>
                        <table class="table table-sm">
                            <tbody>
                            <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts.length">
                                <td class="align-middle text-center">
                                <a href="#" class="text-muted" @click.prevent="removeCart(item.id)">
                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                </a>
                                </td>
                                <td class="align-middle">{{ item.product.title }}</td>
                                <td class="align-middle">{{ item.qty }}{{item.product.unit}}</td>
                                <td class="align-middle text-right">{{item.total}}</td>
                            </tr>
                            </tbody>
                        </table>
                        <button class="btn btn-primary btn-block">
                            <i class="fa fa-cart-plus" aria-hidden="true"></i> 結帳去
                        </button>
                        <router-link to="/cart" class="nav-link order-md-1 h-link btn-cart">
                            <i class="fas fa-shopping-cart">
                            </i>
                            <span class="badge badge-danger">3</span>
                        </router-link>
                        </div>
                    </div> -->
                    <router-link to="/cart" class="nav-link order-md-1 h-link btn-cart">
                        <i class="fas fa-shopping-cart">
                        </i>
                        <span class="badge badge-danger">3</span>
                    </router-link>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                    <div class="navbar-nav ml-auto d-md-inline-flex">
                        <router-link to="/about" class="nav-link h-link">
                                About
                        </router-link>
                        <router-link to="/shop" class="nav-link h-link">
                            
                                Shop
                        </router-link>
                        <router-link to="/my_order" class="nav-link h-link">
                           
                                Orders
                        </router-link>
                        <router-link to="/login" class="nav-link">
                            <i class="fas fa-cog"></i>
                        </router-link>
                    </div>
                    <!-- w-50有問題 -->
                    <!-- <div class="navbar-nav d-flex d-md-none">
                        <router-link to="/about" class="nav-link h-link w-50">
                            <i class="far fa-smile-wink"></i>
                                123
                        </router-link>
                        <router-link to="/shop" class="nav-link h-link w-50">
                            <i class="far fa-smile-wink"></i>
                                456
                        </router-link>
                        <router-link to="/my_order" class="nav-link h-link w-50">
                            <i class="far fa-smile-wink"></i>
                                我的訂單
                        </router-link>
                        <router-link to="/login" class="nav-link w-50">
                            <i class="fas fa-cog"></i>
                        </router-link>
                    </div> -->
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:'Nav', 
}
</script>

<style lang="scss" scoped>
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
    .btn-cart{
        position: relative;
    }

    .btn-cart > .badge{
        position: absolute; 
        top:3px; 
        right:10px;
    }
    
</style>