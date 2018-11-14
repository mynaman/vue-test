<template>
    <div class="header">        
        <header-bar></header-bar>        
    </div>    
</template>

<script>
    import Header from '../../components/Header.vue' 

    export default {
        components: {
            'header-bar': Header
        }       
    }
</script>

<style scoped>
    .header {
        position: absolute;
        width: 100%;
        z-index: 10;
    }
</style>