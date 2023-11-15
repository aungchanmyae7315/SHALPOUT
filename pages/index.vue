<template>
    <div  class="app-container">
      <TheHeader/>
      <TheSideNav/>
      <!-- <vue-particles 
        color="#b8b8b8"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push">
    
    </vue-particles> -->
       

       
       



        

        <div class="app-content">
    <main class="">
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="slider in sliders" :key="slider">
                <img class="slider_img" :src="slider" alt="">
            </el-carousel-item>
        </el-carousel>
        <TheSocial></TheSocial>
        <div v-if="!this.$store.state.isLoggedIn">
            <TheLogin></TheLogin>
        </div>

        <section class="heading_two " v-if="!this.$store.state.isLoggedIn">
            <div class="row ">
                <div class="col-md-6">
                    <div class="heading_two_content" data-aos="fade-right" data-aos-duration="1500">
                        <h3>SHALPOUT.COM</h3>
                        <p>SHAl POUT Entertainment is one of a large online gaming company that provides special services for players in Myanmar and Thailand. 100% accuracy of Depositing and withdrawing money is our company's best service. Since Shat pout online gaming is an automatic deposit and withdrawal system, you can play with confidence at all times. Let your luck and happiness be created by winnings...</p>
                        <!-- <h3>{{ $t('section_2_h1') }}</h3>
                        <p>{{ $t('section_2_p1') }}</p>
                        <p>{{ $t('section_2_p2') }}</p>
                        <p>{{ $t('section_2_p3') }}</p> -->

                    </div>
                    <div style="text-align: center;">
                        <el-button class="viber_btn social_btn" round>
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="viber"
                                class="svg-inline--fa fa-viber fs-3 me-1" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z">
                                </path>
                            </svg>
                            <span style="position:relative;bottom:3px;"> Contact</span>
                        </el-button>
                    </div>

                </div>
                <div class="col-md-6">
                    <img src="/images/casino.png" alt="เกมคาสิโนออนไลน์ด้วยเงินจริง">
                </div>
            </div>
        </section>
        <section class="heading_one " v-if="!this.$store.state.isLoggedIn">
            <div class="row ">
                <div class="col-md-6">
                    <img src="/images/nolimitation_slot.png" alt="เกมคาสิโนออนไลน์ BKK2D">
                </div>
                <div class="col-md-6">
                    <div class="heading_one_content" data-aos="fade-left" data-aos-duration="1500">
                        <!-- <img src="/images/logomark.svg" alt=""> -->
                        <h3>Shal Pout is one of slot company that does not limit the possibility of MAX Win</h3>
                        <p>Shal Pout is one of slot company that does not limit the possibility of MAX Win SHAL POUT is a large direct company that is not an intermediary agent company, so there is no limit to maximum percentage of winning chance. Slots games are always created to be new and upto date. You can play safely with the automatic deposit and withdrawal system with minimal restrictions and rules.</p>
                        <!-- <h1>{{ $t('section_1_h1') }}</h1> -->
                        <!-- <p>{{ $t('section_1_p1') }}</p>
                        <p>{{ $t('section_1_p2') }}</p>
                        <p>{{ $t('section_1_p3') }}</p>
                        <p>{{ $t('section_1_p4') }}</p> -->
                        <div style="text-align: center;">
                            <el-button class="line_btn social_btn" round>
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="line" class="svg-inline--fa fa-line fs-3 me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"></path></svg>
                                <span style="position:relative;bottom:3px;"> Contact</span>
                            </el-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="heading_three" v-if="!this.$store.state.isLoggedIn">
        <div class="">
            <img src="/images/shalpoutcom.png" alt="เกมคาสิโนออนไลน์ด้วยเงินจริง">
            <div class="heading_three_content" data-aos="fade-left" data-aos-duration="1500">
            <h3>Welcome to Shal Pout , the real online gaming company for players in Myanmar and Thailand</h3>
            <p>You can play multiple live casino, slots and fishing games in Shal Pout Entertainment. You can play from any phone, tablets, or computers as long as you have an internet connection. You can play with the automatic deposit and withdrawal system at any time</p>
            </div>
        </div>
        </section>
        <TheGames />
        <TheFooter />
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJL4HPQ" height="0" width="0"
                style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
    </main>
    </div>
    </div>
</template>
<script>

// import Vue from 'vue'
// import VueParticles from 'vue-particles'
// Vue.use(VueParticles)



export default {

 
    asyncData() {
        function someMiddleware({ redirect }) {
            redirect('/');
        }

    },
    computed: {

    isSidebar() {
        return this.$store.getters['toggleSidebar']
    }

    },
    watch: {
            '$route': function() {
                if (process.client && this.isSidebar && window.innerWidth < 769) {
                    this.$store.dispatch('toggleSidebar')
                }
            },
        },
    mounted() {
        this.updateIsLoggedIn();
        this.updateLang();
        // var url_string = window.location.href
        // var url = new URL(url_string);
        // var c = url.searchParams.get("lang");
        // console.log(c);
        //  localStorage.removeItem("locale")
        // if(c == "en") {
        //      console.log('english')
        //     var lang = "en"

        //     this.$store.commit("SET_LANG", lang);
        // }else if(c == "th")  {
        //      var lang = "th"
        //     this.$store.commit("SET_LANG", lang);
        // }else {

        //      var lang = "th"

        //     this.$store.commit("SET_LANG", lang);
        // }

    },
    data() {
        return {
            title: this.$t('home_title'),

            // sliders: [
            //     "/images/slider1.jpg",
            //     "/images/slider2.jpg",
            //     "/images/slider3.jpg",
            // ]
        }
    },
    head() {
        var lang = localStorage.getItem('locale')
        if (lang == 'en') {
            var url = 'https://www.bkk2d.com'
        } else {
            var url = 'https://www.bkk2d.com'
        }
        return {
            title: this.title,
            meta: [
                {
                    hid: this.$t('home_title'),
                    name: this.$t('home_title'),
                    content: this.$t('home_description'),
                },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/images/bkk2d.png', defer: true },
                { rel: 'canonical', href: url, },

            ]
        }
    },
    methods: {
        updateIsLoggedIn() {
        this.$store.commit("updateIsLoggedIn", this.hasUserInfo());
        },
        hasUserInfo() {
        return Boolean(localStorage.getItem("userInfo"));
        },
        updateLang() {
            this.$store.commit("updateLang", this.hasLang());
        },
        hasLang() {
            return Boolean(localStorage.getItem("locale"));
        },

    }
}
</script>

<style>
  .app-container{
        height: 100%;
        position: relative;
        display: grid;
        grid-template: auto 1fr auto / 1fr;
    }
    .app-content{
        overflow: hidden;
        align-items: center;
        justify-items: center;
        padding-top:80px;
    }
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

.viber_btn {
    background-color: initial;
    background-image: linear-gradient(240deg, #e000ff, #588dff);
    background-image: linear-gradient(240deg, #3f29ca, #7360f2);
    border: 1px solid #fbff00;
    border-radius: 50px 50px 50px 50px !important;
    box-shadow: 0 0 10px 0 rgba(4, 113, 0, .5);
    color: #fff;
    display: inline-block;
    font-family: Kanit, Sans-serif;
    font-size: 19px;
    font-weight: 500;
    padding: 10px 70px !important;
    text-decoration: none;
    transition: .5s;
}
.line_btn {
    background-color: initial;
    background-image: linear-gradient(240deg,#3f9a02 30%,#0a811a 70%);
    border: 1px solid #fbff00;
    border-radius: 50px 50px 50px 50px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
    color: #fff;
    display: inline-block;
    font-family: Kanit,Sans-serif;
    font-size: 19px;
    font-weight: 500;
    margin: 0 20px 20px;
    padding: 10px 70px !important;
    text-decoration: none;
    transition: .5s;
}

.social_btn:hover {
    -webkit-transform: scale(.9);
    transform: scale(.9);
    transition: .5s;
    color: #fff;
}

.social_btn svg {
    width: 25px;
}
</style>


