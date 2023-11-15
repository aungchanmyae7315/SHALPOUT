<template>
      
        <div class="row copyright ">
            <div class="col-md-6" >
                <div class="footer_content_1">
                    <img src="/images/footer/footer_logo.png" alt="">
                    <h3>Payment systems available at Shal Pout Entertainment</h3>
                    <p>1kyat = 1unit for Myanmar players We Accepted Kpay, Wavepay, CBpay, AYApay and you can also play with KBZ, CB, AYA Banking For players from Thailand, 1bath = 80units You can play at any Thai banks</p>

                </div>
            </div>
            <div class="col-md-6" >
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
            </div>
            <div style="text-align: center;color:#fff;width:100%;padding:20px 0;">
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
    .footer_heading{
        max-width: 724px;
        margin:0 auto;
        color:#fff;
        padding:50px 15px 30px 15px;
        
    }
    .footer_1{
        text-align: center;
        background-image: url(~/imagesgame-bg.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .footer_heading h3 {
          background: -webkit-linear-gradient(#FDDA5C,#F38F09);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    .footer_heading span{
        text-align: center;
    }
    .footer_content_1 {
        color:#fff;
        padding:0 30px;
    }
    .footer_content_1 img {
        width:350px;
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
    padding:30px 0 10px 0;
    margin:0;
    text-align: -webkit-center;
    background-color: #002E02;
  }

   
</style>