<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
                            <i class="fas fa-shopping-cart fa-2x">
                            </i>
                        </router-link>
                        <router-link to="/login" class="nav-link">
                            <i class="fas fa-cog fa-2x"></i>
                        </router-link>
                    </form>
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
    .nav-link{
        color:blue;
    }
</style>