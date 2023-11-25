<template>
    <section class="register_page">
        <RegisterForm></RegisterForm>
        <TheFooter></TheFooter>
    </section>
</template>

<script>
    import RegisterForm from '~/components/RegisterForm';
     import TheFooter from '~/components/TheFooter'


    export default {

        components: {
            RegisterForm,
            TheFooter
        },
        data() {
            return {
                title: ''
            }
        },
        
    }
</script>

<style  scoped>
.register_page {
    background-color: rgba(1,32,1,.919);
    position: relative;
}
 
</style>
