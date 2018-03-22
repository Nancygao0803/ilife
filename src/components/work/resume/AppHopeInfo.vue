<template>
    <div>
      <div id="hope" class="item_container">
        <div id="hope_head" class="item_head">
          <span class="head_line item_head_line_left"></span>
          <span class="item_head_title">期望工作</span>
          <span class="head_line item_head_line_right"></span>
          <div style="float: right;margin-right: 20px;">
            <el-button type="text" icon="el-icon-circle-plus-outline" class="item_head_btn"
                       v-on:click="showHopeEditMode()">{{hopeEditText}}
            </el-button>
          </div>
        </div>
        <div v-if="hopeEditMode">
          <el-form :inline="true" :label-position="top" ref="form" :model="baseInfo" label-width="80px;"
                   style="text-align: start">
            <el-form-item label="期望职位" prop="desc">
              <el-input v-model="hopeData.jobRole"></el-input>
            </el-form-item>

            <el-form-item label="">
              <el-select v-model="hopeData.jobType" placeholder="">
                <el-option  v-for="item in jobTypeData" :label="item.name" :value="item.value" :key="index"></el-option>
              </el-select>
            </el-form-item>
            <app-loc-selector></app-loc-selector>
            <el-form-item label="期望月薪">
              <el-select v-model="hopeData.jobSalary" placeholder="">
                <el-option  v-for="item in salaryData" :label="item.name" :value="item.value" :key="index"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="补充说明" prop="desc" style="display: block">
              <el-input type="textarea" v-model="hopeData.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-on:click="UpdateHope()">保存</el-button>
              <el-button v-on:click="showHopeEditMode(1)">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div id="hope_content" class="item_content hope_content" v-if="!hopeEditMode">
          <div class="sub_item work_item" style="overflow: hidden;margin:25px 20px;text-align: start">
            <ul>
              <li><i class="hope_jobrole"></i>{{hopeData.jobRole}}</li>
              <li><i class="hope_jobtype"></i>{{hopeData.jobType}}</li>
              <li><i class="hope_jobbase"></i>{{hopeData.jobBase}}</li>
              <li><i class="hope_jobsalary"></i>{{hopeData.jobSalary}}</li>
            </ul>
          </div>


        </div>
      </div>
    </div>
</template>

<script>
    export default{
        data: function () {
            return {
              hopeData: {
                jobRole: '前端',
                jobType: '全职',
                jobBase: '杭州',
                jobSalary: '10K-15K',
                desc:''
              },
              jobTypeData:[
                { name: '全职', value: '全职'},
                { name: '兼职', value: '兼职'},
                { name: '实习', value: '实习'},
              ],

              salaryData:[
                { name: '2k以下', value: '2k以下'},
                { name: '2k-5k', value: '2k-5k'},
                { name: '5k-10k', value: '5k-10k'},
                { name: '10k-15k', value: '10k-15k'},
                { name: '15k-25k', value: '15k-25k'},
                { name: '25k-50k', value: '25k-50k'},
                { name: '50k以上', value: '50k以上'},
              ],
              hopeEditMode: false,
              hopeEditText: '编辑',
            }
        },
        methods: {
          showHopeEditMode: function () {
            this.hopeEditMode = !this.hopeEditMode;
            this.hopeEditText = this.hopeEditText == '编辑' ? '取消' : '编辑';
          },
          UpdateHope: function () {
            this.hopeEditMode = false;
            this.hopeEditText = '编辑';
          },
        },
        mounted(){
        }
    }
</script>
