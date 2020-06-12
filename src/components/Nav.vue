<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
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
                    <router-link to="/cart" class="nav-link order-md-1 h-link">
                        <i class="fas fa-shopping-cart">
                        </i>
                    </router-link>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                    <div class="navbar-nav ml-auto">
                        <router-link to="/shop" class="nav-link h-link">
                            <i class="far fa-smile-wink"></i>
                                商品列表
                        </router-link>
                        <router-link to="/my_order" class="nav-link h-link">
                            <i class="far fa-smile-wink"></i>
                                我的訂單
                        </router-link>
                        <router-link to="/login" class="nav-link">
                            <i class="fas fa-cog"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:'Nav'
}
</script>

<style lang="scss" scoped>
    .navbar-brand{
        background-color: transparent;
        box-shadow:none;
    }
    .navbar{
        padding:0;
    }
    
</style>