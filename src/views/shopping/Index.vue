<template>
    <div>
        <Nav />
        <AlertMessage></AlertMessage>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from "../../components/Nav";
import AlertMessage from "../../components/AlertMessage";
import CustomOrder from "../shopping/CustomOrder";
import CheckOut from "../shopping/CheckOut";
import Home from "../shopping/Home";
import CheckOutPay from "../shopping/CheckOutPay";

export default {
    name:'Index', 
    components:{
        Nav,
        AlertMessage, 
        Home,
        CustomOrder, 
        CheckOut, 
        CheckOutPay
    }
}
</script>

