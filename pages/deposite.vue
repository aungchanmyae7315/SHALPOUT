<template>
    <main>

    
    <section class="profile">
        
    <ProfileDetail></ProfileDetail>
    <TopupItem></TopupItem>
    
    </section>
    <TheFooter></TheFooter>
</main>
</template>

<script>
import { useStore } from '~/store/state';
    import ProfileDetail from '~/components/ProfileDetail';
    import TopupItem from '~/components/TopupItem';
     import TheFooter from '~/components/TheFooter'
    export default {
        mounted() {
            this.updateIsLoggedIn();
            this.updateLang();
        },
        components: {
            ProfileDetail,
            TopupItem,
            TheFooter
        },
        data() {
            return {
                store:useStore(),
               
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
                console.log(this.store,'lee par pal')
                    this.store.updateLang(this.hasLang());
                },
                hasLang() {
                    return Boolean(localStorage.getItem("locale"));
                },
      
    },
    }
</script>

<style scoped>
    .profile {
        padding: 30px 50px;
        margin:20px auto 30px auto;
    }
    .profile_item {
        position: relative;
        align-items: center;
    background: linear-gradient(270deg,#1ca734,#b69439)!important;
    border: 1px solid #fbff00;
    border-radius: 150px 10px 10px 150px;
    box-shadow: 2px 2px 10px 3px;
    box-shadow: 1px 1px 5px #fcff31b2, -1px -1px 5px #259206a4;
    display: flex;
    gap: 3em;
    height: 180px;
    margin: 50px auto;

    }
    .profile_img {
        width:250px;
        background: linear-gradient(45deg,#99a406,#05a11f);
    border: 5px solid;
    border-image: linear-gradient(45deg,#99a406,#05a11f) 5;
    border-radius: 50%;
    box-shadow: 0.5px 0.5px 10px #99a406, -0.5px -0.5px 10px #05a11f;
    height: 264px;
    outline: 10px solid transparent;
    }
    .user_logout svg{
        width:23px;
        padding:0 3px;
    }
    .user_logout .el-button span {
      position: relative;
      padding:2px;
      bottom:3px;
    }
    .profile_btns {
        padding:20px 0;
        text-align: center;
    }
    .profile_btns svg {
        width:22px;
        display: block;
    }
    .profile_btns .el-col-8{
        padding:0 5px;
    }
    .profile_btns .el-button {
        width:100%;
        margin:0 5px;
        text-align: -webkit-center;
    }
    .profile_btns .el-button h6 {
        margin:0;
    }
    .profile_btns .show_only_deposit {
        width:100% !important;
        padding:12px 10px;
        margin-top:8px;
        background-color: #ffc107;
        color:#000;
        font-weight: bold;
        border:0;
        cursor: unset;
    }
    .profile_btns .show_only_deposit:active {
        border:0 !important;
    }
    .profile_btns .deposit_btn {
        background-color: #ffc107;
        color:#000;
        border:0;
    }
    .change_password_btn {
        color:#fff;
        font-size: 17px;
        background-color: orange;
        border:0;
    }
    .logout_btn {
        color:#fff;
        font-size: 17px;
        background-color: red;
        border:0;
    }
    
</style>