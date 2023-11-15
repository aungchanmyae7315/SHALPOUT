
<template>
  <main>
   
    <div  class="fixed is-minimized">
   

      <div class="bottom-section">
        <header>
          <el-row class="header_content">
            <el-col :span="3">
              <div class="brand-name">
             
                <img src="/images/logo.png" alt="" class="logo" />
              
            </div>

            <div
              class="drawer-toggle"
              role="button"
              @click="$store.dispatch('toggleSidebar')"
            >
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
            </el-col>
            <el-col :span="13">
              <div class="app-links">
                <app-links></app-links>
              </div>
            </el-col>
            <el-col :span="3">
              <el-dropdown  @command="changeLang">
                <div class="lang_svg">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="earth-americas" class="svg-inline--fa fa-earth-americas fs-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>
                  <span>Language</span>
                </div>
              
                   
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="en"> <img style="width:23px" src="/images/english_icon.png" alt /> English </el-dropdown-item>
                      <el-dropdown-item command="th">   <img style="width:23px" src="/images/thai.svg" alt /> Thai </el-dropdown-item>
                     
                    </el-dropdown-menu>
                  </el-dropdown>
            </el-col>
            <el-col :span="5" v-if="this.$store.state.isLoggedIn">
                <div class="login_profile">
                  <nuxt-link type="text" to="/profile">
                    <div>
                      <el-avatar icon="el-icon-user-solid"></el-avatar>
                    </div>
                  </nuxt-link>
                  
                    <div class="name_amount">
                      <h6>Name</h6>
                      <p>900</p>
                    </div>
                  
                  
                  
                </div>
            </el-col>
           

           
          </el-row>
        </header>
      </div>
    </div>
        <el-dialog
              :visible.sync="dialogVisible"
              class="change_lang_modal"
             
            >
              <div class="lang lang_icon">
                <el-dropdown @command="changeLang" style="text-align: center">
                  <el-dropdown-item round command="en">
                 <el-row style="text-align:left;">
                    <el-col :span="10">
                        <img src="/images/english_icon.png" alt /> 
                    </el-col>
                    <el-col :span="12">
                        <span>English</span>
                    </el-col>
                  </el-row>
                  </el-dropdown-item>
                  <el-dropdown-item round command="th">
                   <el-row style="text-align:left;">
                    <el-col :span="10">
                        <img src="/images/thai.svg" alt /> 
                    </el-col>
                    <el-col :span="12">
                        <span>Thai</span>
                    </el-col>
                  
                  </el-row>
                  </el-dropdown-item>
                </el-dropdown>
              </div>
            </el-dialog>
  </main>
</template>

<script>
import AppLinks from "@/components/AppLinks";

export default {
  components: { AppLinks },
  data() {
    return {
       active: 1,
       dialogVisible: false,
    }
  },
  mounted() {
   
  },
  methods: {
      changeLang(lang) {
      //mutate 'locale' in store
      this.$store.commit("SET_LANG", lang);
      //re-route to the current page but with the selected language in a query string
      if(process.client){
      window.location.reload();
      }
        this.dialogVisible = false
       //  this.$router.push ({path: `${this.$router.currentRoute.path}`})
    //  this.$router.push('/');
      }
  },
};
</script>

<style scoped>

#navbar {
  z-index: 800;
}
#navbar #navbar-inner {
  width: 1600px;
  max-width: 100%;
  margin: 0 auto;
}

#navbar.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
#navbar.is-minimized {
  transform: translateY(-51px);
}
#navbar.is-maximized {
  transform: translateY(0);
}

.logo {
  width:74px;
  margin-left: 80px;
}
.header_content {
  padding: 4px 0px;
  position: relative;
  display: flex;
}

.header_signin {
  background-color: #060c29;
  margin: 0 auto;
}
.header_signin .signin_text {
  color: gold;
  text-align: right;
  position: relative;
  top: 4px;
  padding-right: 40px;
}
.signin_text h6 {
  padding-top: 15px;
  font-size: 14px;
  color: gold;
  font-weight: bold;
}
.signin_text a {
  text-decoration: none;
}
header {
  position: fixed;
  width:100%;
  z-index: 9;
  align-items: center;
  background-color: #063f03da;
}

.app-links {
  justify-self: end;
  padding:8px 0;
}
.change_lang {
  display: block;
}

/* .brand-name {
  margin: 0 10px;
  font-size: 1.3rem;
  padding-right: 10px;
} */

.brand-name a {
  text-decoration: none;
  color: white;
}

.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: white;
}

.drawer-toggle {
  display: flex;
  justify-self: end;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  padding-right: 16px;
  cursor: pointer;
  position: absolute;
  top: 8px;
}
.app-links {
  display: none;
}
@media (max-width: 769px) {
    #navbar.is-minimized {
    transform: translateY(-44px);
    }
  header {
    padding:5px 8px;
  }

  .logo {
    width:58% !important;
    
  }


  .brand-name img {
    display: block;
  }
  .brand-name {
    margin: 0;
  }
  header:nth-child {
    justify-self: end !important;
  }
  .app-links {
    display:none;
  }
  .header_content {
    left: 3px;
  }
  .header_signin .signin_text {
   
  }
  .signin_text h6 {
    padding-top: 7px;
  }


}
@media (max-width: 1200px) {
  #navbar.is-minimized {
    transform: translateY(-58px);
    }
}
@media (max-width: 900px) {
  #navbar.is-minimized {
    transform: translateY(-50px);
    }

  .lang_icon .el-dropdown-menu__item {
    width:100% !important;
  }


}
@media (min-width: 460px) {
 .logo {
   
 }


}
@media (max-width: 450px) {
  .logo {
    width:85% !important;
  }


}
@media (max-width: 400px) {
  .logo {
    width:85% !important;
  }
  
  #navbar.is-minimized {
    transform: translateY(-40px);
    }

  .header_signin .signin_text {
    padding-right: 5px !important;
  }
}
@media (max-width: 320px) {
  #navbar.is-minimized {
    transform: translateY(-44px);
    }
  .logo {
    margin-left: 15px;
  }
 
}
@media (max-width: 374px) {
  .el-dropdown-menu__item {
    padding:0 !important
  }
  /* .brand-name {
             left:285px;
         } */
}
@media (min-width:1200px) {
 
  /* .brand-name {
             left:303px;
         } */
  /* .logo {
             margin-left:15px;
         } */
         
}
@media (min-width: 320) {
}

@media (min-width: 769px) {
  .app-links {
    display: block;
  }

  

  .drawer-toggle {
    display: none;
  }
}
.brand-name img {
  position: relative;
}




.language_btn {
  padding:0;
}
.change_lang_modal {
  width:100%;
}
.change_lang_modal img {
  width:50px;
}
.change_lang_modal span {
  position: relative;
  top:8px;
}
.lang_icon .el-dropdown {
  width:100%;

}
.lang_icon .el-dropdown-menu__item {
  margin:10px auto;
  width:200px;
}
.login_profile {
  display: flex;
  color:#fff;
  position: relative;
  top:13px;
}
.login_profile  .name_amount {
  padding-left:10px;
}
.login_profile .name_amount h6 {
  margin:0;
}
.login_profile .name_amount p {
  color:yellow;
  margin:0;
}


</style>
