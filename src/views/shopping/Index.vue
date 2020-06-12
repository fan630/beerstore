<template>
    <div>
        <Nav />
        <AlertMessage></AlertMessage>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
import Nav from "../../components/Nav";
import AlertMessage from "../../components/AlertMessage";
import Shop from "../shopping/Shop";
import CheckOut from "../shopping/CheckOut";
import Home from "../shopping/Home";
import CheckOutPay from "../shopping/CheckOutPay";
import Cart from "../shopping/Cart";
import Footer from "../../components/Footer";

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

