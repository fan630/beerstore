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

                <!-- <a
                    class="navbar-brand"
                    href="home.html"
                >
                    <img
                        src="./images/downloads/logo-all-dark.svg"
                        alt=""
                        srcset=""
                        height="40px"
                        class="d-none d-md-block"
                    >
                    <img
                        src="./images/downloads/logotype-sm-dark.svg"
                        alt=""
                        srcset=""
                        height="17.74px"
                        class="d-md-none d-block"
                    >
                </a> -->

                <!-- <a
                    class="nav-item nav-link order-md-1 bg-cover icon-size"
                    href="cart.html"
                    style="background-image:url(./images/downloads/shopping_cart.svg)"
                >
                </a> -->
                <router-link to="/order_list" class="nav-link order-md-1">
                    <i class="fas fa-shopping-cart">
                    </i>
                </router-link>

                <div
                    class="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div class="navbar-nav ml-auto">
                        <router-link to="/" class="nav-link active">
                            <i class="fas fa-heart text-info"></i>
                                首頁
                        </router-link>
                        <router-link to="/custom_order" class="nav-link">
                            <i class="far fa-smile-wink"></i>
                                商品列表
                        </router-link>
                        <router-link to="/login" class="nav-link">
                            <i class="fas fa-cog"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
        <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a
                    class="navbar-brand"
                    href="#"
                >Navbar
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul class="navbar-nav">
                        <li>
                            <router-link to="/" class="nav-link active">
                                <i class="fas fa-heart text-info"></i>
                                    首頁
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/custom_order" class="nav-link">
                                <i class="far fa-smile-wink"></i>
                                    商品列表
                            </router-link>
                        </li>
                    </ul>
                    <form class="form-inline ml-auto">
                        <router-link to="/order_list" class="nav-link">
                            <i class="fas fa-shopping-cart">
                            </i>
                        </router-link>
                        <router-link to="/login" class="nav-link">
                            <i class="fas fa-cog fa-2x"></i>
                        </router-link>
                    </form>
                </div>
            </div>
        </nav> -->
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
</style>