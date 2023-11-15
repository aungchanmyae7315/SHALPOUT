<template>
    <section class="">
        <h1>Deposite</h1>
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
                title: 'Shalpout deposite'
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
                    hid: 'Shalpout deposite',
                    name: 'Shalpout deposite',
                    content: 'Shalpout deposite'
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
