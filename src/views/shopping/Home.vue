<template>
    <div>
        <header>
            <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
            >
            <ol class="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                ></li>
            </ol>
            <!-- 圖片位置 -->
            <div class="carousel-inner">
                <div class="carousel-item header-carousel-item bg-cover" 
                    :style="{backgroundImage: `url(https://images.unsplash.com/photo-1539192009026-4163d2da8925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80)`}">
                    <!-- <div class="carousel-caption d-none d-md-block px-2">
                        <h3>大口的放縱，毫無保留</h3>
                        <p>組道心深的起一強理重麼變喜才她起寶事運果引物；生一越。為己的治應的了：有的兩懷華場前間不不存力：性張得燈表年健交公言要認才部黨岸家深此一和國專女特希這密年那報。</p>
                    </div> -->
                </div>
                <div class="carousel-item header-carousel-item bg-cover active" 
                    :style="{backgroundImage: `url(https://images.unsplash.com/photo-1570380888376-ff4a100975f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80)`}">                   
                    <div class="carousel-caption d-none d-md-block px-2">
                        <h3>一個人，田野間的輕鬆美味</h3>
                        <p>城小中假上問，洲元化究變快歡專，臺正機上色從多空放我。來來中的來落行間我海府子成隨上事女，的石在朋經以定空他；級病期他，會性前集一於得當院應對分！意斯能己水成神錢。</p>
                    </div>
                </div>
                <div class="carousel-item header-carousel-item bg-cover" 
                    :style="{backgroundImage: `url(https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)`}">
                    <div class="carousel-caption d-none d-md-block px-2">
                        <h3>愛戀的赤裸裸辣辣</h3>
                        <p>件臺水則的看方府機英下英影加非！為走改幾少我住準愛地下。巴開上人在，但雜處權音生什有會能教！還話弟手大了。</p>
                    </div>
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
            </a>
            </div>  
        </header>
        <!--四欄式-->
        <section class="bg-dark text-white my-mb-5 my-3">
            <div class="container py-4">
                <div class="row">
                    <div class="col-md-3 col-6">
                        <div class="my-2" style="bac">
                           <img src="../../assets/images/svg/svg/005-beer.svg" alt="" srcset="" class="svg-box filter-class">
                        </div>
                        <h3>Import</h3>
                        <p>These cases are perfectly simple distinguish</p>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="my-2">
                            <img src="../../assets/images/svg/svg/001-beer-bottle.svg" alt="" srcset="" class="svg-box filter-class">
                        </div>
                        <h3>Domestic Specialty</h3>
                        <p>Perfectly there an simple distinguish cases.</p>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="my-2">
                            <img src="../../assets/images/svg/svg/002-glass.svg" alt="" srcset="" class="svg-box filter-class">
                        </div>
                        <h3>Domestic Specialty</h3>
                        <p>Perfectly there an simple distinguish cases.</p>
                    </div>
                    <div class="col-md-3 col-6">
                        <div class="my-2">
                            <img src="../../assets/images/svg/svg/006-evaluate.svg" alt="" srcset="" class="svg-box filter-class">
                        </div>
                        <h3>Value</h3>
                        <p>Simple distinguish these cases are perfectly.</p>
                    </div>
                </div>
            </div>
        </section>
        <!--main-->
        <div class="container-fluid px-0 mb-5">
            <div class="row justify-content-center align-items-center no-gutters">
                <div class="offset-1"></div>
                <div class="col-md-4 text-md-left text-center">
                    <div class="display-4 mb-5"  data-aos="animate__slideInRight animate__fast">Welcome to Our Store</div>
                    <button type="button" class="btn btn-primary text-white my-3" @click="backtocustomer">Shop Now ></button>
                </div>
                <div class="offset-1"></div>
                <div class="col-md-6">
                    <div class="box bg-cover" data-aos="animate__slideInLeft animate__fast"
                        style="background-image:url(https://images.unsplash.com/photo-1507310951869-fe0941df4dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
                        >
                    </div>
                </div>
            </div>
            <div class="row justify-content-end flex-row-reverse no-gutters">
                <div class="col-md-4 align-self-center" data-aos="animate__slideInLeft animate__fast">
                    <div class="display-4 text-md-right text-center mt-md-5 my-5">Get an Extra 10% off your first order</div>
                </div>
                <div class="offset-1"></div>
                <div class="col-md-6" data-aos="animate__slideInRight animate__fast">
                    <div class="box bg-cover"
                        style="background-image:url(https://images.unsplash.com/photo-1576723072484-b4d99bc3c9a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)"
                        >
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center no-gutters">
                <div class="offset-2"></div>
                <div class="col-md-3 text-md-left text-center" data-aos="animate__slideInLeft">
                    <div class="display-4 mb-md-5 my-5">Legendary Brewerly, <br>Beer</div>
                </div>
                <div class="offset-1"></div>
                <div class="col-md-6">
                    <div class="box bg-cover" data-aos="animate__slideInRight"
                        style="background-image:url(https://images.unsplash.com/photo-1556720072-94ce7d90544c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)"
                        >
                    </div>
                </div>
            </div>
        </div>
        <!--訂閱-->
        <div class="container text-center mt-5 mb-5">
            <div class="display-4 mb-5">Subscribe</div>
                    <div class="form-row justify-content-center align-items-center">
                    <div class="col-md-2">
                        <img src="../../assets/images/bottom.png" alt="" srcset="">
                    </div>
                    <div class="col-md-6">
                        <h2 class="text-left">Get The Latest News On Product Releases, Availability, And Event</h2>
                        <div class="input-group mt-4">
                                <input type="text" class="form-control" placeholder="Enter your email address">
                                <div class="input-group-append">
                                    <button class="btn btn-secondary" type="button">
                                        GO!
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         <GoTop/>
    </div>
</template>

<script>
import GoTop from "../../components/Gotop.vue";

export default {
    name:'Home', 
    components:{
       GoTop
    },
    methods:{
        backtocustomer(){
            this.$router.push(`/shop`)
        }
    }
}

</script>

<style lang="scss" scoped>
    .bg-cover{
        background-size:cover; 
        background-position: center center;
    }
    .carousel-caption{
        background-color: rgba(0, 0, 0, 0.6);
    }
    .header-carousel-item{
        height:650px;
    }
    .text-gold {
        color: #dba377;
    }
    .box{
        height:500px;
    }
    .item {
        width: 200px;
        height: 200px;
        margin: 50px auto;
        padding-top: 75px;
        background: #ccc;
        text-align: center;
        color: #FFF;
        font-size: 3em;
    }
    p{
        font-family: 'Lato', sans-serif;
    }
    .display-4{
        font-family: 'Merriweather', serif;
    }
    .filter-class{
        filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(86deg) brightness(118%) contrast(119%);
    }
    .svg-box{
        width:72px;
        height:72px;   
    }
</style>

