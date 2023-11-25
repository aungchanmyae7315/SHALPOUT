<template>
      <v-row style="text-align: -webkit-center;">
            <v-col cols="12" lg="6" >
                <div class="footer_content_1">
                    <img src="/images/footer/footer_logo.png" alt="">
                    <h2>{{$t('titleFive') }}</h2>
                    <p>{{$t('desFive') }}</p>

                </div>
            </v-col>
            <v-col cols="12" lg="6">
                <div class="footer_content_2" >
                    <div class="wavemoney_icon">
                        <img  src="/images/footer/wavemoney.png" alt="">
                    </div>
                 
                   <ul>
                    <li><img src="/images/footer/kpay.png" alt=""></li>
                    <li><img src="/images/footer/kbz_bank.png" alt=""></li>
                    <li><img src="/images/footer/aya.png" alt=""></li>
                    <li><img src="/images/footer/cbpay.png" alt=""></li>
                    <li><img src="/images/footer/thai_bank_01.png" alt=""></li>
                    <li><img src="/images/footer/thai_bank_02.png" alt=""></li>
                    <li><img src="/images/footer/thai_bank_03.png" alt=""></li>
                    <li><img src="/images/footer/thai_bank_04.png" alt=""></li>
                    <li><img src="/images/footer/thai_bank_05.png" alt=""></li>

                   </ul>
                </div>
            </v-col>
        </v-row>
        <div class=" copyright ">
         
            <div style="text-align: center;color:#fff;width:100%;padding-top:20px">
                <p style="text-align: center;">Copyright © 2023, SHAL POUT.</p>
            </div>
            
        </div>
</template>
<script>

    import Cardgroup from '~/components/game_card_group'

    export default {

        components: {
            Cardgroup
        },
    }

</script>
<style scoped>
   
  
    .footer_1{
        text-align: center;
        background-image: url(~/imagesgame-bg.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .footer_content_1 h2 {
        padding-top:20px;
        margin-bottom: 40px;
        font-weight: unset  !important;
    }
    .footer_heading span{
        text-align: center;
    }
    .footer_content_1 {
        color:#fff;
        padding:0 30px;
    }
    .footer_content_1 img {
        width:240px;
    }
    .footer_content_1 p {
        text-align: center;
    }
    .footer_content_2 {
        display: table-caption;
        text-align: -webkit-center;
        padding-top:70px;
    }
    .footer_content_2 .wavemoney_icon img {
        width:300px;
        display: block;
        border:1px solid red;
        border-radius: 13px;
        margin-bottom: 20px;
    }
    .footer_content_2 ul li img {
        width:54px;
        height: 54px;
        padding:5px;
        border-radius:10px;
    }
    .footer_content_2 ul {
        display: inline-block;
    }
    .footer_content_2 ul li {
        list-style: none;
        display: inline-block;
    }
    .copyright {
    position: relative;
    border-top:1px solid #b8b8b8;
    padding:20px;
    margin:0;
    text-align: -webkit-center;
    background-color: #002E02;
  }

   
</style>