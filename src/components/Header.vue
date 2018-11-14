<template>
    <div class="header_bar">
        <ul>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link to='/main'>Main</router-link></li>
            <li><router-link to='/info'>Info</router-link></li>
            <li><router-link to="login">Login</router-link></li>
        </ul>        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    .header_bar {        
        /* margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        padding-left: 5.875rem;
        padding-right: 5.875rem; */
    }

    ul {
      margin: 0;      
      padding: 0;      
      list-style-type: none;
      /* display: flex; */
    }

    li {
        margin-top: 15px;                
    }

    a {        
        text-decoration: none;
        color: white;
        font-weight: 600
    }

    a:hover {        
        padding-bottom: 4px;
        border-bottom: 4px solid blue;
        color: #000;
        font-weight: 800;
        opacity: 0.5;        
    }

    .router-link-exact-active {
        color: white;        
        text-decoration: none;
    }

@media (min-width: 768px) {
    .header_bar {        
        margin-left: auto;
        margin-right: auto;
        display: flex;
        /* justify-content:center;
        align-items: center; */
        flex-direction: row;
        padding-top: 10px;
        padding-left: 5.875rem;
        padding-right: 5.875rem;
    }

    ul {
      margin: 0;      
      padding: 0;
      width: 100%;
      list-style-type: none;
      display: flex;
    }

    li {
        margin-right: 15px;                
    }

    /* ul li {
        flex: 1;
    } */

    ul li:last-child {
        flex: 3;
        text-align: end;        
    }
}

</style>