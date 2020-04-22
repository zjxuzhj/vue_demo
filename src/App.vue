<template>
    <div id="app">
<!--        <img alt="Vue logo" src="./assets/logo.png" ref="testDom">-->
<!--        <button @click="getTest">获取test节点</button>-->
<!--        <button @click="getHello">获取helloworld组件中的值</button>-->
<!--        <HelloWorld msg="Welcome to Your Vue.js App" ref="hello" @refreshData="getData"/>-->
        <TabDemo1 msg="Welcome to Your Vue.js App" ref="hello" @refreshData="getData"/>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import TabDemo1 from "@/components/Accordion";

    export default {
        name: 'App',
        components: {
            TabDemo1,
            // HelloWorld
        },
        mounted() {
            let getElementsByName = document.getElementById("app1");
            console.log(getElementsByName)
        },
        methods: {
            getTest() {
                this.$refs.hello.open()
            },
            getHello() {
                console.log(this.$refs.hello.msg)
            },
            getData() {
                console.log('111111')
            }
        }
    }
    var sum1;

    // var d=location

    function add2(x, y) {
        sum1 = x + y;
        return sum1
    }

    console.log(add2(5, 20))
    // console.log(d.host)
    // alert(d.host)
    // console.log(prompt("要显示在消息对话框中的文本，不可修改","文本框中的默认内容"))


</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

</style>
