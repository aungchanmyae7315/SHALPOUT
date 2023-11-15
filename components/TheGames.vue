
<template>
    <div class="game_section">
        <div>
            <div class="game_title">
            <img class="slote_logo_title" src="https://shalpout.com/static/media/game_.d19480425d92329272cd.gif" alt="">
            <p class="slote_title">Games</p>
            <div class="slot_line_title"></div>
        </div>
        </div>
        <el-tabs>
            <el-tab-pane label="All">
                <el-row>
                  <el-col :span="6" class="game_card" v-for="game in games" :key="game">
                      <img :src="game.image" alt="">
                      <h5>{{game.name }}</h5>
                  </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="Games">game</el-tab-pane>
           
            </el-tabs>
        </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
    
          
          "games": [
              {
                "name": "Molecule Man",
                "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
                "url": "Dan Jukes",
              },
              {
                "name": "Molecule Man",
                "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
                "url": "Dan Jukes",
              },
              {
                "name": "Molecule Man",
                "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
                "url": "Dan Jukes",
              },
              {
                "name": "Molecule Man",
                "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
                "url": "Dan Jukes",
              },
              {
                "name": "Molecule Man",
                "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
                "url": "Dan Jukes",
              },
              {
                "name": "Molecule Man",
                "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
                "url": "Dan Jukes",
              },
              {
                "name": "Molecule Man",
                "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
                "url": "Dan Jukes",
              },
              {
                "name": "Molecule Man",
                "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
                "url": "Dan Jukes",
              },
              {
                "name": "Molecule Man",
                "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
                "url": "Dan Jukes",
              },
              {
                "name": "Molecule Man",
                "image":"https://docs-chail.sgp1.digitaloceanspaces.com/provider-upload/wb/sportbook/64c73c7d741d8.jpg",
                "url": "Dan Jukes",
              },
          ]
      }
    },
    mounted() {

    
    },
    methods: {
        
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
    .game_section .el-tabs__nav-wrap {
      background-color: #0a57064e !important;
    }
    .game_section .el-tabs__item {
      color:#fff;
      max-width: 480px;
      width:100%;
      height: 65px;
      padding:15px;
      text-align: center;
    }
    .game_section .el-tabs__item.is-active  {
      background-color: #ddf500;
      color:#0a5706;
      font-weight: bold;
      border-top-right-radius: 9px;
      border-top-left-radius: 9px;
    }
    .game_section .el-tabs__active-bar  , .game_section .el-tabs__nav-wrap::after{
      background-color: #ddf500;
    }

    .game_card {
      display: inline-block;
      padding:10px;
      text-align: center;

    }
    .game_card img {
      max-width: 480px;
      width:100%;
      border-radius: 13px;
      cursor: pointer;
    }
    .game_card img:hover {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
      transition: .5s;
     
      
    }
    .game_card h5 {
      color:#fff;
      padding:5px;
      cursor: pointer;
    }
  
    @media screen and (max-width:480px) {
    .game_section {
      padding:15px;

    }
    .game_section .slote_title {
      top:-5px;
    }
    .game_section .slot_line_title {
      width:72%;
      top:8px;
    }
    .login_form {
      width:90%;
    }
  }

    
  </style>
  