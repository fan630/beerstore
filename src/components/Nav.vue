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