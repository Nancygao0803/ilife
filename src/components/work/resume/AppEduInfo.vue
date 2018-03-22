<template>
    <div>
      <div id="EduExperience" class="item_container">
        <div id="edu_head" class="item_head">
          <span class="head_line item_head_line_left"></span>
          <span class="item_head_title">教育经历</span>
          <span class="head_line item_head_line_right"></span>
          <div style="float: right;margin-right: 20px;">
            <el-button type="text" icon="el-icon-circle-plus-outline" class="item_head_btn"
                       v-on:click="showEduEditMode(-1)">{{eduEditText}}
            </el-button>
          </div>
        </div>
        <div v-if="eduEditMode">
          <el-form  ref="form" :model="eduItemCur" label-width="80px">
            <el-form-item label="学校名称">
              <el-input v-model="eduItemCur.name"></el-input>
            </el-form-item>
            <el-form-item label="所学专业">
              <el-input v-model="eduItemCur.major"></el-input>
            </el-form-item>

            <el-form-item label="学历" style="text-align: start;">
              <el-select v-model="eduItemCur.edu" placeholder="">
                <el-option v-for="eduItem in eduData" :label="eduItem.name" value="eduItem.value" :key="index"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="毕业年份" prop="desc">
              <el-date-picker style="width: 100%;"
                              v-model="eduItemCur.grad"
                              align="right"
                              type="year"
                              placeholder="选择年">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="UpdateEdu(eduItemCur.id)">保存</el-button>
              <el-button v-on:click="CancleEduEditMode(eduItemCur.id)">取消</el-button>
            </el-form-item>
          </el-form>

        </div>
        <div id="edu_content" class="item_content">
          <div class="sub_item work_item" v-for=" item in educationData"
               style="overflow: hidden;margin:25px 20px" >
            <div class="item_left_content" style="float: left">
              <div class="item_left_top" style="float: left">
                <div class="item_icon" style="float: left">
                  <img :src="item.img" alt="公司logo" class="my_company_logo" style="margin-right: 5px;">
                </div>
                <div class="item_top_content" style="text-align: start;width: 256px;padding: 5px">
                  <div class="item_title" style="font-size: 16px;">{{item.name}}</div>
                  <div class="item_subtitle" style="color: #999;font-size: 14px;">{{item.desc}}</div>
                </div>
              </div>

            </div>
            <div class="item_right_content" style="float: right;text-align: end">
              <el-button type="text" icon="el-icon-edit" v-on:click="showEduEditMode(item.id)"> 编辑</el-button>
              <div class="duration_text">{{item.grad}}</div>
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
              eduData:[
                { name: '大专', value: '大专'},
                { name: '本科', value: '本科'},
                { name: '硕士', value: '硕士'},
                { name: '博士', value: '博士'},
                { name: '其他', value: '其他'},
              ],
              eduItemCur:'',
              eduItemNew:{
                id:'',
                img:'',
                name:'',
                major:'',
                edu:'',
                desc:'',
                grad:'',
              },
              educationData: [{
                id:'0',
                img: 'https://www.lgstatic.com/i/image/M00/AD/52/CgqKkVi1E8OAXyoZAAAMz_k3WUk91.jpeg',
                name: '沈阳理工大学',
                major:'自动化',
                edu:'本科',
                desc: '本科 · 自动化',
                grad: '2012年毕业'
              }],
              eduEditMode: false,
              eduEditText: '添加',
            }
        },
        methods: {
          showEduEditMode: function (id) {
            console.log(id);
            if(id!=-1){
              this.eduItemCur=this.educationData[id];
            }
            this.eduEditMode = !this.eduEditMode;
            this.eduEditText = this.eduEditText == '添加' ? '取消' : '添加';
          },
          UpdateEdu: function () {
            this.eduEditMode = false;
            this.eduEditText = '添加';
            this.eduItemCur=this.eduItemNew;
          },
          CancleEduEditMode:function (id) {
            this.eduEditMode = false;
            this.eduEditText = '添加';
            this.eduItemCur=this.eduItemNew;
          }
        },
        mounted(){
          this.eduItemCur=this.eduItemNew;
        }
    }
</script>
