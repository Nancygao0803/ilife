<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="card  in cards" :key="card.route">
        <el-card :body-style="{ padding: '4px',margin:'4px' }">
          <div slot="header" class="clearfix" style="background-color: #41B883;text-align: start">
            <span>{{card.name}}</span>
            <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-edit"></el-button>
          </div>
          <div v-for="o in 5" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>


<style>
  .el-card{
    margin: 9px 10px 0 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        currentDate: new Date(),
        cards: [
          { route: '/work', name: '今日计划'},
          { route: '/study', name: '工作记录'},
          { route: '/health', name: '今日学习'},
          { route: '/finance', name: '今日收支'},
          { route: '/travel', name: '今日健康'},
          { route: '/life', name: '新增收藏'},
          { route: '/aboutme', name: '今日备忘'},
          { route: '/update', name: '更新日志'},
          { route: '/update', name: '其他'},
        ]
      };
    }
  }
</script>
