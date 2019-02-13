<template>
    <div class="myCenter">
        <div class="myCenter-login">
            <div>
                <i class="iconfont icon-shezhi"></i>
                <i class="iconfont icon-xinxi"></i>
            </div>
            <button>登录/注册</button>
        </div>
        <div class="myCenter-main">
            <p>我的订单</p>
            <ul class="order">
                <li>
                    <i class="iconfont icon-daifukuan1"></i>
                    <p>待付款</p>
                </li>
                <li>
                    <i class="iconfont icon-wuliu"></i>
                    <p>查看物流</p>
                </li>
                <li>
                    <i class="iconfont icon-pingjia"></i>
                    <p>待评价</p>
                </li>
            </ul>
            <p>我的定制</p>
            <div class="money">
                <p>我的钱包</p>
                <ul>
                    <li>
                        <p>0</p>
                        <p>礼品卡</p>
                    </li>
                     <li>
                        <p>0</p>
                        <p>优惠券</p>
                    </li>
                     <li>
                        <p>0</p>
                        <p>积分</p>
                    </li>
                    <li>
                        <i class="iconfont icon-icon-test"></i>
                        <p>红利兑换</p>
                    </li>
                </ul>
            </div>
            <ul class="collect">
                <li>
                    <i class="iconfont icon-shoucang" style="color:#ea0909"></i>
                    <p>收藏/关注</p>
                </li>
                 <li>
                    <i class="iconfont icon-liulanjilu" style="color:#d692ca"></i>
                    <p>浏览记录</p>
                </li>
                <li>
                    <i class="iconfont icon-bangzhu" style="color:#73f987"></i>
                    <p>帮助中心</p>
                </li>
                <li>
                    <i class="iconfont icon-yijian" style="color:#799aec"></i>
                    <p>意见反馈</p>
                </li>
            </ul>
            <ul class="vip">
                <li>
                    <i class="iconfont icon-huiyuan4" style="color:#799aec"></i>
                    <p>会员中心</p>
                </li>
                 <li>
                    <i class="iconfont icon-jifen" style="color:#ea0909"></i>
                    <p>积分商城</p>
                </li>
                <li>
                    <i class="iconfont icon-qiandao" style="color:#d692ca"></i>
                    <p>每日签到</p>
                </li>
                <li>
                    <i class="iconfont icon-kefu2" style="color:#73f987"></i>
                    <p>联系客服</p>
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
ul.vip>li>i,ul.collect>li>i{
    display:block;
    margin:15px 0px;
    font-size:30px;
}
.myCenter-main>ul.vip{
    margin-bottom:100px;
}
.myCenter-main>ul.collect,.myCenter-main>ul.vip{
    margin-top:10px;
}
.order>li,.money>ul>li,ul.vip>li,ul.collect>li{
    width:60px;
    text-align: center;
}
.money>ul>li>i{
    font-size:20px;
    display: block;
    margin-bottom:10px;
}
.order>li>i{
    display: block;
    font-size:30px;
    margin:15px 0px;
}
.myCenter-main>ul.order{
    border-top:1px solid #eee;
    margin-bottom:10px;
}
.myCenter-main>ul{
    list-style: none;
    margin:0px;
    padding:10px 20px;
    display: flex;
    flex-direction: row;
    justify-content:space-between ;
    height:100px;
    background:#fff;
}
.myCenter-main>p::after{
    content:'';
    display:inline-block;
    margin-left:258px;
    width:12px;
    height:12px;
    border-top:1px solid #ccc;
    border-right:1px solid #ccc;
    transform: rotate(45deg);
    
}
.money>ul{
    list-style: none;
    margin:0px;
    padding:10px 20px;
    display: flex;
    flex-direction: row;
    justify-content:space-between ;
    height:70px;
    background:#fff;
}
.money{
    margin:10px 0px;
}
.money>p{
    border-bottom:1px solid #eee;
}
.myCenter-main>p,.money>p{
    width:100%;
    height:50px;
    padding-left:20px;
    line-height: 50px;
    font-size:14px;
    color:#333;
    margin:0px;
    background:#fff;
}
.myCenter-login>button{
    display: block;
    width:40%;
    height:45px;
    text-align: center;
    background-color:rgba(0,0,0,0.2);
    font-size:14px;
    color:#fff;
    border:none;
    border-radius: 5px;
    margin:0 auto;
    margin-top:20px;
}
.myCenter-login>div{
    width:100%;
    height:30px;
    text-align: right;
    padding-top:10px;
    padding-right:20px;
}
.myCenter-login>div>i{
    font-size:25px;
    color:#fff;
    margin-left:25px;
    cursor: pointer;
}
.myCenter{
    width:100%;
    height:100%;
    margin-top:40px;
    margin-bottom: 50.4px;
}
.myCenter-login{
    width:100%;
    height:150px;
    background:#ea0909;
}
</style>

