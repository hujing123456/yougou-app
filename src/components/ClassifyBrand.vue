<template>
    <div class="classifyBrand">
        <p>{{list1[0].brandId | brandClassify}}</p>
        <ul>
            <li v-for="(item,i) in list1" :key="i">
                <img :src="item.imgUrl">
                <p>{{item.brandName}}</p>
            </li>
        </ul>
        <p>{{list2[0].brandId | brandClassify}}</p>
        <ul>
            <li v-for="(item,i) in list2" :key="i">
                <img :src="item.imgUrl">
                <p>{{item.brandName}}</p>
            </li>
        </ul>
        <p>{{list3[0].brandId | brandClassify}}</p>
        <ul>
            <li v-for="(item,i) in list3" :key="i">
                <img :src="item.imgUrl">
                <p>{{item.brandName}}</p>
            </li>
        </ul>
        <p>{{list4[0].brandId | brandClassify}}</p>
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
                {brandId:1,imgUrl:require('../img/brand/1.png'),brandName:'百丽'},
                {brandId:1,imgUrl:require('../img/brand/2.png'),brandName:'天美意'},
                {brandId:1,imgUrl:require('../img/brand/3.png'),brandName:'他她'},
                {brandId:1,imgUrl:require('../img/brand/4.png'),brandName:'思加图'},
                {brandId:1,imgUrl:require('../img/brand/5.png'),brandName:'森达'},
                {brandId:1,imgUrl:require('../img/brand/6.png'),brandName:'百思图'},
                {brandId:1,imgUrl:require('../img/brand/7.png'),brandName:'真美诗'},
                {brandId:1,imgUrl:require('../img/brand/8.png'),brandName:'拔佳'},
                {brandId:1,imgUrl:require('../img/brand/9.png'),brandName:'暇步士'},
                {brandId:1,imgUrl:require('../img/brand/10.png'),brandName:'妙丽'}
            ],
            list2:[
                {brandId:2,imgUrl:require('../img/brand/11.png'),brandName:'阿迪达斯'},
                {brandId:2,imgUrl:require('../img/brand/12.png'),brandName:'耐克'},
                {brandId:2,imgUrl:require('../img/brand/13.png'),brandName:'彪马'},
                {brandId:2,imgUrl:require('../img/brand/14.png'),brandName:'三叶草'},
                {brandId:2,imgUrl:require('../img/brand/15.png'),brandName:'阿迪NEO'},
                {brandId:2,imgUrl:require('../img/brand/16.png'),brandName:'鬼家虎'},
                {brandId:2,imgUrl:require('../img/brand/17.png'),brandName:'匡威'},
                {brandId:2,imgUrl:require('../img/brand/18.png'),brandName:'亚瑟士'},
                {brandId:2,imgUrl:require('../img/brand/19.png'),brandName:'斯凯奇'},
                {brandId:2,imgUrl:require('../img/brand/20.png'),brandName:'锐步'},
                {brandId:2,imgUrl:require('../img/brand/20.png'),brandName:'锐步'},
                {brandId:2,imgUrl:require('../img/brand/21.png'),brandName:'万斯'}
            ],
            list3:[
                {brandId:3,imgUrl:require('../img/brand/22.png'),brandName:'乐斯菲斯'},
                {brandId:3,imgUrl:require('../img/brand/23.png'),brandName:'卡特'},
                {brandId:3,imgUrl:require('../img/brand/24.png'),brandName:'添柏岚'}
            ],
            list4:[
                {brandId:4,imgUrl:require('../img/brand/25.png'),brandName:'阿迪达斯'},
                {brandId:4,imgUrl:require('../img/brand/26.png'),brandName:'阿迪三叶草'},
                {brandId:4,imgUrl:require('../img/brand/27.png'),brandName:'耐克'},
                {brandId:4,imgUrl:require('../img/brand/28.png'),brandName:'安踏'}
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

