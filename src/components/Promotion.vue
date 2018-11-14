<template>
    <div class="promotion">
        <div class="container">
            <div class="promotion-container">
                <ul>
                    <li>
                        <div class="promotion-list">
                            <img src="../assets/img/photo-1510566337590-2fc1f21d0faa.jpg" alt="">
                            <h2>Play</h2>
                        </div>
                    </li>
                    <li>
                        <div class="promotion-list">
                            <img src="../assets/img/photo-1521579971123-1192931a1452.jpg" alt="">
                            <h2>Shoot</h2>
                        </div>
                    </li>
                    <li>
                        <div class="promotion-list">
                            <img src="../assets/img/photo-1505903106897-7acb8914bd67.jpg" alt="">
                            <h2>Team</h2>
                        </div>
                        
                    </li>
                    <li>
                        <div class="promotion-list">
                            <img src="../assets/img/photo-1517927033932-b3d18e61fb3a.jpg" alt="">
                            <h2>Goal</h2>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="promotion-btn"><button>시작하기</button></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .promotion {
        position: relative;
        display: block;
        margin-top: -50px;
        clear:both;
    }
    
    .promotion .container {        
        margin-left: 150px;
        margin-right: 150px;        
        padding: 2rem;        
        background-color: #fff;
        z-index:100;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li {
        position: relative;
        flex: 1;        
        margin-right: 2.5421px;        
    }

    li .promotion-list{
        height: 350px;
        overflow: hidden;
        clear: both;
    }

    li .promotion-list:hover h2,
    li .promotion-list:hover img
    {
        color: #001489;
        transform: scale(1.15);
    }

    li .promotion-list img{
        width: 100%;
        height: 100%;
        transition: all 0.6s;
    }

    li .promotion-list h2{                
        position: absolute;        
        margin: 0;        
        padding-left: 12px;
        padding-bottom: 5px;
        bottom: 0;
        color: #fff;
        font-size: 2em;
        letter-spacing: 1.2px;        
    }

    .promotion-btn {
        margin-top: 20px;
        text-align: center;        
    }    

    .promotion-btn button {
        width: 25vw;        
        padding: 1.2rem;
        border: 1px solid #001489;
        background-color: #fff;
        outline:none;
        cursor: pointer;        
        font-weight: 900;           
        color: #001489;        
        transition: all 0.5s;
    }

    .promotion-btn button:hover {
        background-color: #001489;
        color: #fff;
    }

</style>