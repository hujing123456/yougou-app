<template>
    <div class="classifyBrand">
        <p>女士靴子</p>
        <ul>
            <li v-for="(item,i) in list1" :key="i">
                <img :src="item.imgUrl">
                <p>{{item.brandName}}</p>
            </li>
        </ul>
        <p>女士单鞋</p>
        <ul>
            <li v-for="(item,i) in list2" :key="i">
                <img :src="item.imgUrl">
                <p>{{item.brandName}}</p>
            </li>
        </ul>
        <p>女士凉鞋</p>
        <ul>
            <li v-for="(item,i) in list3" :key="i">
                <img :src="item.imgUrl">
                <p>{{item.brandName}}</p>
            </li>
        </ul>
        <p>热门品牌</p>
        <ul>
            <li v-for="(item,i) in list4" :key="i">
                <img :src="item.imgUrl">
                <p>{{item.brandName}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list1:[
                {brandId:1,imgUrl:require('../img/woman/1.jpg'),brandName:'短靴'},
                {brandId:1,imgUrl:require('../img/woman/2.jpg'),brandName:'雪地靴'},
                {brandId:1,imgUrl:require('../img/woman/3.jpg'),brandName:'绒里靴'},
                {brandId:1,imgUrl:require('../img/woman/4.jpg'),brandName:'中靴'},
                {brandId:1,imgUrl:require('../img/woman/5.jpg'),brandName:'长靴'},
                {brandId:1,imgUrl:require('../img/woman/6.jpg'),brandName:'超长靴'},
                {brandId:1,imgUrl:require('../img/woman/7.jpg'),brandName:'马丁靴'},
                {brandId:1,imgUrl:require('../img/woman/7.jpg'),brandName:'马丁靴'},
                {brandId:1,imgUrl:require('../img/woman/8.jpg'),brandName:'骑士靴'}
            ],
            list2:[
                {brandId:2,imgUrl:require('../img/woman/9.jpg'),brandName:'浅口鞋'},
                {brandId:2,imgUrl:require('../img/woman/10.jpg'),brandName:'小白鞋'},
                {brandId:2,imgUrl:require('../img/woman/11.jpg'),brandName:'乐福鞋'},
                {brandId:2,imgUrl:require('../img/woman/12.jpg'),brandName:'平底鞋'},
                {brandId:2,imgUrl:require('../img/woman/13.jpg'),brandName:'满帮鞋'},
                {brandId:2,imgUrl:require('../img/woman/14.jpg'),brandName:'松糕鞋'},
                {brandId:2,imgUrl:require('../img/woman/15.jpg'),brandName:'高跟鞋'},
                {brandId:2,imgUrl:require('../img/woman/16.jpg'),brandName:'坡跟鞋'},
                {brandId:2,imgUrl:require('../img/woman/17.jpg'),brandName:'粗跟鞋'},
                {brandId:2,imgUrl:require('../img/woman/18.jpg'),brandName:'休闲鞋'},
                {brandId:2,imgUrl:require('../img/woman/19.jpg'),brandName:'鱼嘴鞋'},
                {brandId:2,imgUrl:require('../img/woman/20.jpg'),brandName:'防水台'},
                {brandId:2,imgUrl:require('../img/woman/21.jpg'),brandName:'尖头鞋'}
            ],
            list3:[
                {brandId:3,imgUrl:require('../img/woman/22.jpg'),brandName:'乐斯菲斯'},
                {brandId:3,imgUrl:require('../img/woman/23.jpg'),brandName:'卡特'},
                {brandId:3,imgUrl:require('../img/woman/24.jpg'),brandName:'添柏岚'},
                {brandId:3,imgUrl:require('../img/woman/25.jpg'),brandName:'添柏岚'},
                {brandId:3,imgUrl:require('../img/woman/26.jpg'),brandName:'添柏岚'},
                {brandId:3,imgUrl:require('../img/woman/27.jpg'),brandName:'添柏岚'},
                {brandId:3,imgUrl:require('../img/woman/28.jpg'),brandName:'添柏岚'},
                {brandId:3,imgUrl:require('../img/woman/29.jpg'),brandName:'添柏岚'},
                {brandId:3,imgUrl:require('../img/woman/30.jpg'),brandName:'添柏岚'}
            ],
            list4:[
                {brandId:1,imgUrl:require('../img/brand/1.png'),brandName:'百丽'},
                {brandId:1,imgUrl:require('../img/brand/2.png'),brandName:'天美意'},
                {brandId:1,imgUrl:require('../img/brand/3.png'),brandName:'他她'},
                {brandId:1,imgUrl:require('../img/brand/4.png'),brandName:'思加图'},
                {brandId:1,imgUrl:require('../img/brand/5.png'),brandName:'森达'},
                {brandId:1,imgUrl:require('../img/brand/6.png'),brandName:'百思图'},
                {brandId:1,imgUrl:require('../img/brand/7.png'),brandName:'真美诗'},
                {brandId:4,imgUrl:require('../img/brand/25.png'),brandName:'阿迪达斯'},
                {brandId:4,imgUrl:require('../img/brand/26.png'),brandName:'阿迪三叶草'},
                {brandId:4,imgUrl:require('../img/brand/27.png'),brandName:'耐克'},
                {brandId:4,imgUrl:require('../img/brand/28.png'),brandName:'安踏'},
                {brandId:2,imgUrl:require('../img/brand/16.png'),brandName:'鬼家虎'},
                {brandId:2,imgUrl:require('../img/brand/17.png'),brandName:'匡威'},
                {brandId:2,imgUrl:require('../img/brand/18.png'),brandName:'亚瑟士'},
                {brandId:2,imgUrl:require('../img/brand/19.png'),brandName:'斯凯奇'}
            ]
        }
    }
}
</script>

<style scoped>

  .classifyBrand>p{
      width:100%;
      height:40px;
      background:#eee;
      padding:10px;
      color:#333;
      margin:0px;
  }
  .classifyBrand>ul{
      list-style: none;
      padding:0px;
      margin:0px;
      display:flex;
      flex-direction: row;
      flex-wrap: wrap;
      width:100%;
      padding:10px;
      justify-content: space-between;
  }
  .classifyBrand>ul>li{
      width:30%;
      height:100px;
  }
  .classifyBrand>ul>li>img{
      width:100%;
      height:40%;
  }
  .classifyBrand>ul>li>p{
      text-align: center;
      margin-top:20%;
  }
</style>


