# 这是一个Vue学习项目
## 只为了学习Vue
### Vue的学习真的繁琐
#### 骚年还是加油吧~

## 将修改后的代码上传到github上时，使用到的命令
1. git add .
2. git commit -m "提交信息"
3. git push -u origin master

## 制作首页App组件
1. 完成 Header区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的Tabbar 区域，使用的是mui的 tabbar
 + 在制作 购物车小图标的时候，操作会相对多一些
 + 先把扩展图标的 css 样式，拷贝到项目中
 + 拷贝 扩展字体库的文件到项目中
 + 为购物车 小图标 ，添加图像样式
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造tabbar为路由

## 设置路由高亮

## 点击tabbar中的路由链接，展示对应的路由组件

## 轮播图从mint-ui中拿过来，直接进行使用
### 第一步：导入mint-ui组件
### 第二步：将mint-ui里的组件放到home组件下

## 加载首页轮播图数据
1. 获取数据，如何获取呢，使用vue-resource;
2. 使用this.$http.get获取数据；
3. 获取到的数据，要保存到data中；
4. 获取数据后，使用v-for循环轮播图。

## 改造九宫格区域 的样式
