<template>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in WorkItems"
                     :index="item.route"
                     :key="item.route"
                     :label="item.name">
        </el-tab-pane>
      </el-tabs>
      <div id="work_container">
      <router-view></router-view>
      </div>
    </div>
</template>
<style>


  #work_container{
  }
</style>
<script>
  export default {
    data() {
      return {
        activeName: 'resume',
        WorkItems: [
        { route: '/resume', name: '我的简历',key:"/resume",index:0},
        { route: '/work', name: '我的项目',key:'/work',index:1},
        { route: '/study', name: '解决方案',key:'/study',index:2}
      ]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
        var id=event.target.getAttribute('id');
        console.log(event.target.getAttribute('id'))  //获取到当前元素的id
        console.log(this.activeName);
        //this.$router.push(''+this.activeName);
        if(id=='tab-0'){
          this.$router.push('/resume')

        }
      else if(id=='tab-1'){
          this.$router.push('/project')
        }
        else if(id=='tab-2'){
          this.$router.push('/solution')

        }

      }
    },
    mounted:function () {
      this.$router.push('/resume');
    }
  };
</script>
