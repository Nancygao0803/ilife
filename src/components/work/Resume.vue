<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <el-container>
      <el-container>
        <el-main>
          <div id="resume_container">
            <div id="base_info_container" style="margin: 10px 2px;">
              <!----photo--->
              <div id="mr_mr_head">
                <div class="m_portrait mr_top_bg">
                  <img src="../../assets/img/resume/photo_bg.png" class="opa" alt=""/>
                  <img src="../../assets/img/resume/photo_default.jpeg" width="120" height="120" alt=""/>
                </div>
              </div>
              <!-------------baseInfo----------->
              <app-base-info></app-base-info>
            </div>
            <div id="resume_details">
              <div v-if="nothing">
                <el-button type="primary" plain style="width: 50%;">现在完善简历
                  <i class="el-icon-caret-right el-icon--right"></i></el-button>
              </div>
              <div v-else>
                <!-----work expriences--------->
                <app-work-exp></app-work-exp>
                <!-----education----------->
                <app-edu-info></app-edu-info>
                <!-------project expriences------>
                <app-pro-list></app-pro-list>
                <!---------self introduction------->
                <app-self-info></app-self-info>
                <!---------hope------------->
                <app-hope-info></app-hope-info>
                <!-------examples---------->
                <app-exam-list></app-exam-list>
                <!----------skills------------>
              <app-skill-list></app-skill-list>
              </div>
            </div>
          </div>
        </el-main>
        <el-aside width="300px" style="background: #eff2f7;">
          <div id="resuem_integrity" style="padding: 20px;">
            <div>简历完整度: 70%</div>
            <el-progress :percentage="70"></el-progress>
          </div>
          <el-menu :default-active="$route.path" class="resume_menu">
            <el-menu-item
              v-for="tag in tags"
              :index="tag.route"
              :key="tag.route">
              <i class="tag.value"></i>{{tag.name}}
            </el-menu-item>
          </el-menu>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<style type="text/sass">
  .el-progress {
    width: 80%;
    display: inline-block;
  }

  .sub_item span {
    display: inline-block;
  }

  .avatar-uploader .el-upload {
    width: 100px;
    height: 100px;
    line-height: 100px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .hope_content ul {
    list-style: none;
  }

  .hope_content ul li {
    float: left;
    width: 25%;
    line-height: 24px;

  }

  .hope_content ul li i {
    width: 9px;
    height: 19px;
    display: inline-block;
    margin-right: 10px;

    background: url(../../assets/img/resume/icons_resume.png) no-repeat;
    background-position: -97px -220px;
  }

  .hope_content ul li .hope_jobbase {
    background-position: -93px -270px;
    width: 14px;
    height: 20px;
  }

  .hope_content ul li .hope_jobtype {
    background-position: -93px -247px;
    width: 17px;
    height: 17px;
  }

  .hope_content ul li .hope_jobsalary {
    background-position: -92px -292px;
    width: 17px;
    height: 19px;
  }

  .el-form {
    margin: 20px 80px;
    padding: 20px;
  }

  .el-input {
    width: 100%;
  }

  .item_container {
    overflow: hidden;
  }

  .item_icon img {
    width: 46px;
    height: 46px;
    border: 2px solid #eee;
  }

  .item_head_title {

    font-size: 18px;
    padding: 6px 24px;
    text-align: center;
    background-color: #eee;
    -moz-border-radius: 26px;
    -webkit-border-radius: 26px;
    border-radius: 26px;
    margin: 0 13px;
  }

  .item_head {

  }

  .item_head span {
    vertical-align: middle;
    display: inline-block;
  }

  .head_line {
    width: 230px;
    height: 0;
    border-top: 1px solid #ededed;

  }

  .head_line .item_head_line_right {
    width: 152px;
  }

  .slogan {
    overflow: hidden;
    padding: 2px 5px;
  }

  .slogan div {

    display: inline-block;
    float: left;

  }

  .edit_btn {
    padding-left: 25px;
  }

  .el-aside {
  }

  .resume_menu .el-menu-item i {
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url(../../assets/img/resume/icons_resume.png) no-repeat;
    margin: 0 24px 0 29px;
    background-position: -67px -240px;

  }

  .mr_top_bg {
    position: relative;
    height: 135px;
    background: url(../../assets/img/resume/head_bg.jpg);
    z-index: 2;
    margin-bottom: 65px;
  }

  .mr_top_bg * {
    position: absolute;
    left: 319px;
    width: 132px;
    height: 132px;
    top: 42px
  }

  .mr_top_bg .opa {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 175px;
    z-index: 2;
  }

  .mr_top_bg input {
    opacity: 0;
    filter: alpha(opacity:0);
    cursor: pointer;
    border-radius: 50%;
  }

  .mr_top_bg .shadow {
    width: 116px;
    height: 116px;
    top: 47px;
    left: 293px;
    display: none;
  }

  .m_portrait div {
    width: 200px;
    height: 132px;
    position: absolute;
    left: 41%;
    top: 39px;
    z-index: 100;
  }

  .my_base {
    background-position: -5px -117px;
  }

  .my_work {
    background-position: -24px -137px;

  }

  .my_edu {
    background-position: -24px -156px;
  }

  .my_project {
    background-position: -67px -177px;
  }

  .my_skill {
    background-position: -67px -262px;
  }

  .my_self {
    background-position: -67px -219px;
  }

  .my_hope {
    background-position: -67px -240px;
  }

</style>

<script>
  import AppLocSelector from './resume/AppLocSelector.vue'
  import AppBaseInfo from './resume/AppBaseInfo.vue'
  import AppWorkExp from './resume/AppWorkExp.vue'
  import AppEduInfo from './resume/AppEduInfo.vue'
  import AppProList from './resume/AppProList.vue'
  import AppSelfInfo from './resume/AppSelfInfo.vue'
  import AppHopeInfo from './resume/AppHopeInfo.vue'
  import AppExamList from './resume/AppExamList.vue'
  import AppSkillList from './resume/AppSkillList.vue'
  export default{
    name: 'resume',
    components: {
      AppLocSelector,
      AppBaseInfo,
      AppWorkExp,
      AppEduInfo,
      AppProList,
      AppSelfInfo,
      AppHopeInfo,
      AppExamList,
      AppSkillList

    },
    data: function () {
      return {

        tags: [
          {
            route: '/', name: '基本信息', value: 'my_base'
          },
          {
            route: '/work', name: '工作经历', value: 'my_work'
          },
          {
            route: '/study', name: '教育经历', value: 'my_edu'
          },
          {
            route: '/health', name: '项目经验', value: 'my_project'
          },
          {
            route: '/finance', name: '作品展示', value: 'my_skill'
          },
          {
            route: '/travel', name: '自我描述', value: 'my_self'
          },
          {
            route: '/life', name: '期望工作', value: 'my_hope'
          },
          {
            route: '/aboutme', name: '添加板块', value: 'mybase'
          },
        ],
        nothing: false,
      }
    },
    methods: {

    },
    mounted(){

    }
  }
</script>
