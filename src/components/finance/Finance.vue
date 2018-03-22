<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="存款"></el-tab-pane>
      <el-tab-pane label="记账"></el-tab-pane>
      <el-tab-pane label="预算"></el-tab-pane>
      <el-tab-pane label="收支分析"></el-tab-pane>
    </el-tabs>
    <div id="finance_container">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>


  #finance_container{
    background-color:#ffff00;
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
          this.$router.push('/reportf')

        }else if(id=='tab-1'){
          this.$router.push('/budget')
        }else if(id=='tab-0'){
          this.$router.push('/accounting')

        }else if(id=='tab-3'){
          this.$router.push('/deposit')

        }

      }
    },
    mounted:function () {
      this.$router.push('/accounting');
    }
  };
</script>
