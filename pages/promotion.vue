<template>
    <section class="">
        <h1>Promotion</h1>
        {{ token,'pdd' }}
    </section>
</template>

<script>
    //  import TheGames from '~/components/TheGames'


    export default {

        components: {
            // TheGames
         
        },
        
        data() {
            return {
                title: 'Shalpout Promotion',
                token:localStorage.getItem('token')
            }
        },
         head() {
             var lang = localStorage.getItem('locale')
             if(lang == 'en') {
                 var url = 'https://www.bkk2d.com/sitemap/'
             }else {
                 var url = 'https://www.bkk2d.com/sitemap/' 
             }
        return {
            title: this.title,
           meta: [
                {
                    hid: 'Shalpout Promotion',
                    name: 'Shalpout Promotion',
                    content: 'Shalpout Promotion'
                },

            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/images/bkk2d.png', defer: true },
                { rel: 'canonical', href:url }
            ]
        }
      }
    }
</script>

<style  scoped>

 
</style>
