<template>
  <div class="app-nav-wrap">
    <el-menu :default-active="$route.path"  router>
      <el-menu-item
        v-for="menu in menus"
        :index="menu.route"
        :key="menu.route">
        <i class="el-icon-menu"></i>{{menu.name}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default{

        data: function () {
            return {
              menus: [
                { route: '/', name: '首页'},
                { route: '/work', name: 'work/工作'},
                { route: '/study', name: 'study/学习'},
                { route: '/health', name: 'health/健康'},
                { route: '/finance', name: 'finance/财务'},
                { route: '/travel', name: 'travel/旅行'},
                { route: '/life', name: 'life/生活'},
                { route: '/aboutme', name: 'About Me/关于我'},
                { route: '/update', name: 'Update Log/更新日志'},
                { route: '/other', name: 'other/其他'}
              ]
            }
        },
        methods: {},
        mounted(){
        }
    }
</script>
