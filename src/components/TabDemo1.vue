<!--
tab标签展示页面
-->
<template>
    <div class="tabBar">
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">我的</a></li>
            <li><a href="#">购物车</a></li>
            <li><a href="#">个人中心</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TabDemo1"
    }
</script>

<style scoped>
    .tabBar {
        width: 600px;
        height: 50px;
        background-color: #ffffff;

        /*这样是让布局水平居中*/
        margin: 10px auto;
    }

    .tabBar ul {
        width: 510px;

        /*这样是让布局水平居中*/
        margin: 0 auto;
    }

    .tabBar ul li {
        width: 100px;
        height: 50px;

        /*<li>标签使用float: left;属性，这样就能使得列表横向排列了。*/
        float: left;

        /*这句代码是去除<li>前面的圆点的*/
        list-style: none;
    }

    .tabBar ul li a {
        width: 100px;
        height: 50px;

        /*这种一般是文本居中的方式。*/
        text-align: center;
        margin: 0 1px;
        display: block;
        background-color: #e1e1e1;

        /*这种可以让布局垂直居中，这个高度设置为父布局的高度就行了*/
        line-height: 50px;

        /*这句是去除<a>标签的下划线的*/
        text-decoration: none;
        color: #000;
    }

    .tabBar ul li a:hover {
        color: #ffffff;
        background-color: #f60;
    }
</style>