<!--
tab标签展示页面
-->
<template>
    <div class="tabBar">
        <ul class="nav">
            <li><a href="#">首页</a>
                <ul class="subNav">
                    <li><a href="#">首页二级菜单</a></li>
                    <li><a href="#">首页二级菜单</a></li>
                    <li><a href="#">首页二级菜单</a></li>
                    <li><a href="#">首页二级菜单</a></li>
                </ul>
            </li>
            <li><a href="#">关于</a>
                <ul class="subNav">
                    <li><a href="#">关于二级菜单</a></li>
                    <li><a href="#">关于二级菜单</a></li>
                    <li><a href="#">关于二级菜单</a></li>
                    <li><a href="#">关于二级菜单</a></li>
                </ul>
            </li>
            <li><a href="#">我的</a>
                <ul class="subNav">
                    <li><a href="#">我的二级菜单</a></li>
                    <li><a href="#">我的二级菜单</a></li>
                    <li><a href="#">我的二级菜单</a></li>
                    <li><a href="#">我的二级菜单</a></li>
                </ul>
            </li>
            <li><a href="#">购物车</a>
                <ul class="subNav">
                    <li><a href="#">购物车二级菜单</a></li>
                    <li><a href="#">购物车二级菜单</a></li>
                    <li><a href="#">购物车二级菜单</a></li>
                    <li><a href="#">购物车二级菜单</a></li>
                </ul>
            </li>
            <li><a href="#">个人中心</a>
                <ul class="subNav">
                    <li><a href="#">个人中心二级菜单</a></li>
                    <li><a href="#">个人中心二级菜单</a></li>
                    <li><a href="#">个人中心二级菜单</a></li>
                    <li><a href="#">个人中心二级菜单</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TabDemo1",
    }

    /*
    二级菜单，隐藏
    使用overflow: hidden;来实现，这个属性的意思就是当内容溢出元素框时，我就隐藏起来。
    而且要将 Subnav 的高度设置成0，这样才能完全隐藏二级菜单。

    显示
    使用js，当鼠标移动过去后修改元素属性
    window.onload 方法是页面在加载完之后就会被立即执行，这样避免代码中一些对象未被加载就被操作了

    使用interval方法 循环执行一个函数
    setInterval()： 间隔指定的毫秒数不停地执行指定的代码，定时器
    clearInterval()： 用于停止 setInterval() 方法执行的函数代码
    使用方法：setInterval(code，millisec)，两个参数都是必须的，第一个参数为要调用的函数或要执行的代码串。第二个参数为周期性执行或调用 code 之间的时间间隔，以毫秒计。

    一个增加 subNav 的高度的函数，当增加的高度超过了二级菜单中的高度时，取消函数的执行，这样就能形成一个打开的动画

    同理，在鼠标移除监听事件中，也循环执行减去 subNav 高度的函数，这样就能形成一个关闭动画。
     */
    window.onload = function () {
        //获取所有 li 元素
        let lis = document.getElementsByTagName('li');
        for (var i = 0; i < lis.length; i++) {
            //对li元素设置 鼠标划过监听事件
            lis[i].onmouseover = function () {
                var nav = this.getElementsByTagName('ul')[0];
                if (null != nav) {
                    var that = nav;
                    clearInterval(that.time);
                    that.time = setInterval(function () {
                        that.style.height = that.offsetHeight + 16 + "px";
                        if (that.offsetHeight >= 200) {
                            clearInterval(that.time);
                        }
                    }, 20)
                }
            }
            lis[i].onmouseleave = function () {
                var nav = this.getElementsByTagName('ul')[0];
                if (null != nav) {
                    var that = nav;
                    clearInterval(that.time);
                    that.time = setInterval(function () {
                        that.style.height = that.offsetHeight - 16 + "px";
                        if (that.offsetHeight <= 0) {
                            that.style.height = 0 + "px";
                            clearInterval(that.time);
                        }
                    }, 20)
                }
            }
        }
    }
</script>

<style scoped>
    .tabBar {
        width: 800px;
        height: 50px;
        background-color: #ffffff;

        /*这样是让布局水平居中*/
        margin: 10px auto;
    }

    .nav {
        width: 750px;
        margin: 0 auto;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        text-align: center;
        display: block;
    }

    .nav li {
        width: 150px;
        height: 50px;

        /*<li>标签使用float: left;属性，这样就能使得列表横向排列了。*/
        float: left;
    }

    .nav li a {
        width: 150px;
        height: 50px;

        /*这种一般是文本居中的方式。*/
        text-align: center;
        margin: 0 1px;
        background-color: #e1e1e1;

        /*这种可以让布局垂直居中，这个高度设置为父布局的高度就行了*/
        line-height: 50px;

        /*这句是去除<a>标签的下划线的*/
        text-decoration: none;
        color: #000;
    }

    .nav li a:hover {
        color: #ffffff;
        background-color: #f60;
    }

    .subNav {
        height: 0px;
        padding: 0px;
        overflow: hidden;
    }


    .subNav li a {
        width: 150px;
        height: 50px;
        text-align: center;
        background-color: #f7f7f7;
        line-height: 50px;
        color: #666666;
    }

    .subNav li a:hover {
        color: #ffffff;
        background-color: #f60;
    }

</style>