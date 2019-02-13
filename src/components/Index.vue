<template>
    <div class="home-index">
        <!-- 首页轮播图 -->
        <mt-swipe :auto='3000'>
            <mt-swipe-item v-for="item of list" :key="item.bid">
                <img :src="item.src">
            </mt-swipe-item>
        </mt-swipe>
          <!-- 二楼导航 -->
        <div class="app-nav">
            <a href="#">
                <i class="iconfont icon-tubiaolunkuohua-"></i>
                <p>签到</p>
            </a>
            <a href="#">
                <i class="iconfont icon-youhuiquan2"></i>
                <p>立即领券</p>
            </a>
            <a href="#">
                <i class="iconfont icon-hp-6vip-on"></i>
                <p>PLUS会员</p>
            </a>
            <a href="#">
                <i class="iconfont icon-wode"></i>
                <p>定制</p>
            </a>
        </div>
         <!-- 三楼分类 -->
         <div class="classify">
             <h4>热门分类</h4>
             <ul class="class-nav">
                <li>
                    <a href="">
                        <span>小白鞋</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>满帮鞋</span>
                    </a>
                </li>
                <li>
                     <a href="">
                       <span>夹克</span>
                     </a>
                </li>
                <li>
                     <a href="">
                        <span>长裤</span>
                     </a>
                </li>  
                <li>
                     <a href="">
                       <span>跑步鞋</span>
                     </a>
                </li> 
                <li>  
                     <a href="">
                       <span>休闲鞋</span>
                     </a>
                </li>  
                <li>   
                     <a href="">
                       <span>板鞋/复刻鞋</span>
                     </a>
                </li> 
                <li> 
                     <a href="">
                       <span>冬靴</span>
                     </a>
                </li> 
             </ul>
             <ul class="class-logo">
                 <li><a href=""><img src="../img/classNav/tata_logo.png" alt=""></a></li>
                 <li><a href=""><img src="../img/classNav/staccato_logo.png" alt=""></a></li>
                 <li><a href=""><img src="../img/classNav/millies_logo.png" alt=""></a></li>
                 <li><a href=""><img src="../img/classNav/joypeace_logo.png" alt=""></a></li>
                 <li><a href=""><img src="../img/classNav/teenmix_logo.png" alt=""></a></li>
                 <li><a href=""><img src="../img/classNav/blackS-adidas.png" alt=""></a></li>
                 <li><a href=""><img src="../img/classNav/blackS-nike.png" alt=""></a></li>
                 <li><a href=""><img src="../img/classNav/puma_logo.png" alt=""></a></li>
                 <li><a href=""><img src="../img/classNav/thenorthface_logo.png" alt=""></a></li>
                 <li><a href=""><img src="../img/classNav/skechers.png" alt=""></a></li>
             </ul>
         </div>
         <!-- 四楼限时秒杀 -->
         <div class="sale">
             <h4>限时秒杀</h4>
             <div class="sale-content">
                <div class="sale-left">
                    <div>
                        <div>
                            <i class="iconfont icon-xianshi"></i>
                        </div>
                        <div>
                            <div>
                                <span>大牌限量秒</span>
                                <a href="javascript:;">41</a> :
                                <a href="javascript:;">51</a> :
                                <a href="javascript:;">27</a>
                            </div>
                            <p>每周二/五 10:00上新</p>
                        </div>
                    </div>
                </div>
                <div class="sale-right">
                    <ul>
                        <li class="ul-top">
                            <div>
                                <span>爆款限时秒杀：</span>
                                <a href="javascript:;">01</a> :
                                <a href="javascript:;">46</a> :
                                <a href="javascript:;">37</a>
                            </div>
                            <div>
                                <div class="top-left">
                                    <h5>鞋靴特卖</h5>
                                    <p>爆款秒杀</p>
                                    <h6>GO></h6>
                                </div>
                                <div class="top-right">
                                    <img src="../img/classNav/index_new_0101.jpg" alt="">
                                </div>
                            </div>
                        </li>
                        <li class="ul-bottom">
                            <div class="bottom-left">
                                <h5>运动休闲</h5>
                                <p>好货限量</p>
                                <h6>GO></h6>
                            </div>
                            <div class="bottom-right">
                                <img src="../img/classNav/index_new_0111.jpg" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
             </div>
         </div>
         <!-- 五楼精选活动 -->
         <div class="activity">
             <h4>精选活动</h4>
             <div class="act-content">
                <ul class="content-group">
                    <div class="content-item">
                        <div>
                            <button>抢130元券 ></button>
                        </div>
                    </div>
                    <div class="content-item">
                        <div>
                            <button>2折起 ></button>
                        </div>
                    </div>
                    <div class="content-item">
                        <div>
                            <button>抢130元券 ></button>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
        <!-- 六楼品牌专区 -->
        <div class="brand">
            <h4>品牌专区</h4>
            <div class="brand-content">
                <div class="brand-img"><img src="../img/classNav/banner2.jpg" alt=""></div>
                <div class="brand-list">
                    <ul class="brand-group">
                        <li class="brand-item">
                            <div>
                                <img src="../img/classNav/index_new_0101.jpg" alt="">
                            </div>
                            <p>
                                <span>￥62</span>
                                <del>￥79</del>
                            </p>
                        </li>
                        <li class="brand-item">
                            <div>
                                <img src="../img/classNav/index_new_0101.jpg" alt="">
                            </div>
                            <p>
                                <span>￥62</span>
                                <del>￥79</del>
                            </p>
                        </li>
                        <li class="brand-item">
                            <div>
                                <img src="../img/classNav/index_new_0101.jpg" alt="">
                            </div>
                            <p>
                                <span>￥62</span>
                                <del>￥79</del>
                            </p>
                        </li>
                        <li class="brand-item">
                            <div>
                                <img src="../img/classNav/index_new_0101.jpg" alt="">
                            </div>
                            <p>
                                <span>￥62</span>
                                <del>￥79</del>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Brand></Brand>
        <Brand></Brand>
        <Brand></Brand>
    </div>
</template>
<script>
import Brand from '@/components/tools/brand.vue'
export default {
    components:{
        Brand
    },
    created(){
        this.getBanner();
    },
    methods:{
        getBanner(){
            this.$http.get('index/banner').then((result)=>{
                this.list=result.body;
            })
        }
    },
    data(){
        return {
            list:[]
        }
    }
}
</script>
<style scoped>
.home-index{
    margin-top:40px;
    margin-bottom:50.4px;
}
/* 六楼品牌专区 */
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
}


.brand>h4{
    width:100%;
    height:30px;
}
.brand{
    width:100%;
    height:310px;
    margin-top:10px;
    background:#fff;
    display:flex;
    flex-direction: column;
}
/* 五楼精选活动 */
.content-item>div>button{
    position: absolute;
    bottom:0px;
    left:50%;
    transform: translate(-60px,0);
    width:120px;
    height:25px;
    padding:0px;
    text-align: center;
    line-height: 25px;
    background:#b90909;
    color:#eee;
    font-size:12px;
    border:0;
    border-radius: 15px;
}
.content-group>div:nth-child(3)>div{
    width:100%;
    height:100%;
    background:url(../img/classNav/fukexie.jpg) no-repeat;
    background-size:100% 94%;
}
.content-group>div:nth-child(2)>div{
    width:100%;
    height:100%;
    background:url(../img/classNav/changku.jpg) no-repeat;
    background-size:100% 94%;
}
.content-group>div:nth-child(1)>div{
    width:100%;
    height:100%;
    background:url(../img/classNav/xiaobaixie.jpg) no-repeat;
    background-size:100% 94%;
}
.content-group>div{
    width:150px;
    height:100%;
    margin-right:15px;
    position: relative;
}
.content-group{
    display:flex;
    flex-direction: row;
    flex-wrap:nowrap;
    height:100%;
    width:1500px;
    padding:0px;
    margin:0px;
}
.activity>h4,.brand>h4{
    padding:10px 10px 0px 10px;
    width:100%;
    height:10%;
    margin-top:0px;
}
.activity>div{
    width:100%;
    height:90%;
    padding:10px 10px 20px 10px;
    background:#fff;
    overflow: hidden;
}
.activity{
    width:100%;
    height:250px;
    margin-top:35px;
    background:#fff;
    display:flex;
    flex-direction: column;
}
/* 四楼限时秒杀 */
.bottom-left>h5{
    background:linear-gradient(to right,red,yellow);
    -webkit-background-clip:text;
    color:transparent;
}
.ul-bottom>div{
    width:50%;
    height:100%;
}
.ul-bottom{
    display: flex;
    flex-direction: row;
    width:100%;
    height:100%;
    padding-top:10px;
}
.top-right{
    padding-top:5px;
}
.top-right>img,.bottom-right>img{
    width:100%;
    height:100%;
}
.top-left>h6{
    margin-top:0px;
}
.top-left>p,.top-left>h6,.bottom-left>p,.bottom-left>h6{
    font-size:12px;
    margin-bottom: 0px;
}
.top-left>h5{
    background: linear-gradient(to right,blue,purple);
    -webkit-background-clip:text;
    color:transparent;
    margin-top:10px;
}
.ul-top>div:first-child>span{
    font-size:12px;
    font-weight: 600;
}
.ul-top>div:last-child>div{
    width:50%;
    height:100%;
}
.ul-top>div:last-child{
    width:100%;
    height:80%;
    display: flex;
    flex-direction: row;
}
.ul-top>div:first-child{
    width:100%;
    height:20%;
}
.ul-top{
    display: flex;
    flex-direction: column;
    height:100%;
    border-bottom:1px solid #ccc;
}
.sale-right>ul{
    list-style: none;
    margin:0px;
    padding:0px 0px 0px 10px;
    display: flex;
    flex-direction: column;
    height:100%;
    background:#fff;
}
.sale-right>ul>li{
    height:50%;
}
.sale-left>div>div:first-child{
    text-align: center;
    line-height: 38px;
    color:#fff;
}
.sale-left>div>div:first-child i{
 font-size:25px;
}
.sale-left>div>div:nth-child(2)>p{
    margin-bottom: 0px;
} 
.sale-left>div>div:nth-child(2) span{
    margin-right:10px;
}
.sale-left>div>div:nth-child(2)>div,.sale-left>div>div:nth-child(2)>p{
    font-size:12px;
    color:#fff;
}
.sale-left>div>div:nth-child(2) a,.ul-top>div:first-child>a{
    display:inline-block;
    background:#333;
    width:16px;
    height:16px;
    font-size:11px;
    color:#eee;
    text-align: center;
    line-height: 18px;
}
.sale-left>div>div:nth-child(1){
    width:20%;
    height:100%;
}
.sale-left>div>div:nth-child(2){
    width:80%;
    height:100%;
    display:flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
.sale-left>div{
    width:100%;
    height:25%;
    background:#f00;
    position: absolute;
    bottom:0;
    display:flex;
    flex-direction: row;
    padding:2px 0px;
}
.sale-left{
    background:url(../img/classNav/sale.png) no-repeat;
    background-size:100% 100%;
    position: relative;
}
.sale-content>div{
    width:50%;
    height:100%;
}
.sale-content{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding-top:10px;
}
.sale-content{
    padding:10px 10px 10px 10px;
     background:#fff;
     margin-bottom: 0px;
}
.sale>h4{
    padding:10px 10px 0px 10px;
     background:#fff;
     margin-bottom: 0px;
}
    .sale{
        height:200px;
        margin-top:8px;
    }
  .mint-swipe{
      height:200px;
      background:#fff;
  }
  .mint-swipe-items-wrap img{
      width:100%;
      height:100%;
  }
  .app-nav{
      display:flex;
      flex-direction: row;
      justify-content: space-around;
      height:80px;
      align-items: center;
      border-bottom: 1px solid #aaa;
      padding-top:10px;
      background:#fff;
  }
  .app-nav>a{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  .app-nav>a:nth-child(3)>i,.app-nav>a:nth-child(3)>p{
      color:#ffc107;
  }
  .app-nav>a>i{
      font-size:34px;
      color:#666;
  }
  .app-nav>a>p{
     margin-top:8px;
     color:#666;
  }
  /* 三楼分类 */
  .classify{
      height:350px;
      display: flex;
      flex-direction: column;
      justify-content: center;
       padding:10px;
       background:#fff;
  }
  .class-nav{
      height:70%;
  }
  .class-logo{
      height:30%;
  }
  .classify>ul{
      list-style: none;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width:100%;
      justify-content: space-around;
      align-content: center;
      padding:0px;
  }
  .class-nav>li{
      width:22%;
      height:48%;
  }
  .class-nav>li:nth-child(4)~li{
      margin-top:10px;
  }
  .class-nav>li>a{
      width:100%;
      height:100%;
      display: block;
       border-radius: 10%;
  }
  .class-nav>li>a>span{
      background-color:rgba(0,0,0,0.4);
      display: inline-block;
      width:100%;
      height:100%;
      color:#eee;
     text-align: center;
     line-height:78px;
     font-size:12px;
      border-radius: 10%;
  }
  .class-nav>li:nth-child(1)>a{
      background:url(../img/classNav/xiaobaixie.jpg) no-repeat;
      background-size:100% 100%;
  }
  .class-nav>li:nth-child(2)>a{
      background:url(../img/classNav/manbangxie.jpg) no-repeat;
      background-size:100% 100%;
  }
  .class-nav>li:nth-child(3)>a{
      background:url(../img/classNav/jiake.jpg) no-repeat;
      background-size:100% 100%;
  }
  .class-nav>li:nth-child(4)>a{
      background:url(../img/classNav/changku.jpg) no-repeat;
      background-size:100% 100%;
  }
  .class-nav>li:nth-child(5)>a{
      background:url(../img/classNav/paobuxie.jpg) no-repeat;
      background-size:100% 100%;
  }
  .class-nav>li:nth-child(6)>a{
      background:url(../img/classNav/xiuxianxie.jpg) no-repeat;
      background-size:100% 100%;
  }
  .class-nav>li:nth-child(7)>a{
      background:url(../img/classNav/fukexie.jpg) no-repeat;
      background-size:100% 100%;
  }
  .class-nav>li:nth-child(8)>a{
      background:url(../img/classNav/dongxue.jpg) no-repeat;
      background-size:100% 100%;
  }
  .class-logo>li{
      width:20%;
      height:40%;
  }
  .class-logo>li img{
      width:80%;
      height:80%;
  }
  .class-logo>li:nth-child(5)~li{
      margin-top:20px;
  }
</style>

