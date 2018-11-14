<template>
    <div class="slider">        
        <div class="container">            
            <div class="slider-container">                
                <button v-on:click="handler_slider" class="slider-btn left-btn left">
                    <font-awesome-icon icon="chevron-left"/>
                </button>
                <img class="select" src="../assets/img/athletes-audience-ball-270085.jpg" alt="">
                <img src="../assets/img/pexels-photo-262524.jpeg" alt="">
                <img src="../assets/img/pexels-photo-1171084.jpeg" alt="">
                <img src="../assets/img/the-ball-stadion-football-the-pitch-46798.jpeg" alt="">
                <p>도전 하세요</p>
                <button v-on:click="handler_slider" class="slider-btn right-btn right">
                    <font-awesome-icon icon="chevron-right"/>
                </button>
            </div>            
        </div>
        <promotion></promotion>
        <counter></counter>
    </div>    
</template>

<script>

    import Promotion from './promotion.vue'
    import Counter from './counter.vue'

    const comments = {
        "0": "도전 하세요",
        "1": "자기와 맞는 팀을 찾거나 창설 하세요",
        "2": "그라운드에서 즐기세요",
        "3": "이것이 축구다",
    }
    export default {
        data() {
            return {
                comments : comments
            }
        },
        methods: {
            handler_slider(e) {
                const imgs = document.querySelectorAll('.slider-container img');
                const imgLength = imgs.length;                
                const elBtn = e.target.closest('button');                
                this.move_slider(elBtn, imgs, imgLength)    
            },

            move_slider(e, imgs, imgLength) {                 
                if(e.className.indexOf('left') > 0) {                                         
                    for(let i=0; i<imgLength; i++) {
                        if(imgs[i].className) { 
                            imgs[i].className = '';                            
                            const num = i === 0 ? imgLength-1 : i-1;
                            imgs[num].className = 'select';
                            this.comment_change(num);
                            break;
                        }                       
                    }
                } else {                    
                    for(let i=0; i<imgLength; i++) {
                        if(imgs[i].className) { 
                            imgs[i].className = '';                            
                            const num = i === imgLength-1 ? 0 : i+1;
                            imgs[num].className = 'select';
                            this.comment_change(num);
                            break;
                        }                       
                    }
                }
            },
            comment_change(n) {
                const el = document.querySelector('p');
                el.textContent = this.comments[n];
            }
        },

        components: {
                "promotion" : Promotion,
                "counter": Counter,

        }
        
    }
</script>

<style scoped>
    .container {
        width: 100%;        
        height: 88vh;
    }

    .slider-container {
        position: relative;
        width: 100%;        
        height: 100%;
        overflow: hidden;        
    }
    
    .slider-container p {
        position: absolute;
        width: 100%;
        padding-bottom: 80px;
        display: inline-block;
        color: #FFF;
        font-size: 2.5em;
        font-weight: 700;
        text-align:center;
        bottom: 0;
    }

    .slider-btn {
        position: absolute;
        background-color: rgba(255, 255, 255, 0);        
        border: 0;
        font-size:2.5rem;
        color: #fff;
        z-index: 10;
        opacity: 0.5;
        cursor: pointer;
        outline: none;
    }

    .slider-btn:hover {
        opacity: 1;
    }

    .slider-btn.left-btn{
        top: 50%;
        left: 1%;        
    }

    .slider-btn.right-btn{
        top: 50%;
        right: 1%;        
    }

    img {
        position: absolute;                    
        width: 100%;
        height: 100%;        
        visibility: hidden;  
        opacity: 0;      
        transition: all 1.5s;
    }

    img.select {        
        visibility: visible;        
        opacity: 0.95;
    }

</style>