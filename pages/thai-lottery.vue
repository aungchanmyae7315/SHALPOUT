<template>
    <main>
        <section class="thailottery-page">
            <div class="row no-gutters" style="padding:50px 20px 20px  20px;">
                <div class="col-md-6" style="margin-bottom:30px" data-aos="zoom-in-down"  data-aos-duration="1500">
                   <div class="img-hover-zoom">
                    <img class="game_img" src="/images/thai-lottery.png" alt="หวยไทยออนไลน์">
                </div>
                </div>
                <div class="col-md-4">
                    <div class="row no-gutters">
                         <div class="col-6">
                             <img class="title_img" src="/images/thailottery-text.png" alt="">
                         </div>
                         <div class="col-6" style="text-align:right">
                               <a href="https://m.bkk2d.com/" target="_blank">
                                  <el-button round>Play now</el-button>
                             </a>
                         </div>
                    </div>
                    <h1>{{this.$t('thai_lottery_h1')}}</h1>
                   
                    <p style="margin-top:40px">{{this.$t('thai_lottery_p1')}}</p>
                    <p style="margin-top:40px">{{this.$t('thai_lottery_p2')}}</p>
                    
                </div>
                <div class="col-md-2">
                   
                </div>
            </div>
        </section>
         <TheFooter/>
    </main>
</template>
<script>
    import TheFooter from '~/components/footer_2'


    export default {

        components: {
            TheFooter
        },
        data() {
            return {
                 title: this.$t('thai_lottery_title'),
            }
        },
         head() {
             var lang = localStorage.getItem('locale')
             if(lang == 'en') {
                 var url = 'https://www.bkk2d.com/thai-lottery/'
             }else {
                 var url = 'https://www.bkk2d.com/thai-lottery/' 
             }
        return {
            title: this.title,
             meta: [
                {
                    hid: this.$t('thai_lottery_title'),
                    name: this.$t('thai_lottery_title'),
                    content:this.$t('thai_lottery_description'),
                },

            ],
             link: [
                { rel: 'icon', type: 'image/x-icon', href: '/images/thai-lottery.png', defer: true },
                { rel: 'canonical', href:url}
            ]
        }
      }
    }
</script>
<style scoped>
    .img-hover-zoom {
    box-shadow: 0px 2px 8px #FFF140D9;
    border: 2px solid #FCD354;
    border-radius: 10px;
    width: 32%;
    overflow: hidden;
    margin:auto
    }
    .img-hover-zoom img {
    transition: transform .5s ease;
    }

    .img-hover-zoom:hover img {
        transform: scale(1.5);
    }
    .game_img{
        width: 100%;
    }
.thailottery-page .el-button.is-round {
    background-image: linear-gradient(
      to bottom,
      #FDDA5C 51%,
      #F38F09 100%
  );
  border:0;
  width:130px;
  }
  .title_img{
      width:80% ;
  }
.thailottery-page{
    padding-top:20px;
    text-align: left;
    color:#fff;
    min-height:100vh;
    background-image: url(~/imagesgame-bg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>