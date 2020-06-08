<template>
    <div>
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse text-left">
            <div class="sidebar-sticky pt-3">
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>
                        <i class="fas fa-user-cog">
                            管理員
                        </i>
                    </span>
                </h6>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <!-- <a class="nav-link active" href="#">
                            <span data-feather="file">

                            </span>
                        </a> -->
                        <router-link to="/admin/products" class="nav-link active">
                            <i class="far fa-list-alt">
                                產品列表
                            </i>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                        <span data-feather="shopping-cart">
                            <i class="fas fa-briefcase">
                                訂單列表
                            </i>
                        </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span data-feather="users">
                                <i class="fas fa-ticket-alt">
                                    優惠券
                                </i>
                            </span>
                        </a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">
                        <span data-feather="bar-chart-2"></span>
                        Reports
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                        <span data-feather="layers"></span>
                        Integrations
                        </a>
                    </li> -->
                </ul>
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>模擬功能</span>
                    <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                        <span data-feather="plus-circle"></span>
                    </a>
                </h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <router-link to="/custom_order" class="nav-link active">
                            <i class="fas fa-shopping-cart">
                                下單去
                            </i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',

}
</script>


<style scoped lang="scss">

</style>
