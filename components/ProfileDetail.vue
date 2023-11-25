<template>
    <section class="profile">
        <div class="profile_item">
      
      <img class="profile_img" src="/images/profile_img.png" alt="">
      <div class="profile_userDetail">
          <h6>{{profile.name }}</h6>
          <p>ID - {{ profile.phone }}</p>
          <h5>{{ profile.balance }} MMK</h5>
      </div>
      <div class="user_logout">
          <v-btn size="large" class="change_password_btn">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="key" class="svg-inline--fa fa-key me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"></path></svg>
              <span>Change Password</span> 
          </v-btn>
          <v-btn size="large" class="logout_btn" @click="Logout()">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right-from-bracket" class="svg-inline--fa fa-arrow-right-from-bracket me-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"></path></svg>
             <span>Logout</span> 
          </v-btn>

      </div>
             
    </div>
  
        
    </section>
   
</template>

<script>
import { useStore } from '~/store/state';
    export default {

        components: {
          
        },
        mounted() {
            let token = localStorage.getItem("token");
            console.log(token,'token')
            if(token) {
                $fetch('/profile', {
                 headers: {
                    Authorization: "Bearer " + token,
                },
                    method:'post',
                    baseURL:'https://backend.shalpouts.com/api'
                })
                .then((response) => {
                    this.profile = response.data
                   
                    this.store.profile(this.profile)
                    console.log(response.data,'profile api')
                    
                })
            }
            
        },
        data() {
            return {
                profile:'',
                store:useStore(),
                title: ''
            }
        },
        
      methods: {
        LogoutPre() {
            
        },
        Logout() {
            let token = localStorage.getItem("token");
    
            console.log(token,'token,,,,')
    if (token) {
    //   this.$axios
    //     .post("logout", {
    //       headers: {
    //         Authorization: " Bearer " + token,
    //       },
    //     })
        
            $fetch('/logout', {
                 headers: {
                    Authorization: "Bearer " + token,
                },
                    method:'post',
                    baseURL:'https://backend.shalpouts.com/api'
                })
        .then((response) => {
            console.log(response.status)
            if(response.status == 'success') {

                let store = useStore()
                store.logOut();
                this.$router.push('/');
            }
        })
       
    }
       
    },
      
    },
    }
</script>

<style scoped>
    .profile {
        padding: 30px 50px;
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
    margin: 0px auto;

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
        margin-right: 10px !important;
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