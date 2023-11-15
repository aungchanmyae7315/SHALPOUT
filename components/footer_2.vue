<template>
    <footer class="footer_1">
         <!-- <div class="footer_heading">
                   <h1 class="footer2_header">Other Games you may like</h1>
                    
        </div> -->
        <!-- <Cardgroup/> -->
        <div class="row copyright" style="width:100%">
            <div class="col-md-6">
            <div class="footer_content">
                <span>Copyright © 2021 All rights reserved.</span>
            </div>
            </div>
           <div class="col-md-6">
                <div class="footer_content">
                    <nuxt-link to="/sitemap/" style="color:gold;text-decoration: underline;">Sitemap</nuxt-link>
                </div>
            </div>
        </div>
    </footer>
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
    .footer2_header{
    background: -webkit-linear-gradient(#FDDA5C,#F38F09);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    .footer_heading{
        text-align: left;
        max-width: 1000px;
        margin: auto;
    }
    .footer_1{
        text-align: center;
        background-color: #000;
        /* background-image: url(~/imagesbanner-5.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%; */
    }
</style>