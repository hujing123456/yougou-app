<template>
    <div class="classify">
        <ul class="classify-left">
            <li :class="{active:chosed==i}" v-for="(item,i) in brandList" :key="i" @click="chosed=i">
                <router-link :to="item.router">{{item.name}}</router-link>
            </li>
        </ul>
        <div class="classify-right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            chosed:0,
            brandList:[
                {router:'/classify/classifyBrand',name:'全部品牌'},
                {router:'/classify/classifyWoman',name:'女鞋'},
                {router:'/classify/classifyMan',name:'男鞋'},
                {router:'/classify/classifySports',name:'运动'},
                {router:'/classify/classifyOutdoor',name:'户外'},
                {router:'/classify/classifyChildren',name:'童鞋童装'}
            ]
        }
    }
}
</script>

<style scoped>
.classify{
    width:100%;
    margin-top:40px;
    margin-bottom:50.4px;
    background:#fff;
}
.classify-left{
    display: inline-block;
    width:25%;
    margin:0px;
    list-style: none;
    padding:0px;
    background:#fff;
   position: fixed;
   top:40px;
   left:0px;
    
}
.classify-left>li{
    width:100%;
    height:50px;
    text-align: center;
    line-height: 50px;
    border:1px solid #ccc;
    border-bottom:none;
    
}
.classify-left>li:last-child{
    border-bottom:1px solid #ccc;
}
.classify-left>li>a{
    color:#333;
    font-size:14px;
}
.classify-right{
    width:75%;
    display: inline-block;
    margin-left:25%;
}
.classify-left>li.active{
    background-color:#eee;
    
}
.classify-left>li.active>a{
    color:#f00;
}
</style>

