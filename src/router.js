import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Index from './components/Index'
import Classify from "./components/Classify"
import Find from "./components/Find"
import ShoppingCart from "./components/ShoppingCart"
import MyCenter from "./components/MyCenter"
import ClassifyBrand from "./components/ClassifyBrand"
import ClassifyWoman from "./components/ClassifyWoman"
import ClassifyMan from "./components/ClassifyMan"
import ClassifySports from "./components/ClassifySports"
import ClassifyOutdoor from "./components/ClassifyOutdoor"
import ClassifyChildren from "./components/ClassifyChildren"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/home'},
    {
      path: '/home',
      component: Home,
      children:[
        {path:"",redirect:'/index'},
        {path:'/index',component:Index},
        {
          path:'/classify',
          component:Classify,
          children:[
            {path:'',redirect:'/classify/classifyBrand'},
            {path:'/classify/classifyBrand',component:ClassifyBrand},
            {path:'/classify/classifyWoman',component:ClassifyWoman},
            {path:'/classify/classifyMan',component:ClassifyMan},
            {path:'/classify/classifySports',component:ClassifySports},
            {path:'/classify/classifyOutdoor',component:ClassifyOutdoor},
            {path:'/classify/classifyChildren',component:ClassifyChildren}
        ]},
        {path:'/find',component:Find},
        {path:'/shoppingcart',component:ShoppingCart},
        {path:'/mycenter',component:MyCenter}
    ],
  }
  ]
})
