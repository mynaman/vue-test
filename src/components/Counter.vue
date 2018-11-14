<template>
    <div class="counter">
        <div class="container">
            <div class="counter-container">
                <div class="todayDT">2018-11-14 화요일</div>
                <ul>
                    <li>
                        <div class="counter-box">
                            <h4>현재 사용자 수</h4>
                            <p>1500 명</p>
                        </div>
                    </li>
                    <li>
                        <div class="counter-box">
                            <h4>현재 클럽 수</h4>
                            <p>300 팀</p>
                        </div>
                    </li>
                    <li>
                        <div class="counter-box">
                            <h4>오늘의 매치 경기 수</h4>
                            <p>243 경기</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .counter {
        width: 100%;                
        margin-top: 50px;
    }

    .counter .container {
        margin-left: 150px;
        margin-right: 150px;
        border: 10px solid #001489;
    }
    
    .counter-container {
        padding: 20px 0;
    }

    .todayDT {
        text-align: center;
        font-size: 1.3rem;
        font-weight: 400;
    }

    ul {
        margin: 5px 0;
        padding: 0 5px;        
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
    }

    li {
        flex: 1;
        margin: 0 5px;
        border-right: 2px solid #D3D3D3;
    }

    li:last-child {
        border-right: 0;
    }

    .counter-box h4 {
        font-weight: 400;
        letter-spacing: 0.9642px;
    }

    .counter-box p {
        letter-spacing: 0.9642px;
    }



    

    

</style>