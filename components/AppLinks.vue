<template>
   <el-row>

        <ul class="nav-list">
   
        <li class="nav-item home_nav">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
 
        <li class="nav-item">  <nuxt-link to="/">Home</nuxt-link></li>
        <li v-if="!this.$store.state.isLoggedIn" class="nav-item">  <nuxt-link to="/register/">Register</nuxt-link></li>
        <li v-if="this.$store.state.isLoggedIn" class="nav-item">  <nuxt-link to="/promotion/">Promotion</nuxt-link></li>
        <li class="nav-item">  <nuxt-link to="/games/">Games</nuxt-link></li>
        <li v-if="this.$store.state.isLoggedIn" class="nav-item">  <nuxt-link to="/topup/">Deposite</nuxt-link></li>
        <li v-if="this.$store.state.isLoggedIn" class="nav-item">  <nuxt-link to="/withdraw/">Withdraw</nuxt-link></li>
        <li class="nav-item">  <nuxt-link to="/Contact/">Contact</nuxt-link></li>
     
   
        </ul>
    
  
</el-row>
</template>
<script >
    export default {


    components: {
        
    },
    asyncData() {
        function someMiddleware({ redirect }) {
            redirect('/');
        }

    },
    mounted() {
        this.updateIsLoggedIn();
        this.updateLang();
  

    },
    data() {
        return {
            title: this.$t('home_title'),

           
        }
    },
    head() {
        var lang = localStorage.getItem('locale')
        if (lang == 'en') {
            var url = 'https://www.bkk2d.com'
        } else {
            var url = 'https://www.bkk2d.com'
        }
        return {
            title: this.title,
            meta: [
                {
                    hid: this.$t('home_title'),
                    name: this.$t('home_title'),
                    content: this.$t('home_description'),
                },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/images/bkk2d.png', defer: true },
                { rel: 'canonical', href: url, },

            ]
        }
    },
    methods: {
        updateIsLoggedIn() {
        this.$store.commit("updateIsLoggedIn", this.hasUserInfo());
        },
        hasUserInfo() {
        return Boolean(localStorage.getItem("userInfo"));
        },
        updateLang() {
            this.$store.commit("updateLang", this.hasLang());
        },
        hasLang() {
            return Boolean(localStorage.getItem("locale"));
        },

    }
  }
</script>


<style scoped>
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 3px 15px;
  
}

.nav-item a {
  text-decoration: none;
  color: #fefefe;
  font-size: 17px;
}


.nav-item a:active {
  color: #fcd354;
  transition: 0.5s ease;
  background-color: rgba(5,178,34,.5)!important;
  padding:20px;
}

@media (min-width: 769px) {
  .nav-list {
    display: block;
  }
  .nav-item {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .home_nav {
    display: none !important;
  }
}

@media (min-width: 769px) {
  .nav-list {
    display: flex;
  }
  .home_nav {
    display: none !important;
  }
}
</style>