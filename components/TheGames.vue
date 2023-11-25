
<template>
    <div class="game_section">
        <div>
            <div class="game_title">
            <img class="slote_logo_title" src="https://shalpout.com/static/media/game_.d19480425d92329272cd.gif" alt="">
            <p class="slote_title">{{$t('games') }}</p>
            <div class="slot_line_title"></div>
        </div>
        </div>
  
      <v-card class="">
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">
        <img class="game_bar_icons" src="/images/money_icon.png"/>
         <span style="padding-left:10px;">All</span> 
      </v-tab>
      <v-tab value="two">
         Two
      </v-tab>
      
    </v-tabs>

    <v-card-text >
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-row>
            <v-col
              v-for="game in games"
              :key="game"
              cols="6" lg="3"
              
            > 
            <div v-if="store.isLoggedIn">
              <v-img
                @click="gameItemDatas(game)"
                class="game_img"
                :src="game.img_url"
              ></v-img>
              <div style="text-align: center;">
                <h6 style="color:#fff;">{{game.gameName }}</h6>
              </div>
            </div>
            <div v-else>
             
              <v-img
                @click="gameItemDatas(game)"
                class="game_img"
                :src="game.img_url"
              ></v-img>
              <div style="text-align: center;">
                <h6 style="color:#fff;">{{game.gameName }}</h6>
              </div>
            </div>
             
             
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item value="two">
          Two
        </v-window-item>


      </v-window>
    </v-card-text>
  </v-card>
        <!-- <el-tabs>
            <el-tab-pane label="All">
                <el-row>
                  <el-col :span="6" class="game_card" v-for="game in games" :key="game">
                      <img :src="game.image" alt="">
                      <h5>{{game.name }}</h5>
                  </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="Games">game</el-tab-pane>
           
            </el-tabs> -->
        </div>
  </template>
  
  <script>
import Profile from '~/pages/profile.vue';
import { useStore } from '~/store/state';
  export default {
    data() {
      return {
    
        tab: null,
        store:useStore(),
        games:[]
          // "games": [
          //     {
          //       "name": "Molecule Man",
          //       "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
          //       "url": "Dan Jukes",
          //     },
          //     {
          //       "name": "Molecule Man",
          //       "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
          //       "url": "Dan Jukes",
          //     },
          //     {
          //       "name": "Molecule Man",
          //       "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
          //       "url": "Dan Jukes",
          //     },
          //     {
          //       "name": "Molecule Man",
          //       "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
          //       "url": "Dan Jukes",
          //     },
          //     {
          //       "name": "Molecule Man",
          //       "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
          //       "url": "Dan Jukes",
          //     },
          //     {
          //       "name": "Molecule Man",
          //       "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
          //       "url": "Dan Jukes",
          //     },
          //     {
          //       "name": "Molecule Man",
          //       "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
          //       "url": "Dan Jukes",
          //     },
          //     {
          //       "name": "Molecule Man",
          //       "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
          //       "url": "Dan Jukes",
          //     },
          //     {
          //       "name": "Molecule Man",
          //       "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
          //       "url": "Dan Jukes",
          //     },
          //     {
          //       "name": "Molecule Man",
          //       "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
          //       "url": "Dan Jukes",
          //     },
          // ]
      }
    },
    mounted() {
          this.updateIsLoggedIn();
           this.updateLang();
      let token = localStorage.getItem("token");
            console.log(token,'token')
            if(token) {
                $fetch('/game_lists', {
                 headers: {
                    Authorization: "Bearer " + token,
                },
                    method:'post',
                    baseURL:'https://backend.shalpouts.com/api'
                })
                .then((response) => {
                    this.games = response.data
                   
                    console.log(this.games,'lll')
                    
                })
            }else {
              this.games = [
              {
                "gameName": "Pragmatic Play",
                "img_url":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64b283a6dd0fa.jpg",
                "url": "Dan Jukes",
              },
              ]
              console.log(this.games)
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
      gameItemDatas(data) {
        console.log(data,'one game data')
        let token = localStorage.getItem("token");
        let language = localStorage.getItem("locale")
        if(language) {
          this.lang = language
        }else {
          this.lang = "en"
        }
        let currentUrl = location.href
        let profile = JSON.parse(localStorage.getItem('profile'))
        
        console.log(profile.balance,'proriiii')
        console.log(token,'token')
            if(token) {
                $fetch('/game_url', {
                 headers: {
                    Authorization: "Bearer " + token,
                },
                params: {
                  lobbyUrl:currentUrl,
                  language:language,
                  platform:"web",
                  symbol:data.gameID,
                  currency:profile.balance
               },
                    method:'post',
                    baseURL:'https://backend.shalpouts.com/api'
                })
                .then((response) => {
                    let link  = JSON.parse(response);
                  console.log(link.gameURL)
                
                 
                   window.location.href = link.gameURL;
                    console.log(response,'lll')
                    
                })
            }
      }

    },
  };
  </script>
  
  <style>
  .game_title {
    display:flex;
    padding-top:50px;
  }
  .game_section {
    padding:0 100px;
    position: relative;
  }

    .slote_logo_title {
        position: relative;
        width:10%;
        height:auto;
        bottom:16px;
    }
    .game_section .slote_title {
        position: relative;
        right:0;
        top:10px;
        color:#fff;
    }
    .game_section .slot_line_title {
        background: red;
        width: 85%;
        height: 2px;
        position: relative;
        top:23px;
        left:15px;
    }
    .game_section .game_bar_icons {
      width:40px;
    }
    .game_bar_icons .v-btn--size-default {
      padding: 0 40px;
    }
    .game_section .v-btn.v-btn--density-default {
      height: 64px;
    }
    .game_section .v-slide-group__content {
      padding:10px;
    }
  
    .game_section .v-tab--selected  {
      background: #ddf500 !important;
      color:#0a5706;
      font-weight: bold;
      border-top-right-radius: 9px;
      border-top-left-radius: 9px;
    }
    .game_section .v-tabs--density-default {
      background-color: #0a57064e !important;
      border-bottom: 2px solid yellow;
      border-radius: 5px;
     
    }
    .game_section .v-card--variant-elevated, .v-card--variant-flat {
      background: unset !important;
    }
    .v-tabs--density-default {
      height: 65px !important;
    }

    .game_card {
      display: inline-block;
      padding:10px;
      text-align: center;

    }
    .game_section .v-img__img--contain  {
      max-width: 480px;
      width:100%;
      border-radius: 13px;
      cursor: pointer;
    }
    .game_section .v-img__img--contain:hover {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
      transition: .5s;
     
      
    }
    .game_card h5 {
      color:#fff;
      padding:5px;
      cursor: pointer;
    }
  
   
  

    
  </style>
  