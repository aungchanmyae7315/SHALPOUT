<template>
    <section class="">
        <TheGames></TheGames>
        <TheFooter></TheFooter>
    </section>
</template>

<script>
    import TheGames from '~/components/TheGames';
     import TheFooter from '~/components/TheFooter'


    export default {

        components: {
            TheGames,
            TheFooter
        },
        data() {
            return {
                title: 'แผนผังเว็บไซต์ | เว็บไซต์คาสิโนออนไลน์ BKK2D'
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
                    hid: 'แผนผังเว็บไซต์ | เว็บไซต์คาสิโนออนไลน์ BKK2D',
                    name: 'แผนผังเว็บไซต์ | เว็บไซต์คาสิโนออนไลน์ BKK2D',
                    content: 'ค้นหาลิงก์และรับหน้าเว็บไซต์ทั้งหมดโดยตรงจากแผนผังเว็บไซต์'
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
