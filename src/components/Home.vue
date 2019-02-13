<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <mt-header fixed title='优购商城'></mt-header>
    <router-view></router-view>
    <!-- 底部tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/index">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/classify">
				<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab-item" to="/find">
				<span class="mui-icon mui-icon-eye"></span>
				<span class="mui-tab-label">发现</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shoppingCart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
      <router-link class="mui-tab-item" to="/myCenter">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>

<style>

.header{
  width:100%;
  height:200px;
}
.app-home .mint-swipe{
  margin-top:40px;
}

</style>
