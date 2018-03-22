<template>
    <div>
      <div id="skills" class="item_container">
        <div id="skills_head" class="item_head">
          <span class="head_line item_head_line_left"></span>
          <span class="item_head_title">技能评价</span>
          <span class="head_line item_head_line_right"></span>
          <div style="float: right;margin-right: 20px;">
            <el-button type="text" icon="el-icon-circle-plus-outline" class="item_head_btn"
                       v-on:click="showSkillEditMode()">{{skillEditText}}
            </el-button>
          </div>
        </div>
        <div v-if="skillEditMode">
          <el-form ref="form" :model="baseInfo" label-width="80px;" style="text-align: start">
            <el-form-item  v-for="item in skillsData">
              <el-input class="demonstration" v-model="item.skillTitle" placeholder="内容" style="width: 14%;margin-right: 12px;"></el-input>
             <!-- <span  >{{item.skillTitle}}</span>-->
              <el-slider  style="display: inline-block;width: 80%;vertical-align: middle;" v-model="item.skillRate" :format-tooltip="formatRate" change="onChange()"></el-slider>
            </el-form-item>
            <el-form-item>
              <el-button type="text" v-on:click="AddSkill()">添加一行</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-on:click="UpdateSkill()">保存</el-button>
              <el-button v-on:click="showSkillEditMode(1)">取消</el-button>
            </el-form-item>
          </el-form>


        </div>
        <div id="skills_content" class="item_content" v-if="!skillEditMode">
          <div class="sub_item work_item" v-for=" item in skillsData"
               style="overflow: hidden;margin:25px 20px">
            <span class="skill_title demonstration">{{item.skillTitle}}</span>
            <el-progress :percentage="item.skillRate"></el-progress>
            <span class="skill_level"> {{item.skillLevel}}</span>
          </div>


        </div>
      </div>
    </div>
</template>
<style>
  .demonstration{
    display: inline-block;
    width: 9%;
  }
  .el-slider__button{
    width: 11px;
    height: 11px;
  }
</style>
<script>
    export default{
        data: function () {
            return {
              skillsData: [
                { id:'0',skillTitle: 'Vue', skillRate: 80, skillLevel: '掌握'},
                { id:'1',skillTitle: 'jQuery', skillRate: 80, skillLevel: '掌握'}
              ],
              skillEditMode: false,
              skillEditText: '编辑'
            }
        },
        methods: {
          onChange: function () {
            console.log(value);
            if (0 <= value <= 20) {
              return '了解'
            } else if (21 <= value <= 40) {
              return '熟悉'
            } else if (41 <= value <= 60) {
              return '掌握'
            } else if (61 <= value <= 80) {
              return '精通'
            } else if (81 <= value <= 100) {
              return '专家'
            }
          },

          formatRate: function (value) {
            console.log(value);
            /*if(0<=value<=20){
             return '了解'
             }else if(21<=value<=40){
             return '熟悉'
             }else if(41<=value<=60){
             return '掌握'
             }else if(61<=value<=80){
             return '精通'
             }else if(81<=value<=100){
             return '专家'
             }*/

          },
          showSkillEditMode: function () {
            this.skillEditMode = !this.skillEditMode;
            this.skillEditText = this.skillEditText == '编辑' ? '取消' : '编辑';
          },
          UpdateSkill: function () {
            this.skillEditMode = false;
            this.skillEditText = '编辑';
          },
          AddSkill:function () {
            this.skillsData.push({ id:'',skillTitle: '', skillRate: 0, skillLevel: ''},);
          }
        },
        mounted(){
        }
    }
</script>
