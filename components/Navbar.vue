<!-- components/ResponsiveNav.vue -->

<template>
  <div class="nav-bar">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none"></v-app-bar-nav-icon>
      <v-row style="text-align:center;">
        <v-col cols="4" lg="2">
         
            <img src="/images/logo.png" alt="" class="logo" />
          
        </v-col>
        <v-col class="responsive_hide" cols="4" lg="4">
          <v-container align-with-title class="d-none d-sm-flex">
            
            <nuxt-link to="/">
              <v-btn>{{$t('home') }}</v-btn>
            </nuxt-link>
            <nuxt-link  v-if="!store.isLoggedIn" to="/register">
              <v-btn>{{$t('register') }}</v-btn>
            </nuxt-link>
            <nuxt-link to="/games">
              <v-btn>{{ $t('games') }}</v-btn>
            </nuxt-link>
            <nuxt-link v-if="store.isLoggedIn"  to="/deposite">
              <v-btn>{{ $t('deposit') }}</v-btn>
            </nuxt-link>
            <nuxt-link v-if="store.isLoggedIn" to="/withdraw">
              <v-btn>{{ $t('withdraw') }}</v-btn>
            </nuxt-link>

          </v-container>
        </v-col>
        <v-col cols="6" lg="4" class="lang_profile_items" style="text-align: center;display: inline-flex;">
         
            <div style="display: inline-flex;">

              <v-select  :items="mylist" @update:modelValue="changeLang" item-title="name"
                :placeholder="Language" item-value="id">

                <template #item="{ item, props }">
                  <v-list-item v-bind="props">
                    <template #title>
                      <span><img class="lang_selec_icon" :src="item.raw.image" /> {{ item.raw.name }}</span>
                    </template>
                  </v-list-item>
                </template>
              </v-select>
 

         
              <div class="login_profile"  v-if="store.isLoggedIn">
                <nuxt-link type="text" to="/profile">
                  <v-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                  </v-avatar>
                </nuxt-link>

                <div class="name_amount">
                  <h6>{{ profile.name }}</h6>
                  <p>{{ profile.balance }}</p>
                </div>
              </div>
            </div>
        
        </v-col>
      </v-row>






    </v-app-bar>
    <!-- Add a navigation bar -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title @click="tab">
              <nuxt-link to="/">Home</nuxt-link>
            </v-list-item-title>
            <v-list-item-title @click="tab">
              <nuxt-link to="/register">Register</nuxt-link>
            </v-list-item-title>
            <v-list-item-title @click="tab ">
              <nuxt-link to="/games">Games</nuxt-link>
            </v-list-item-title>
            <v-list-item-title @click="tab ">
              <nuxt-link to="/deposite">Deposite</nuxt-link>
            </v-list-item-title>
            <v-list-item-title @click="tab ">
              <nuxt-link to="/withdraw">Withdraw</nuxt-link>
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Navigation bar ends -->

  </div>
</template>
  
<script>
import { useStore } from '~/store/state';
export default {
  data() {
    return {
      drawer: false,
      tab: false,
      store: useStore(),
      profile:'',
      Language: this.Language,
      items: [
        {
          name: "English",
          image: "https://shalpout.com/static/media/en_icon2.496925bde04c547d114a.webp"
        }
      ],
      mylist: [
        { id: 0, image: "https://shalpout.com/static/media/en_icon2.496925bde04c547d114a.webp", name: "English" },
        { id: 1, image: "https://shalpout.com/static/media/mm_icon.07dedcf4ebeb572cfb2a.webp", name: "Myanmar" },
        { id: 2, image: "https://shalpout.com/static/media/th_icon.b60e61a089de902ac135.webp", name: "Thai" },
      ]
    };
  },
  mounted() {
    const store = useStore();
    console.log(this.store.isLoggedIn,'sssss')
    let lang = localStorage.getItem('locale')
    console.log(lang,'language set')
    if (lang == 'en') {
      this.Language = "English"
    } else if (lang == 'mm') {
      this.Language = "Myanmar"
    } else if (lang == 'th') {
      this.Language = "Thai"
    } else {
      this.Language = "English"
    }
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
  methods: {
    changeLang(data) {
      console.log(data, 'language change fun')
      if (data == 0) {
        this.lang = "en"
      } else if (data == 1) {
        this.lang = "mm"
      } else if (data == 2) {
        this.lang = "th"
      }
      console.log(data, '//////')
      this.store.SET_LANG(this.lang)
      if (process.client) {
        window.location.reload();
      }
    },
  },
};
</script>
  
<style>
.nav-bar .v-tab--selected {
  font-weight: bold;
  transition: 0.5s ease;
  text-shadow: 1px 1px 10px rgba(245, 245, 239, 0.92);
  border-bottom: 1px solid #0ba532 !important;
}

.nav-bar .v-toolbar__content {
  background-color: #063f03da !important;
  color: #fff;
}

.nav-bar .v-btn__content {
  color: #fff;
}

.nav-bar .v-navigation-drawer--temporary {
  background-color: rgba(1, 7, 0, .9);
  color: #fff;
}

.nav-bar .v-list-item--nav .v-list-item-title a {
  color: #fff;
}

.nav-bar .router-link-active {
  background-color: rgba(5, 178, 34, .5) !important;
  font-weight: bold;
  transition: 0.5s ease;
  text-shadow: 1px 1px 10px rgba(245, 245, 239, 0.92);
  border-bottom: 1px solid #0ba532 !important;
  border-radius: 9px;
  margin-right: 10px;
}
.nav-bar .login_profile .router-link-active {
  background-color: unset !important;
}

.nav-bar .v-navigation-drawer__content {
  width: 100%;
}

.nav-bar .v-text-field .v-input__details {
  display: none !important;
}

.nav-bar .v-field--variant-solo {
  background: unset;
  border: 0;
  color: #fff;
  box-shadow: 0;
}

.nav-bar .login_profile {
  display: inline-flex;
  position: relative;
  top: 15px;
  left:46px;
}

.nav-bar .login_profile h6 {
  margin: 0
}

.nav-bar .login_profile .name_amount {
  padding-left: 10px;
}

.name_amount h6 {
  margin: 0 !important;
}

.lang_selec_icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.lang_profile_items .v-input__control {
  max-width: 790px;
  width:200px;
}

 .v-select .v-field.v-field {
  min-height: 63px !important;
 }
</style>
  