<template>
<div>
    <form class="form-signin" @submit.prevent="signin">
        <img src="../assets/images/logo.png" alt="" srcset="">
        <h1 class="h3 mb-3 font-weight-normal text-center pt-3">後台管理</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" v-model.trim="user.username" placeholder="Email address" required autofocus />
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" v-model.trim="user.password" placeholder="Password" required />
        <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        };
    },
    methods: {
        signin() {
            const api = 'https://vue-course-api.hexschool.io/admin/signin';
            this.$http.post(api, this.user).then((response) => {
                console.log(response.data);
                if (response.data.success) {
                    const token = response.data.token;
                    const expired = response.data.expired;
                    console.log(token, expired);
                    document.cookie = `token=${token}; expires=${new Date(expired)}`;
                    this.$router.push('/admin/products');
                }
            });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
html,
body {
    height: 100%;
}

body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}

.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.form-signin .checkbox {
    font-weight: 400;
}

.form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}

.form-signin .form-control:focus {
    z-index: 2;
}

.form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>
