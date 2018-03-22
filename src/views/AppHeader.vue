<template>
    <div>
      <div class="title" style="text-align: start;width: 200px;float: left">iLife/爱生活</div>
      <div id="logout"  style="text-align: start;float: right">
        <el-dropdown>
          <el-button type="primary">Nancy<i class="el-icon-arrow-down el-icon--right"></i></el-button>
     <el-dropdown-menu slot="dropdown">
       <el-dropdown-item>退出登录</el-dropdown-item>
       <el-dropdown-item>修改密码</el-dropdown-item>
       <el-dropdown-item>个人信息</el-dropdown-item>
     </el-dropdown-menu>
   </el-dropdown>
     <!--<el-button type="primary" icon="el-icon-setting">Logout</el-button>-->
   </div>
   <div id="btn_container" style="text-align: start;float: right">
   <el-button type="primary" icon="el-icon-search">Search</el-button>
     <!--<el-badge :value="12" class="item">-->
       <el-button type="primary" icon="el-icon-bell">Notice</el-button>
     <!--</el-badge>-->
   <el-button type="primary" icon="el-icon-message">Message</el-button>
   <el-button type="primary" icon="el-icon-setting">Settings</el-button>
 </div>


    </div>
</template>
<style>
  .item {
  }
</style>
<script>
    export default{
        data: function () {
            return {
            }
        },
        methods: {},
        mounted(){
        }
    }
</script>
