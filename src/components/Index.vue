<template>
    <div>
        <Nav />
            <AlertMessage></AlertMessage>
            <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
import Nav from "./Nav";
import AlertMessage from "./AlertMessage";
import Shop from "../views/shopping/Shop.vue";
import CheckOut from "../views/shopping/CheckOut";
import Home from "../views/shopping/Home";
import CheckOutPay from "../views/shopping/CheckOutPay";
import Cart from "../views/shopping/Cart";
import Footer from "./Footer";

export default {
    name:'Index', 
    components:{
        Nav,
        AlertMessage, 
        Home,
        Shop, 
        CheckOut, 
        CheckOutPay, 
        Footer, 
        Cart
    }
}
</script>

<style lang="scss">
</style>
