
<template>

 
</template>

<script>
import AppLinks from "@/components/AppLinks";
import { useStore } from '~/store/state';
export default {
  components: { AppLinks },
  data() {
    return {
       active: 1,
       drawer:false,
       dialogVisible: false,
       store : useStore(),
       lang: '',
       languages : [
       {
          value: 'English',
          label: 'English',
          image:'https://shalpout.com/static/media/en_icon2.496925bde04c547d114a.webp'
        },
        {
          value: 'Myanmar',
          label: 'Myanmar',
          image:'https://shalpout.com/static/media/mm_icon.07dedcf4ebeb572cfb2a.webp'
        },
        {
          value: 'Thai',
          label: 'Thai',
          image:'https://shalpout.com/static/media/th_icon.b60e61a089de902ac135.webp'
        },
       ],
       selectedItem: 'English',
      items: [
        'English',
        'Myanmar',
        'Thai'
      ]
    }
  },
  mounted() {
    //let language = localStorage.getItem('locale')
    
  },
  methods: {
   
    changeLang(data) {
      if(data == "English") {
        this.lang = "en"
      }else if(data == "Myanmar") {
        this.lang = "mm"
      }else if(data == "Thai"){
        this.lang = "th"
      }
      console.log(data,'//////')
      this.store.SET_LANG(this.lang)
         if(process.client){
      window.location.reload();
      }
    },
    //   changeLang(lang) {
    //   //mutate 'locale' in store
    //   this.store.SET_LANG(lang)
    //   //re-route to the current page but with the selected language in a query string
    //   if(process.client){
    //   window.location.reload();
    //   }
    //     this.dialogVisible = false
    //    //  this.$router.push ({path: `${this.$router.currentRoute.path}`})
    // //  this.$router.push('/');
    //   }
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

 .v-input__control {
  width:130px !important;
}
@media (max-width: 769px) {
    #navbar.is-minimized {
    transform: translateY(-44px);
    }
  header {
    padding:5px 8px;
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



}
@media (max-width: 450px) {


}
@media (max-width: 400px) {

  
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



</style>
