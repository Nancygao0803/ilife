<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="游记"></el-tab-pane>
      <el-tab-pane label="攻略"></el-tab-pane>
      <el-tab-pane label="旅行计划及预算"></el-tab-pane>
    </el-tabs>
    <div id="travel_container">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>


  #travel_container{
    background-color:#13ce66;
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
          this.$router.push('/travel_plan')

        }else if(id=='tab-1'){
          this.$router.push('/travel_routes')
        }else if(id=='tab-0'){
          this.$router.push('/travel_notes')

        }

      }
    },
    mounted:function () {
      this.$router.push('/travel_notes');
    }
  };
</script>
