<template>
  <div>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="体重管理"></el-tab-pane>
      <el-tab-pane label="运动管理"></el-tab-pane>
      <el-tab-pane label="护肤方案"></el-tab-pane>
    </el-tabs>
    <div id="health_container">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>


  #health_container{
    background-color:#fab6b6;
  }
</style>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
        var id=event.target.getAttribute('id');
        console.log(event.target.getAttribute('id'))  //获取到当前元素的id
        if(id=='tab-2'){
          this.$router.push('/remain')

        }else if(id=='tab-1'){
          this.$router.push('/keep')
        }else if(id=='tab-0'){
          this.$router.push('/weight')

        }

      }
    },
    mounted:function () {
      this.$router.push('/weight');
    }
  };
</script>
