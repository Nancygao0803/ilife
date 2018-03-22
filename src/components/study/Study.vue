<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="English/英文"></el-tab-pane>
      <el-tab-pane label="it 技术"></el-tab-pane>
      <el-tab-pane label="读书"></el-tab-pane>
    </el-tabs>
    <div id="study_container">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>


  #study_container{
    background-color:#ff00ff;
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
          this.$router.push('/reading')

        }else if(id=='tab-1'){
          this.$router.push('/it_tech')
        }else if(id=='tab-0'){
          this.$router.push('/study_english')

        }
      }
    },
    mounted:function () {
      this.$router.push('/study_english');
    }
  };
</script>
