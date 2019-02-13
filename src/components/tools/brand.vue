<template>
    <div class="brand-content">
        <div class="brand-img"><img src="../../img/classNav/banner2.jpg" alt=""></div>
        <div class="brand-list">
            <ul class="brand-group">
                <li class="brand-item">
                    <div>
                        <img src="../../img/classNav/index_new_0101.jpg" alt="">
                    </div>
                    <p>
                        <span>￥62</span>
                        <del>￥79</del>
                    </p>
                </li>
                <li class="brand-item">
                    <div>
                        <img src="../../img/classNav/index_new_0101.jpg" alt="">
                    </div>
                    <p>
                        <span>￥62</span>
                        <del>￥79</del>
                    </p>
                </li>
                <li class="brand-item">
                    <div>
                        <img src="../../img/classNav/index_new_0101.jpg" alt="">
                    </div>
                    <p>
                        <span>￥62</span>
                        <del>￥79</del>
                    </p>
                </li>
                <li class="brand-item">
                    <div>
                        <img src="../../img/classNav/index_new_0101.jpg" alt="">
                    </div>
                    <p>
                        <span>￥62</span>
                        <del>￥79</del>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .brand-item>p>del{
    font-size:13px;
}
.brand-item>p>span{
    margin-right:5px;
    color:#333;
}
.brand-item>p{
    width:100%;
    height:15%;
    margin-bottom: 0px;
    text-align: center;
}
.brand-item>div>img{
    width:100%;
    height:100%;
}
.brand-item>div{
    width:100%;
    height:85%;
}
.brand-item{
    width:100px;
    height:100%;
    margin-right:15px;
    display:flex;
    flex-direction: column;
}
.brand-group{
    height:100%;
    width:1500px;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap;
    padding:0;
    margin:0;
}
.brand-list{
    width:100%;
    height:100%;
    overflow: hidden;
}
.brand-content>div>img{
    width:100%;
    height:100%;
}
.brand-content>div{
    width:100%;
    height:50%;
}
.brand-content{
    widows: 100% ;
    height:280px;
    padding:10px 10px 10px 10px;
    display:flex;
    flex-direction: column;
    margin-top:10px;
    background:#fff;
}
</style>

