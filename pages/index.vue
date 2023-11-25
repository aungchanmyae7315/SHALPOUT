<template>
    <div  class="">
        

      <!-- <TheHeader/> -->
      <!-- <TheSideNav/>
     -->
     <v-carousel
    cycle
    height="650"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in sliders"
      :key="i"
      :src="slide.image"
    >
      
    </v-carousel-item>
  </v-carousel>
 

        <TheSocial></TheSocial>
        <div >
            <Background/>
            <div v-if="!store.isLoggedIn">
                <TheLogin></TheLogin>
            </div>
           
        </div>

        <section class="heading_two ">
            <v-row >
                <v-col cols="12" lg="6">
                    <div class="heading_two_content"  data-aos-duration="1500">
                        <h2>SHALPOUT.COM</h2>
                        <p>{{ $t('desFour') }}</p>

                    </div>
                    <div style="text-align: center;">
                        <v-btn size="x-large" class="viber_btn social_btn" round>
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="viber"
                                class="svg-inline--fa fa-viber fs-3 me-1" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z">
                                </path>
                            </svg>
                            <span style="padding-left:10px;"> Contact</span>
                        </v-btn>
                    </div>

                </v-col>
                <v-col cols="12" lg="6"   style="text-align: center;">
                    <img src="/images/casino.png" alt="">
                </v-col>
            </v-row>
        </section>
        <section class="heading_one " >
            <v-row >
                <v-col cols="12" lg="6"  style="text-align: center;" >
                    <img src="/images/nolimitation_slot.png" alt="">
                </v-col>
                <v-col  cols="12" lg="6">
                    <div class="heading_one_content"  data-aos-duration="1500">
                        <!-- <img src="/images/logomark.svg" alt=""> -->
                        <h2>{{ $t('titleOne') }}</h2>
                        <p>{{ $t('section_2_text') }}</p>
                        <div style="text-align: center;">
                            <v-btn size="x-large" class="line_btn social_btn" round>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="line" class="svg-inline--fa fa-line fs-3 me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"></path></svg>
                                <span style="padding-left:10px;">{{ $t('contact') }}</span>
                            </v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </section>
        <section class="heading_three" >
        
            <img src="/images/shalpoutcom.png" alt="เกมคาสิโนออนไลน์ด้วยเงินจริง">
            <div class="heading_three_content"  data-aos-duration="1500">
            <h2>{{ $t('message') }}</h2>
            <p>{{ $t('desThree') }}</p>
          
            </div>
            <div style="text-align: center;">
                <v-btn size="x-large" class="register_btn_home" round>
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="line" class="svg-inline--fa fa-line fs-3 me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"></path></svg>
                    <span style="padding-left:10px;"> {{$t('register') }}</span>
                </v-btn>
            </div>
        </section>
        <TheGames />
        <TheFooter />
     
  
    </div>
   
</template>
             
<script>
 import { useStore } from '~/store/state';
import { useNuxtApp } from '#app'
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const particlesInit = async engine => {
    //await loadFull(engine);
    await loadSlim(engine);
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

// const slider_data = await $fetch('https://backend.shalpouts.com/api/banners')
// const sliders =  slider_data.data

// console.log(sliders,'leeeeeee')
// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel)
export default  {

 
    asyncData() {
        function someMiddleware({ redirect }) {
            redirect('/');
        }

    },
    computed: {



    },

    mounted() {
        this.updateIsLoggedIn();
        this.updateLang();
            // const slider_data =  $fetch('https://backend.shalpouts.com/api/banners')

            // const sliders =  slider_data

            // console.log(sliders,'leeeeeee')
           
        $fetch('/banners', {
            method:'get',
            baseURL:'https://backend.shalpouts.com/api'
        }).then((response) => {

            this.sliders = response.data

            console.log(this.sliders);
        });


    },
    data() {
        return {
            store:useStore(),
          
            sliders:[],
            
        }
    },
    head() {
    
        return {
            title: this.title,
           
          
        }
    },
    methods: {
        updateIsLoggedIn() {
        let profile = JSON.parse(localStorage.getItem('profile'))
        if(profile) {
            this.store.updateIsLoggedIn(true, this.hasUserInfo());
        }
       
        },
        hasUserInfo() {
        return Boolean(localStorage.getItem("userInfo"));
        },
        updateLang() {
            this.store.updateLang("updateLang", this.hasLang());
        },
        hasLang() {
            return Boolean(localStorage.getItem("locale"));
        },

    }
}
</script> 

<style>

    .particles-js-canvas-el  {
      background-color: #000;
      position: fixed;
    }
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}
.slider_img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width:100%;
    height:100%;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}





</style>


