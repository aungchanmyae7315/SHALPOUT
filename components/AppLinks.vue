<template>
   <el-row>

        
    
  
</el-row>
</template>
<script >
 import { useStore } from '~/store/state';
  
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
            store : useStore(),
           

           
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
           
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/images/bkk2d.png', defer: true },
                { rel: 'canonical', href: url, },

            ]
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