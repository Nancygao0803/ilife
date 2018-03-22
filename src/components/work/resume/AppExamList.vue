<template>
    <div>
      <div id="example" class="item_container">
        <div id="example_head" class="item_head">
          <span class="head_line item_head_line_left"></span>
          <span class="item_head_title">作品展示</span>
          <span class="head_line item_head_line_right"></span>
          <div style="float: right;margin-right: 20px;">
            <el-button type="text" icon="el-icon-circle-plus-outline" class="item_head_btn" v-on:click="showExampleEditMode(-1)">添加</el-button>
          </div>
        </div>
        <div v-if="examEditMode">
          <el-card class="box-card" style="background-color: #00b88d;color: #fff;" v-for="item in examplesData">
            <div slot="header" class="clearfix">
              <span>www.example.com</span>
            </div>
            <div style="font-size: 14px;">这里是你的作品描述</div>
          </el-card>
          <el-form :inline="true" :label-position="top" ref="form" :model="examItemCur" label-width="80px;"
                   style="text-align: start">
            <el-form-item label="作品地址" prop="desc">
              <el-input v-model="examItemCur.url"></el-input>
            </el-form-item>

            <el-form-item label="补充说明" prop="desc" style="display: block">
              <el-input type="textarea" v-model="examItemCur.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-on:click="UpdateExample()">保存</el-button>
              <el-button v-on:click="closeExampleEditMode()">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div id="example_content" class="item_content">
          <div class="sub_item work_item" v-for=" item in examplesData"
               style="overflow: hidden;margin:25px 20px;text-align: start;">
            <el-card class="box-card" style="background-color: #00b88d;color: #fff;" v-for="item in examplesData">
              <div slot="header" class="clearfix">
                <span>{{item.url}}</span>
                <el-button style="float: right; padding: 3px 0;color: #fff;" type="text" v-on:click="showExampleEditMode(item.id)">编辑</el-button>
              </div>
              <div style="font-size: 14px;">{{item.desc}}</div>
            </el-card>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default{
        data: function () {
            return {
              examplesData: [
                {'id':0,'url': 'nancy.gao.com', desc: '个人管理系统'}
              ],
              examEditMode:false,
              examEditText:'添加',
              examItemNew:{id:'','url':'',name:''},
              examItemCur:''
            }
        },
        methods: {
          showExampleEditMode:function(id) {
              if(id!=-1){
                this.examItemCur=this.examplesData[id];

              }
            this.examEditMode=!this.examEditMode;
            this.examEditText=this.examEditText='添加'?'取消':'添加';
        },
          closeExampleEditMode:function () {
            this.examItemCur=this.examItemNew;
            this.examEditMode=false;
            this.examEditText='添加';
          },
          UpdateExample:function () {
            this.examItemCur=this.examItemNew;
            this.examEditMode=false;
            this.examEditText='添加';
          }
    },
        mounted(){
      this.examItemCur=this.examItemNew;
        }
    }
</script>
