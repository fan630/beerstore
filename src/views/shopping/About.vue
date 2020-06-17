<template>
  <div>
      <div class="container py-4 px-4">
          <div class="row">
              <div class="col-md-12">
                    <div class="row justify-content-center">
                        <div class="col-md-6 bordered px-5 py-2">
                            <h3 class="py-3">關於我們</h3>
                            <p class="text-left">
                                2015年，五位志趣相投、喜愛精釀啤酒的朋友決定放棄原本的生活，憑藉著熱情與夢想，
                                投入更具挑戰的創業人生，打造來自台灣的高品質精釀啤酒。
                                <span class="font-weight-bolder text-gold">FanBeer</span>
                                於是誕生。
                            </p>
                            <p class="text-left">
                                <span class="font-weight-bolder text-gold">FanBeer</span>
                                積極參與亞洲精釀酒廠社群，共同推動「重新定義啤酒」的市場革命。為了完成這個目標，
                                <span class="font-weight-bolder text-gold">FanBeer</span>
                                不斷追求精進與卓越，要將最好的啤酒、最好的品飲體驗推廣給更多的消費者。</p>
                        </div>
                    </div>
              </div>
          </div>
      </div>
      <!--時間軸-->
      <div class="container">
          <div class="timeline-section">
              <div class="row my-3 timeline-pointer">
                  <div class="col-sm-6">
                      <h3>2015年5月</h3>
                      <p>成立首家直營啤酒吧</p>
                      <p class="text-gold">於台北市永康商圈開設第一家掌門精釀啤酒TAP ROOM!</p>
                  </div>
                  <div class="col-sm-6" data-aos="animate__bounceInLeft">
                      <div class="box shadow bg-cover" style="background-image:url(https://images.unsplash.com/photo-1556720072-94ce7d90544c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)"></div>
                  </div>
              </div>
              <div class="row my-3 timeline-pointer d-flex flex-sm-row-reverse">
                  <div class="col-sm-6">
                      <h3>2016年3月</h3>
                      <p>以
                          <span class="font-weight-bolder text-gold">FanBeer</span>
                          品牌在台大舉展店
                      </p>
                      <p class="text-gold text-left">
                          陸續於高雄市、台中市、台北微風松高、台北內湖與台南市成立分店，
                          其中台中店面擁有32支龍頭，挑戰生啤選擇全台灣最多；
                          微風松高店，搭配200坪空中花園，全信義區最吸睛!每間分店皆有不同特色!
                      </p>
                  </div>
                  <div class="col-sm-6" data-aos="animate__bounceInRight">
                      <div class="box shadow bg-cover" style="background-image:url(https://images.unsplash.com/photo-1517159906085-dd4f2277d4d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"></div>
                  </div>
              </div>
              <div class="row my-3 timeline-pointer">
                  <div class="col-sm-6">
                      <h3>2017年3月</h3>
                      <p>成功進軍海外市場</p>
                      <p class="text-gold">
                          於香港尖沙咀設立首家海外門市，且吸引多家媒體爭相採訪。
                      </p>
                  </div>
                  <div class="col-sm-6" data-aos="animate__bounceInLeft" >
                      <div class="box shadow bg-cover" style="background-image:url(https://images.unsplash.com/photo-1554381187-1461fabe0905?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"></div>
                  </div>
              </div>
              <div class="row my-3 timeline-pointer d-flex flex-sm-row-reverse">
                  <div class="col-sm-6">
                      <h3>2019年5月</h3>
                      <p>成立第十家直營啤酒吧</p>
                      <p class="text-gold text-left">
                          於台北微風廣場本館成立第十家直營酒吧，現場供應24種新鮮生啤，
                          為目前全台分店數量最多之精釀酒廠品牌。
                     </p>
                  </div>
                  <div class="col-sm-6" data-aos="animate__bounceInRight">
                      <div class="box shadow bg-cover" style="background-image:url(https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"></div>
                  </div>
              </div>
          </div>
      </div>
      <GoTop></GoTop>
  </div>
</template>

<script>
import GoTop from '../../components/Gotop.vue';

export default {
  name: 'About',
  components: {
    GoTop,
  },
};
</script>

<style scoped lang="scss">
    .box {
        width: 100%;
        height: 300px;
    }
    .timeline-section{
        position: relative;
    }
    .timeline-section::after{
        content: "";
        position: absolute;
        top:0;
        bottom: 0;
        left:50%;
        transform: translateX(-50%);
        border: 2px solid#dba377;
    }
    .timeline-pointer{
        position: relative;
    }
    .timeline-pointer::after{
        content: "";
        position: absolute;
        width: 10px;
        height:10px;
        top:0;
        bottom: 0;
        left:50%;
        border-radius: 50%;
        transform: translateX(-50%);
        border: 1px solid#3333;
        background-color: white;
        z-index:1;
    }
    @media screen and (max-width:576px){
        .timeline-section::after,
        .timeline-pointer::after{
            display: none;
        }
    }
    .bordered{
        border:2px solid#fff;
    }
</style>
