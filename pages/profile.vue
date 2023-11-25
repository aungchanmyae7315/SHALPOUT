<template>
    <section class="profile">
        <div style="margin:50px 0;">
            <ProfileDetail></ProfileDetail>
        </div>
      
        <TopupItem></TopupItem>
        <TheFooter></TheFooter>
    </section>
</template>

<script>
    import ProfileDetail from '~/components/ProfileDetail';
    import TopupItem from '~/components/TopupItem';
    
     import TheFooter from '~/components/TheFooter'
import { useStore } from '~/store/state';


    export default {

        components: {
        ProfileDetail,
        TheFooter,
        TopupItem
},
mounted() {
            this.updateIsLoggedIn();
            this.updateLang();
        },
        data() {
            return {
               store:useStore()
            }
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

<style  scoped>
.profile {
       
    }
 
</style>
