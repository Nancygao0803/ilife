<template>
    <div>
      <div id="work_content" class="item_content">
        <div class="sub_item work_item"  v-for=" item in workExprienceData" style="overflow: hidden;margin:25px 20px">
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
            <el-button type="text" icon="el-icon-edit" v-on:click="showSloganEditMode()"> 编辑</el-button>
            <div class="duration_text">{{item.duration}}</div>
          </div>
          <div class="item_left_botton" style="clear: both;text-align: end;color: #555;font-size: 14px;text-align: start">{{item.duty}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default{
        data: function () {
            return {
                msg: 'Hello ProductList',
            }
        },
        methods: {},
        mounted(){
        }
    }
</script>
