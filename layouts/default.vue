<template>
    <div  class="app-container">
      <TheHeader/>
      <TheSideNav/>
      <vue-particles 
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
    
    </vue-particles>
       

       
       



        

        <div class="app-content">
           
            <nuxt />
            
        </div>
       

        <!-- <TheFooter/> -->

    </div>
</template>

<script>
 
 import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
    import TheHeader from '~/components/TheHeader'
    // import TheFooter from '~/components/TheFooter'
    import TheSideNav from '~/components/TheSideNav'

    export default {

        components: {
            TheHeader,
            TheSideNav,
            // TheFooter
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
        }

    }

</script>

<style>
    html, body{
        margin: 0;
        height: 100%;
        width: 100%;
    }
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


  
</style>