<template>
         <div class="card_group">
           <div class="row ">
             <div class="col-sm-3 col-6" data-aos="zoom-in-down"  data-aos-duration="1500">
                 <nuxt-link to="/thai-lottery/">
                <div class="img-hover-zoom">
                <img class="game_img" src="/images/thai-lottery.png" alt="หวยไทยออนไลน์">
                </div>
                   <img class="game_img_1" src="/images/thailottery-text.png" alt="">
                 </nuxt-link>
            </div>
            <div class="col-sm-3 col-6" data-aos="zoom-in-down"  data-aos-duration="1500">
                 <nuxt-link to="/myanmar-2d/">
                <div class="img-hover-zoom">
                <img class="game_img" src="/images/myanmar-2d.png" alt="ลอตเตอรี่ออนไลน์ 2D ของเมียนมาร์">
                </div>
                   <img class="game_img_1" src="/images/myanmar2D-text.png" alt="">
                 </nuxt-link>
            </div>
            <!-- <div class="col-sm-3 col-6">
              
                <nuxt-link  to="/lottery">
                <div class="img-hover-zoom">
                    <img class="game_img" src="/images/lottery-game-icon.png" alt="">
                </div>
                 <img class="game_img_1" src="/images/lottery-text.png" alt="">
                </nuxt-link>
            </div> -->
            <!-- <div class="col-sm-3 col-6">
                <nuxt-link  to="/live-casino">
                <div class="img-hover-zoom">
                    <img class="game_img" src="/images/casino.jpg" alt="">
                </div>
                 <img class="game_img_1" src="/images/livecasino-text.png" alt="">
                </nuxt-link>
            </div> -->
            <div class="col-sm-3 col-6" data-aos="zoom-in-down"  data-aos-duration="1500">
                 <nuxt-link to="/table-game/">
                <div class="img-hover-zoom">
                <img class="game_img" src="/images/table-game.png" alt="เกมโต๊ะคาสิโนออนไลน์">
                </div>
                   <img class="game_img_1" src="/images/tablegame-text.png" alt="">
                 </nuxt-link>
            </div>
            <div class="col-sm-3 col-6" data-aos="zoom-in-down"  data-aos-duration="1500">
                <nuxt-link to="/slot-game/">
                <div class="img-hover-zoom">
                <img class="game_img" src="/images/slot-game.png" alt="เกมสล็อตคาสิโนออนไลน์">
                </div>
                   <img class="game_img_1" src="/images/slotgame-text.png" alt="">
                 </nuxt-link>
            </div>
             <!-- <div class="col-sm-3 col-6">
                 <nuxt-link  to="/fishing-game">
                <div class="img-hover-zoom">
                <img class="game_img" src="/images/fishgame-icon.jpg" alt="">
                </div>
                   <img class="game_img_1" src="/images/fishinggame-text.png" alt="">
                 </nuxt-link>
            </div>
             <div class="col-sm-3 col-6">
                 <nuxt-link  to="/sport-game">
                <div class="img-hover-zoom">
                <img class="game_img" src="/images/football-icon.jpg" alt="">
                </div>
                   <img class="game_img_1" src="/images/sportgame-text.png" alt="">
                 </nuxt-link>
            </div> -->
           
           </div>
                    
        </div>
</template>

<style scoped>
    .img-hover-zoom {
    box-shadow: 0px 2px 8px #FFF140D9;
    border: 2px solid #FCD354;
    border-radius: 10px;
    margin-top:20px ;
    width: 85%;
    overflow: hidden; 
    }
    .img-hover-zoom img {
    transition: transform .5s ease;
    }

    .img-hover-zoom:hover img {
        transform: scale(1.5);
    }
    .card_group{
        padding:25px;
        max-width: 1000px;
        margin:auto;
        text-align: -webkit-center;
    }
    .card_group .game_img{
        width: 100%;
    }
    .game_img_1{
        width: 65%;
        margin:15px auto;
       
    }
</style>