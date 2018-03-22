<template>
    <div>
      <div id="workExperience" class="item_container">
        <div id="work_head" class="item_head">
          <span class="head_line item_head_line_left"></span>
          <span class="item_head_title">工作经历</span>
          <span class="head_line item_head_line_right"></span>
          <div style="float: right;margin-right: 20px;">
            <el-button type="text" icon="el-icon-circle-plus-outline" class="item_head_btn"
                       v-on:click="showWorkExprienceEditMode(-1)">{{workExprienceEditText}}
            </el-button>
          </div>
        </div>
        <div v-if="WorkExprienceEditMode">

          <el-form  ref="form" :model="workExpItemCur" label-width="80px">
            <div style="overflow: hidden">
              <div style="float: left;width: 80%">
                <el-form-item label="公司">
                  <el-input v-model="workExpItemCur.name"></el-input>
                </el-form-item>
                <el-form-item label="职位">
                  <el-input v-model="workExpItemCur.position"></el-input>
                </el-form-item>
              </div>
              <div style="float: left;width: 20%">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </div>
            <el-form-item label="在职时间" style="text-align: start;">
              <el-col :span="11">
                <el-date-picker type="month" placeholder="选择开始年月" v-model="workExpItemCur.startTime"></el-date-picker>
              </el-col>
              <el-col :span="2" style="opacity: 0;">至</el-col>
              <el-col :span="11">
                <el-date-picker type="month" placeholder="选择结束年月" v-model="workExpItemCur.endTime"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="工作内容" prop="desc">
              <el-input type="textarea" v-model="workExpItemCur.duty"></el-input>
            </el-form-item>
            <el-form-item label="技术标签" style="text-align: start;">
              <el-tag
                :key="tag"
                v-for="tag in workExpItemCur.tags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="UpdateWorkExprience(workExpItemCur.id)">保存</el-button>
              <el-button v-on:click="CancleExprienceEditMode(workExpItemCur.id)">取消</el-button>
            </el-form-item>

          </el-form>


        </div>
        <div id="work_content" class="item_content">
          <div class="sub_item work_item" v-for=" item in workExprienceData"
               style="overflow: hidden;margin:25px 20px">
            <div class="item_left_content" style="float: left">
              <div class="item_left_top" style="float: left">
                <div class="item_icon" style="float: left">
                  <img :src="item.img" alt="公司logo" class="my_company_logo" style="margin-right: 5px;">
                </div>
                <div class="item_top_content" style="text-align: start;width: 256px;padding: 5px">
                  <div class="item_title" style="font-size: 16px;">{{item.name}}</div>
                  <div class="item_subtitle" style="color: #999;font-size: 14px;">{{item.position}}</div>
                </div>
              </div>

            </div>
            <div class="item_right_content" style="float: right;text-align: end">
              <el-button type="text" icon="el-icon-edit" v-on:click="showWorkExprienceEditMode(item.id)"> 编辑</el-button>
              <div class="duration_text">{{item.duration}}</div>
            </div>
            <div class="item_left_botton"
                 style="clear: both;color: #555;font-size: 14px;text-align: start">
              <div>{{item.duty}}</div>
                <div style="margin: 5px;"><el-tag  :key="tag" v-for="tag in item.tags" size="medium">{{tag}}</el-tag></div>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>
<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
<script>
    export default{
        data: function () {
            return {

              inputVisible: false,
              inputValue: '',
              imageUrl: '',
              workExpItemCur:'',
              workExpItemNew:{
                id:'',
                img:'',
                name:'',
                position:'',
                duty:'',
                duration:'',
                startTime:'',
                endTime:'',
                tags:[]
              },
              workExprienceData: [
                { id:'0',
                  img: 'http://www.lgstatic.com/thumbnail_300x300/i/image/M00/A0/C4/Cgp3O1imqnCACotRAAKUbm0ueNY42.jpeg',
                  name: '杭州天与佳科技有限公司',
                  position: 'web前端开发工程师',
                  duty: '配电网智能系统项目管理模块前端开发',
                  duration: '2017.04 - 2018.03',
                  startTime:'2014.07',
                  endTime:'2018.03',
                  tags:['jQuery','javaScript','Bootstrap']
                },
                {id:'1',
                  img: 'https://www.lgstatic.com/image1/M00/00/72/CgYXBlTUXZeAVSmyAABQMoEzNoo972.jpg',
                  name: '印孚瑟斯技术中国有限公司',
                  position: '移动开发',
                  duty: '阿里外包android项目开发与维护',
                  duration: '2016.02 — 2016.10',
                  startTime:'2016.02',
                  endTime:'2016.10',
                  tags:['Android Studio','Android UI','java']
                }, {
                  id:'2',
                  img: 'https://www.lgstatic.com/image1/M00/00/28/Cgo8PFTUWI2AD0tSAABRMp7Sy5c861.jpg',
                  name: '富士康科技集团',
                  position: '软件工程师',
                  duty: '2014.07--2016.02 负责oem客制化的framework，app开发,2012.07--2014.07 设备采购',
                  duration: '2012.07 — 2016.02',
                  startTime:'2012.07',
                  endTime:'2016.02',
                  tags:['android framework','android os','java']
                }
              ],
              WorkExprienceEditMode: false,
              workExprienceEditText: '添加',
            }
        },
        methods: {
          showWorkExprienceEditMode: function (id) {
            console.log('cur work exp id is :'+id);
            if(id!=-1){

              this.workExpItemCur=this.workExprienceData[id];
            }
           else{
              this.workExprienceEditText = this.workExprienceEditText == '添加' ? '取消' : '添加';
            }
            this.WorkExprienceEditMode = !this.WorkExprienceEditMode;

          },
          UpdateWorkExprience: function () {
            this.WorkExprienceEditMode = false;
            this.workExprienceEditText = '添加';
            this.workExpItemCur=this.workExpItemNew;
          },
          CancleExprienceEditMode:function (val) {
            console.log(val);
            //if(val==-1){
              this.workExprienceEditText = '添加';
            //}
            this.WorkExprienceEditMode = !this.WorkExprienceEditMode;
            this.workExpItemCur=this.workExpItemNew;
          },
          handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
          },
          beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
              this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
          },
          handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
          },

          showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
              this.$refs.saveTagInput.$refs.input.focus();
            });
          },

          handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
              this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
          }
        },
        mounted(){
          this.workExpItemCur=this.workExpItemNew;
        }
    }
</script>
