<template>
    <div class="app-container">
        <!-- 顶部 Header 区域 -->
        <mt-header fixed title="fixed top"></mt-header>

        <!-- 中间的 路由 router-view区域 -->

        <!-- 底部 Tabbar 区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    </div>
</template>

<script>
</script>

<style>
    .app-container {
        padding: 40px;
    }
</style>