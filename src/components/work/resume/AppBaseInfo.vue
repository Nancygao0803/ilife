<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div class="slogan" v-if="!sloganEditMode" v-on:mouseenter="showEdit(1)" v-on:mouseleave="hiddenEdit(1)"
         style="height:50px;">
      <div style="margin-left: 15%;width: 70%;">{{slogan}}</div>
      <el-button type="text" icon="el-icon-edit" v-if="sloganEditable" v-on:click="showSloganEditMode()"
                 class="edit_btn"> 编辑
      </el-button>
    </div>
    <div class="slogan" v-if="sloganEditMode">
      <el-input placeholder="请输入内容" v-model="slogan" clearable
                style="height: 50px;width: 58%;padding-left: 15%;"></el-input>

      <el-button type="primary" icon="el-icon-check" v-on:click="UpdateSlogan()"> 保存</el-button>
      <el-button type="text" icon="el-icon-close" v-on:click="showSloganPreviewMode()"> 取消</el-button>
    </div>
    <h3>Nancy</h3>
    <div class="slogan" id="my_base" v-if="!baseInfoEditMode" v-on:mouseenter="showEdit(2)"
         v-on:mouseleave="hiddenEdit(2)" style="height:80px;">
      <div style="margin-left: 15%;width: 70%;">
        <ul>
          <li><i class="gendar_i"></i>{{baseInfo.gender}}</li>
          <li>{{baseInfo.age}}岁</li>
          <li>{{baseInfo.edu}}</li>
          <li>{{baseInfo.exprience}}工作经验</li>
          <li><i class="el-icon-location-outline" style="background: none"></i>{{baseInfo.base}}</li>
          <li><i class="tel_i"></i>{{baseInfo.tel}}</li>
          <li><i class="email_i"></i>{{baseInfo.email}}</li>
        </ul>
      </div>
      <el-button type="text" icon="el-icon-edit" v-if="baseInfoEditable" v-on:click="showBaseInfoEditMode()"
                 class="edit_btn"> 编辑
      </el-button>
    </div>
    <div id="my_base_from" v-if="baseInfoEditMode" style="background-color: #f2f2f2;">
      <el-form :label-position="top" :model="baseInfo" label-width="80px">
        <el-form-item label="显示身份">
          <el-select v-model="baseInfo.region" placeholder="">
            <el-option v-for='item in regionData' :label="item.name" :value="item.value" :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别" style="text-align: start;">
          <el-radio-group v-model="baseInfo.gender"  style="text-align: start;" >
            <el-radio border v-for="item in genderData" :label="item.name" value="item:value" :key="index"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="生日" style="text-align: start;">
            <el-date-picker  style="width: 100%;" type="month" placeholder="选择年月" v-model="baseInfo.birth" value-format="yyyy-MM" format="yyyy 年 MM 月"></el-date-picker>
        </el-form-item>
        <el-form-item label="最高学历">
          <el-select v-model="baseInfo.edu" placeholder="">
            <el-option v-for="item in eduData" :label="item.name" value="item.value" :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作年限">
          <el-select v-model="baseInfo.exprience" placeholder="">
            <el-option  v-for="item in expData" :label="item.name" value="item.value" :key="index"></el-option>

          </el-select>
        </el-form-item>
        <app-loc-selector></app-loc-selector>
        <el-form-item label="手机号码">
          <el-input v-model="baseInfo.tel"></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱">
          <el-input v-model="baseInfo.email"></el-input>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="UpdateBaseInfo()">保存</el-button>
          <el-button @click="showBaseInfoPreviewMode()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style>
  #my_base ul {
    list-style: none;
    overflow: hidden;
    width: 80%;
    margin: auto;
  }

  #my_base ul li {
    float: left;
    text-align: left;
    margin: 5px 10px;
  }

  #my_base ul li i {
    display: inline-block;
    background: url(../../../assets/img/resume/icons_resume.png) -53px -6px no-repeat;
    margin-right: 5px;
    vertical-align: middle;
    width: 13px;
    height: 13px;
    background-position: -111px -70px;
  }

  #my_base ul li .tel_i {
    background-position: -131px -70px;
    width: 12px;
    height: 14px;
  }

  #my_base ul li .email_i {
    width: 14px;
    height: 10px;
    background-position: -150px -73px;
  }

  .el-select {
    width: 100%;
  }
</style>

<script>
  export default{
    data: function () {
      return {
        slogan: '一句话介绍自己，告诉我为什么选择你而不是别人',
        baseInfo: {
          gender: '女',
          age: '27',
          birth: '1990-08-03',
          edu: '本科',
          exprience: '5年',
          base: '杭州',
          tel: '13067885351',
          email: '13067885351@163.com',
          region: 'web前端开发工程师 · 杭州天与佳科技有限公司',
          birth:'1990-07',

        },
        regionData: [
          { name: '自动化.沈阳理工大学', value: '自动化.沈阳理工大学'},
          { name: 'web前端开发工程师 · 杭州天与佳科技有限公司', value: 'web前端开发工程师 · 杭州天与佳科技有限公司'}
           ],
        genderData:[
          { name: '男', value: '男'},
          { name: '女', value: '女'}
        ],
        eduData:[
          { name: '大专', value: '大专'},
          { name: '本科', value: '本科'},
          { name: '硕士', value: '硕士'},
          { name: '博士', value: '博士'},
          { name: '其他', value: '其他'},
        ],
        expData:[
          { name: '应届毕业生', value: '0'},
          { name: '1年', value: '1'},
          { name: '2年', value: '2'},
          { name: '3年', value: '3'},
          { name: '4年', value: '4'},
          { name: "5年", value: '5'},
          { name: "6年", value: '6'},
          { name: "7年" , value: '7'},
          { name: "8年", value: '8'},
          { name: "9年", value: '9'},
          { name: "10年", value: '10'},
          { name: "10年以上" , value: '11'},
        ],
        baseInfoEditable: false,
        baseInfoEditMode: false,
        sloganEditable: false,
        sloganEditMode: false,
      }
    },
      methods: {
        showEdit: function (tag) {
          console.log("show------");
          if (tag == 1) {
            if (!this.sloganEditMode) {
              this.sloganEditable = true;
            }
          } else if (tag == 2) {
            if (!this.baseInfoEditMode) {
              this.baseInfoEditable = true;
            }


          }
        }
      ,
        hiddenEdit: function (tag) {
          console.log("hidden------");
          if (tag == 1) {
            if (!this.sloganEditMode) {
              this.sloganEditable = false;
            }
          } else if (tag == 2) {
            if (!this.baseInfoEditMode) {
              this.baseInfoEditable = false;
            }
          }

        }
      ,
        showSloganEditMode: function () {
          this.sloganEditMode = !this.sloganEditMode;
          //this.sloganEditable = false;
        }
      ,
        showSloganPreviewMode: function () {
          this.sloganEditMode = false;
        }
      ,
        UpdateSlogan: function () {
          this.sloganEditMode = false;
        }
      ,
        showBaseInfoEditMode: function () {
          this.baseInfoEditMode = true;
          //this.baseInfoEditable = false;
        }
      ,
        showBaseInfoPreviewMode: function () {
          this.baseInfoEditMode = false;
        }
      ,
        UpdateBaseInfo: function () {
          this.baseInfoEditMode = false;
        }
      ,
      }
      ,
      mounted()
      {
      }
    }
</script>
