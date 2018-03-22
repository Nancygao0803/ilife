<template>
    <div>
      <div id="self" class="item_container">
        <div id="self_head" class="item_head">
          <span class="head_line item_head_line_left"></span>
          <span class="item_head_title">自我描述</span>
          <span class="head_line item_head_line_right"></span>
          <div style="float: right;margin-right: 20px;">
            <el-button type="text" icon="el-icon-circle-plus-outline" class="item_head_btn"
                       v-on:click="showSelfEditMode()">{{selfEditText}}
            </el-button>
          </div>
        </div>
        <div v-if="selfEditMode">
          <div style="color: #aaa;font-size: 14px;text-align: start">
            <p>提供几个思路，试着从这些点描述自己：</p>
            <ul>
              <li>你认为值得称道的工作细节；</li>
              <li>你曾经克服过的最大挑战；</li>
              <li>你在找工作时最看重的方面；</li>
              <li>你曾经引以为豪的个人项目或者事迹；</li>
              <li>如果你是一位团队领导者，说说你的管理哲学以及独到的行业见解</li>
              <li>其它你认为能展示你优势的事情</li>
            </ul>
          </div>
          <el-form :label-position="top" ref="form" :model="selfData" label-width="80px">

            <el-form-item label="自我描述" prop="desc">
              <el-input type="textarea" v-model="selfData"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-on:click="UpdateSelf()">保存</el-button>
              <el-button v-on:click="showSelfEditMode(-1)">取消</el-button>
            </el-form-item>
          </el-form>

        </div>
        <div id="self_content" class="item_content" style="margin: 40px;text-align: start;">
          <div>{{selfData}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default{
        data: function () {
            return {
              selfEditMode: false,
              selfEditText: '编辑',
              selfData:'我的自我评价本文'
            }
        },
        methods: {
          showSelfEditMode: function () {
            this.selfEditMode = !this.selfEditMode;
            this.selfEditText = this.selfEditText == '编辑' ? '取消' : '编辑';
          },
          UpdateSelf: function () {
            this.selfEditMode = false;
            this.selfEditText = '编辑';
          },
        },
        mounted(){
        }
    }
</script>
