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
        <div class="container-fluid">
            <!-- <div class="box">box1</div>
            <div class="box" data-aos="fade-left">box2</div>
            <div class="box" data-aos="fade-left">box3</div>
            <div class="box" data-aos="fade-left">box4</div> -->
            <div class="item" data-aos="animate__bounceInDown" style="height:200px">1</div>
            <div class="item item2" data-aos="animate__fadeInDown">2</div>
            <div class="item " data-aos="animate__backInRight">4</div>
            <div class="item " data-aos="animate__bounceInLeft">4</div>
            <div class="item " data-aos="animate__flipInY">4</div>
            <div class="item " data-aos="animate__rotateInDownLeft">4</div>
            <div class="item " data-aos="animate__rotateInDownLeft">4</div>
            <div class="item item9" data-aos="animate__zoomIn">4</div>
        </div>
    </div>
</template>

<script>

export default {
    name:'Home', 
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
        width: 200px;
        height: 200px;
        background-color: #cccccc;
        line-height: 200px;
        border:1px solid#fff;
        margin: 20px auto;
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
</style>

