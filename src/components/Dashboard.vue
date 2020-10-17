<template>
<div>
    <Navbar />
    <AlertMessage></AlertMessage>
    <div class="container-fluid">
        <Sidebar />
        <div class="row">
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <router-view></router-view>
            </main>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
import AlertMessage from './AlertMessage.vue';

export default {
    name: 'Dashboard',
    components: {
        Sidebar,
        Navbar,
        AlertMessage,
    },
    created() {
        const cookieValue = document.cookie.split('; ').find(row => row.startsWith('token')).split('=')[1];
        // cookie往後端送
        this.$http.defaults.headers.common.Authorization = cookieValue
    }
};
</script>
