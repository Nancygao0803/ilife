<template>
    <div>
      <div id="project" class="item_container">
        <div id="pro_head" class="item_head">
          <span class="head_line item_head_line_left"></span>
          <span class="item_head_title">项目经验</span>
          <span class="head_line item_head_line_right"></span>
          <div style="float: right;margin-right: 20px;">
            <el-button type="text" icon="el-icon-circle-plus-outline" class="item_head_btn"
                       v-on:click="showProjectEditMode(-1)">{{projectEditText}}
            </el-button>
          </div>
        </div>
        <div v-if="projectEditMode">

          <el-form :label-position="top" ref="form" :model="proItemCur" label-width="80px">

            <el-form-item label="项目名称">
              <el-input v-model="proItemCur.name"></el-input>
            </el-form-item>
            <el-form-item label="你的职责">
              <el-input v-model="proItemCur.position"></el-input>
            </el-form-item>
            <el-form-item label="项目时间" style="text-align: start;">
              <el-col :span="11">
                <el-date-picker type="month" placeholder="选择开始年月" v-model="proItemCur.startTime"></el-date-picker>
              </el-col>
              <el-col :span="2" style="opacity: 0;">至</el-col>
              <el-col :span="11">
                <el-date-picker type="month" placeholder="选择结束年月" v-model="proItemCur.endTime"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="项目描述" prop="desc">
              <el-input type="textarea" v-model="proItemCur.duty"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-on:click="UpdateProject(proItemCur.id)">保存</el-button>
              <el-button v-on:click="closeProjectEditMode(proItemCur.id)">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div id="pro_content" class="item_content">
          <div class="sub_item work_item" v-for=" item in projectData"
               style="overflow: hidden;margin:25px 20px">
            <div class="item_left_content" style="float: left">
              <div class="item_left_top" style="float: left">
                <div class="item_top_content" style="text-align: start;padding: 5px">
                  <div class="item_title" style="font-size: 16px;">{{item.name}}</div>
                  <div class="item_subtitle" style="color: #999;font-size: 14px;">{{item.position}}</div>
                </div>
              </div>

            </div>
            <div class="item_right_content" style="float: right;text-align: end">
              <el-button type="text" icon="el-icon-edit" v-on:click="showProjectEditMode(item.id)"> 编辑</el-button>
              <div class="duration_text">{{item.duration}}</div>
            </div>
            <div class="item_left_botton"
                 style="clear: both;color: #555;font-size: 14px;text-align: start">
              {{item.duty}}

            </div>
          </div>


        </div>
      </div>
    </div>
</template>

<script>
    export default{
        data: function () {
            return {
              proItemCur:'',
              proItemNew:{
                id:'',
                name:'',
                position:'',
                duty:'',
                duration:'',
                startTime:'',
                endTime:''
              },
              projectEditMode: false,
              projectEditText: '添加',
              projectData: [
                {
                  id:'0',
                  name: '配电网智能运维平台项目管理模块开发',
                  position: 'web前端开发工程师',
                  duty: '项目主要功能包括：配电网项目从计划前期，准备阶段，施工阶段，结算管理，完成情况统计的各阶段数据管理维护。主要通过列表展示，新增，修改，excel导入导出批量维护数据，及附件上传维护辅助材料。相关技术：项目基于bootstrap，jQuery以及系统现有的自定义控件开发，主要通过自定义table 实现分页查询，自定义显示列名，可通过绑定的筛选form，筛选数据，通过iframe实现新增，修改页面跨域操作，通过form实现excel的上传下载，及window.print（）实现页面打印',
                  duration: '2017.04 - 至今',
                  startTime:'2017.04',
                  endTime:'2018.03'
                },
                {
                  id:'1',
                  name: '配电网设备巡视及检修管理移动端开发',
                  position: '移动端前端开发',
                  duty: '项目主要功能包括：配电网设备巡视记录录入，设备检修结果录入统计,主要通过android textview linearlayout 实现录入页面coding，sqlite 实现数据存储',
                  duration: '2017.02 - 2017.04',
                  startTime:'2017.02',
                  endTime:'2017.04'
                },
                { id:'2',
                  name: '项目实践练习',
                  position: '前端开发',
                  duty: '1.web简历开发---基于 jQuery fullpage 全屏插件，bootstrap响应式布局，css3动画实现个人简历展示 2.h5订餐系统开发---基于jQuery mobile 及Angular JS 在线订餐平台项目，3.仿京东商城系统实现---  基于html，css实现京东首页展示，列表浮动实现导航条，css定位实现下拉列表的显示与隐藏的切换，js定时器与css定位实现banner广告轮播。点击注册，显示注册页面，实现jQuery表单验证，Ajax异步提交到php，php将注册信息插入mysql表，成功后转到登陆页面。登陆页面 ，通过ajax请求通过php查询用户信息，转到主页，在主页点击“我的京东”，进入我的京东页面，通过ajax请求，通过php，从mysql数据库，查询数据，json格式返回，显示订单列表，我的消费记录tab中，使用canvas实现消费记录的折线图绘制。幸运抽奖中，通过canvas旋转方式实现抽奖效果。',
                  duration: '2016.10 - 2017.02',
                  startTime:'2016.10',
                  endTime:'2017.02'
                },
                { id:'3',
                  name: 'pad会议室预定系统移动端开发',
                  position: '移动端开发',
                  duty: 'android 会议室预定，绑定会议室，刷卡预定功能实现。 要采用原生代码实现界面布局，读卡器文件读取，验证',
                  duration: '2016.02 - 2016.10',
                  startTime:'2016.02',
                  endTime:'2016.10'
                },
                { id:'4',
                  name: 'android os 客制化',
                  position: '软件工程师',
                  duty: 'android系统客制化，framework ，app 系统开发调试',
                  duration: '2014.07 - 2016.02',
                  startTime:'2014.07',
                  endTime:'2016.02'
                }
              ],

            }
        },
        methods: {
          showProjectEditMode: function (id) {
            if(id!=-1){
              this.proItemCur=this.projectData[id];
            }
            this.projectEditMode = !this.projectEditMode;
            this.projectEditText = this.projectEditText == '添加' ? '取消' : '添加';
          },
          UpdateProject: function () {
            this.projectEditMode = false;
            this.projectEditText = '添加';
            this.proItemCur=this.proItemNew;
          },
          closeProjectEditMode:function () {
            this.projectEditMode = false;
            this.projectEditText = '添加';
            this.proItemCur=this.proItemNew;
          }
        },
        mounted(){
          this.proItemCur=this.proItemNew;
        }
    }
</script>
