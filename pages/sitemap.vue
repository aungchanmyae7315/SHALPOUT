<template>
    <section class="sitemap">
        <div class="footer-background ">
            <div class="card_bg" >
                 <el-card class="container ">
                <div class=" ">
                   <h3>Site Map</h3>      
                </div> 
                <ul class="sitemap-item">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/thai-lottery">Thai Lottery</nuxt-link></li>
                    <li><nuxt-link to="/myanmar-2d">Myanmar 2D</nuxt-link></li>
                    <li><nuxt-link to="/table-game">Table Game</nuxt-link></li>
                    <li><nuxt-link to="/slot-game">Slot Game</nuxt-link></li>
                    <li><a href="https://m.bkk2d.com/" target="_blank"><h6>Sign In</h6></a></li>
                </ul>
            </el-card>
            </div>
           
            
             
        </div>
      
          <footer class="footer_1">
         
        <!-- <Cardgroup/> -->
        <div class="row copyright" style="width:100%">
            <div class="col-md-12">
            <div class="footer_content">
                <span>Copyright © 2021 All rights reserved.</span>
            </div>
            </div>
           
        </div>
    </footer>
    </section>
</template>

<script>
     import Cardgroup from '~/components/game_card_group'


    export default {

        components: {
            Cardgroup
        },
        data() {
            return {
                title: 'แผนผังเว็บไซต์ | เว็บไซต์คาสิโนออนไลน์ BKK2D'
            }
        },
         head() {
             var lang = localStorage.getItem('locale')
             if(lang == 'en') {
                 var url = 'https://www.bkk2d.com/sitemap/'
             }else {
                 var url = 'https://www.bkk2d.com/sitemap/' 
             }
        return {
            title: this.title,
           meta: [
                {
                    hid: 'แผนผังเว็บไซต์ | เว็บไซต์คาสิโนออนไลน์ BKK2D',
                    name: 'แผนผังเว็บไซต์ | เว็บไซต์คาสิโนออนไลน์ BKK2D',
                    content: 'ค้นหาลิงก์และรับหน้าเว็บไซต์ทั้งหมดโดยตรงจากแผนผังเว็บไซต์'
                },

            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/images/bkk2d.png', defer: true },
                { rel: 'canonical', href:url }
            ]
        }
      }
    }
</script>

<style  scoped>
    .footer-background span {
        color:#fff;
    }
    .footer-background .card_bg {
        padding-top:80px;
    }
    .footer-background .el-card {
        background: hsla(0,0%,100%,.2)!important;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        border: 0!important;
        border-radius: 9px!important;
        }
    .footer_heading {
    }
  
    .sitemap h3 {
    padding-top:20px;
    background: -webkit-linear-gradient(#FDDA5C,#F38F09);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    
    .sitemap .footer_1{
        text-align: center;
        background-color: #000;
        position: fixed;
        bottom:0;
        width:100%;
        /* background-image: url(~/imagesbanner-5.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%; */
    }
    .sitemap .footer-background {
        text-align: center;
        background-image: url(~/imagesgame-bg.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 100vh;
    }
    .sitemap-item {
        padding:0;
        margin:0;
        text-align: center;
    }
    .sitemap-item li {
        display: inline-block;
        padding:30px 50px;
        
    }
    .sitemap-item li a {
        color:#fff;
    }
    @media (max-width: 1200px) {
        .sitemap-item li {
            display: block;
            padding:10px;
        }
         .footer-background .card_bg {
            padding-top:50px;
            margin:0 20px;
    }
    }

</style>
