<template>
  <div>
    <el-container>
      <el-header>
          <app-header></app-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <app-nav></app-nav>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>

  .el-header {
    color: #fff;
    flex: 0 0 60px;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    font-size: 24px;
    background-color: #41B883;
  }
  .el-aside{
    text-align: start;

  }
  .app-content {
    flex: 1;
    display: flex;
    flex-flow: row;
  }
  .app-nav {
    flex: 0 0 300px;
    background: #eff2f7;
    text-align: start;
  }
  .app-wrap {
    flex: 1;
    padding: 10px 20px;
    overflow: auto;
  }
  .content-wrap {
    height: 90%;
    border: 1px solid #d1dbe5;
    border-top: none;
    padding: 0 20px;
  }

  .el-main{
  }
.el-container{
}
  </style>
<script>
  /*引入公共方法*/
  import { setCookie,getCookie,delCookie } from '../assets/js/cookie.js'
  import AppNav from './AppNav.vue'
  import AppHeader from './AppHeader.vue'
  export default{
    name: 'home',
    components: {
      AppNav,
      AppHeader
    },
    data(){
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return{
        name: '',
        isCollapse: true,
        tableData: Array(20).fill(item)
      }
    },
    mounted(){
      /*页面挂载获取保存的cookie值，渲染到页面上*/
      let uname = getCookie('username')
      this.name = uname
      /*如果cookie不存在，则跳转到登录页*/
      if(uname == ""){
        this.$router.push('/')
      }else{
        this.$router.push('/main')
      }
    },
    methods:{
      quit(){
        /*删除cookie*/
        delCookie('username')
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        this.isCollapse=false;
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
        this.isCollapse=true;
      }
    },
    mounted:function(){



    }
  }
</script>
