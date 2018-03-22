<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="纪念日"></el-tab-pane>
      <el-tab-pane label="记录"></el-tab-pane>
      <el-tab-pane label="美食食谱收藏"></el-tab-pane>
      <el-tab-pane label="生活小妙招"></el-tab-pane>
      <el-tab-pane label="置衣计划"></el-tab-pane>
      <el-tab-pane label="护肤计划"></el-tab-pane>
      <el-tab-pane label="事务计划"></el-tab-pane>
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
          this.$router.push('/life_recipes')

        }else if(id=='tab-1'){
          this.$router.push('/life_records')
        }else if(id=='tab-0'){
          this.$router.push('/life_days')

        }
        else if(id=='tab-3'){
          this.$router.push('/life_ways')

        }
        else if(id=='tab-4'){
          this.$router.push('/life_clothplan')

        }
        else if(id=='tab-5'){
          this.$router.push('/life_beautyplan')

        }
        else if(id=='tab-6'){
          this.$router.push('/life_plan')

        }

      }
    },
    mounted:function () {
      this.$router.push('/life_days');
    }
  };
</script>
