<template>
    <div>
        <v-app style="background-color: #010;">

            <!-- <Navbar/> -->
            <Background />
            <Navbar />






            <NuxtSnackbar />
            <div class="app-container">
                <NuxtPage />
            </div>





            <!-- <TheFooter/> -->
        </v-app>

    </div>
</template>

<script>

import { useStore } from '~/store/state';
import TheHeader from '~/components/TheHeader'
// import TheFooter from '~/components/TheFooter'
import TheSideNav from '~/components/TheSideNav'

export default {
    data() {
        return {
            title: "",
            store: useStore(),
            // link: [
            //    {
            //     href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
            //     rel:"stylesheet",
            //     integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
            //     crossorigin:"anonymous"
            //    }
            // ],
            // script: [
            //     {
            //         src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
            //         integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
            //         crossorigin:"anonymous"
            //     },
            //     {
            //         src:"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
            //         integrity:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
            //         crossorigin:"anonymous"
            //     },
            //     {
            //         src:" https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
            //         integrity:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
            //         crossorigin:"anonymous"
            //     }

            // ]
        }
    },
    components: {
        TheHeader,
        TheSideNav,
        // TheFooter
    },

    computed: {

        // isSidebar() {
        //     return this.store.getters['toggleSidebar']
        // }

    },

    mounted() {

        this.updateIsLoggedIn();
        this.updateLang();
    },
    methods: {
        updateIsLoggedIn() {
                this.store.updateIsLoggedIn(this.hasUserInfo());

        },
        hasUserInfo() {
            return Boolean(localStorage.getItem("userInfo"));
        },
        updateLang() {
            this.store.updateLang(this.hasLang());
        },
        hasLang() {
            return Boolean(localStorage.getItem("locale"));
        },
    },

}

</script>

<style>
html,
body {
    margin: 0;
    height: 100%;
    width: 100%;
}

.app-container {
    padding-top: 62px;
    height: 100%;
    position: relative;
    display: grid;
    grid-template: auto 1fr auto / 1fr;
}

.app-content {
    overflow: hidden;
    align-items: center;
    justify-items: center;
    padding-top: 80px;
}

.particles-js-canvas-el {
    background-color: #000;
    position: fixed;
}
</style>