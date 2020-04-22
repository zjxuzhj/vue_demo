<template>
    <div id="header" class="container">
        <ul>
            <li>
                <a>
                    <img src="http://gtms01.alicdn.com/tps/i1/T1Lvt3Fv4kXXbA5QAK-195-120.jpg_Q90.jpg"/>
                    <div class="description">
                        <h3 style="color:#6f9400">聚美妆</h3>
                        <p>聚美妆1/2周年庆</p>
                        <p class="price"><strong>1</strong><i>折起</i></p>
                    </div>
                    <s class="line"></s>
                    <i class="mask"></i>
                </a>
            </li>
            <li>
                <a>
                    <img src="http://gtms01.alicdn.com/tps/i1/T1Lvt3Fv4kXXbA5QAK-195-120.jpg_Q90.jpg"/>
                    <div class="description">
                        <h3 style="color:#6f9400">聚美妆</h3>
                        <p>聚美妆1/2周年庆</p>
                        <p class="price"><strong>1</strong><i>折起</i></p>
                    </div>
                    <s class="line"></s>
                    <i class="mask"></i>
                </a>
            </li>
            <li>
                <a>
                    <img src="http://gtms01.alicdn.com/tps/i1/T1Lvt3Fv4kXXbA5QAK-195-120.jpg_Q90.jpg"/>
                    <div class="description">
                        <h3 style="color:#6f9400">聚美妆</h3>
                        <p>聚美妆1/2周年庆</p>
                        <p class="price"><strong>1</strong><i>折起</i></p>
                    </div>
                    <s class="line"></s>
                    <i class="mask"></i>
                </a>
            </li>
            <li>
                <a>
                    <img src="http://gtms01.alicdn.com/tps/i1/T1Lvt3Fv4kXXbA5QAK-195-120.jpg_Q90.jpg"/>
                    <div class="description">
                        <h3 style="color:#6f9400">聚美妆</h3>
                        <p>聚美妆1/2周年庆</p>
                        <p class="price"><strong>1</strong><i>折起</i></p>
                    </div>
                    <s class="line"></s>
                    <i class="mask"></i>
                </a>
            </li>
            <li>
                <a>
                    <img src="http://gtms01.alicdn.com/tps/i1/T1Lvt3Fv4kXXbA5QAK-195-120.jpg_Q90.jpg"/>
                    <div class="description">
                        <h3 style="color:#6f9400">聚美妆</h3>
                        <p>聚美妆1/2周年庆</p>
                        <p class="price"><strong>1</strong><i>折起</i></p>
                    </div>
                    <s class="line"></s>
                    <i class="mask"></i>
                </a>
            </li>
        </ul>
    </div>
</template>
Web实现手风琴效果
我们来简单分析一下，这里一共有两种效果
鼠标移动到某一列表项时，这个列表项会变大，里面的图片和文字也会变大
所以这个地方我们得写两套样式用来切换，然后就是监听鼠标的事件了
总体来说和之前写的 tabBar 功能也有点类似
<script>
    export default {
        name: "Accordion"
    }
    //Js给布局动态添加 big 的样式class属性
    window.onload = function () {
        let header = document.getElementById('header');
        let liName = header.getElementsByTagName('li');
        if (liName != null) {
            for (var i = 0; i < liName.length; i++) {
                liName[i].onmouseover = function () {
                    for (var j = 0; j < liName.length; j++) {
                        var aa = liName[j]
                        aa.classList.remove('big')
                    }
                    this.classList.add('big')
                }
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 938px;
        height: 128px;
        margin: 0 auto;
        /*边框*/
        border: 1px solid #ccc;
    }

    .container ul {
        margin: 0;
        padding: 0;
    }

    .container li {
        width: 156px;
        height: 128px;
        float: left;
        /*超出后范围后隐藏*/
        overflow: hidden;
    }

    /*这里用到了一个新的布局，relative 相对定位布局，这个相对是相对于父布局的，可以设置 top，left，bottom，right是个方向上相对父布局的距离，*/
    /*然后再给子布局设置绝对定位布局，这样的话就表示子布局只会跟着父布局改动而改动了。*/
    .container li a {
        width: 156px;
        height: 128px;
        position: relative;
        display: block;
        overflow: hidden;
        text-decoration: none;
    }

    .container li img {
        height: 72px;
        width: 117px;
        position: absolute;
        bottom: 0px;
        right: -15px;
    }

    .description {
        width: 136px;
        padding: 0px 10px;
        position: absolute;
        text-align: left;
        top: 0;
        left: 0;
    }

    .description h3 {
        font-size: 14px;
        font-weight: 700;
        margin: 0;
    }

    .description p {
        color: #868686;
        font-size: 12px;
        height: 22px;
        width: 136px;
        overflow: hidden;
        line-height: 22px;
        margin: 0;
    }

    .description .price {
        font-size: 14px;
        font-style: italic;
        color: #fa2a5d;
        height: 35px;
        margin: 0;
    }

    .container .line {
        position: absolute;
        right: 0;
        width: 0;
        border: 1px dashed #cacaca;
        height: 128px;
    }

    .container .mask {
        position: absolute;
        top: 0;
        left: 0;
        height: 128px;
        width: 156px;
        background-color: #000;
        opacity: 0;
    }

    .container:hover .mask {
        /*然后还有一个遮罩层的概念，就是给某个元素设置 opacity 属性，这个的取值是0-1，一个透明度的变化*/
        /*不透明级别*/
        opacity: 0.15;
    }

    /* 以下是变大之后的 */

    .container li.big, li.big a {
        width: 314px;
        height: 128px;
    }

    .container li.big img {
        width: 195px;
        height: 120px;
        right: 0;
        bottom: 0;
    }

    .container li.big .description {
        width: 290px;
    }

    .container li.big h3 {
        font-size: 18px;
    }

    .container li.big .description p {
        font-size: 14px;
        width: 166px;
    }

    .container li.big p.price {
        font-size: 16px;
        padding-top: 7px;
    }

    .container li.big a:hover .mask {
        opacity: 0;
    }

    .container li:hover {
        width: 312px;
    }
</style>