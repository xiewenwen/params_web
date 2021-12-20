<template>
  <div class="text-style">
    <el-button class="btnstyle" type="primary" plain size="mini" @click="trans2"
      >参数转换</el-button
    >
    <el-button type="primary" plain size="mini" @click="trans"
      >参数转换2</el-button
    >
    <!-- <el-button   type="primary" plain size="mini" @click="getpart"
      >解构</el-button
    > -->

    <el-input
      type="textarea"
      :rows="5"
      placeholder="参数模版输入"
      v-model="params"
    >
    </el-input>

    <div v-for="(param, i) in noramlData.params" :index="param" :key="i">
      <el-descriptions
        style="height: auto; width: 500px; margin-top: 10px"
        class="margin-top"
        :column="1"
        size="mini"
        border
      >
        <el-descriptions-item>
          <template slot="label"> 参数名 </template>
          {{ i }}
        </el-descriptions-item>
        <!-- <el-descriptions-item>
      <template slot="label">
       
        操作
      </template>
      <a>解构</a>
    </el-descriptions-item> -->
        <el-descriptions-item>
          <template slot="label"> 参数值 </template>
          {{ param }}
        </el-descriptions-item>
      </el-descriptions>

      <!-- <el-collapse style="width:500px" v-show="typeof(param)==='object'" v-model="activeNames" @change="handleChange">
    
  <el-collapse-item v-for="(p,i) in param" :key="i" :title="i+''" :name="i">
    <div>{{p}}</div>
   
  </el-collapse-item>
</el-collapse> -->
      <!-- <ParamDetailEdit :paramValue="param" :paramName="i"></ParamDetailEdit> -->
    </div>
    <!-- <el-form
      :model="noramlData"
      ref="noramlData"
      label-width="100px"
      class="demo-ruleForm"
      style="width: 500px"
      size="mini"
    >
      <div class="paramStyle" v-for="(param, i) in noramlData.params" :index="param" :key="i">
        
         <div><span>{{i}}:</span>{{param}} <el-link type="primary" style="width:75px;height:14px">主要链接</el-link></div>

      </div>
  </el-form> -->
    <!-- <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >生成</el-button
        >
       
      </el-form-item> -->
  </div>
</template>

<script>
import axios from "axios";
// import qs from "qs";
// import ParamDetailEdit from './ParamDetailEdit.vue'

export default {
  name: "ParamTemplate",
  components: {
    // ParamDetailEdit
  },
  data() {
    return {
      params:
        '{"name":"xiewenwen","age":17,"hobbies":["eat","drink","sleep"],"rules":[{"sorce":100,"type":"effect"},{"sorce":80,"type":"complate"}]}',
      paramsList: {
        params: [],
        type: "",
      },
      formData: {
        paramsList: [],
      },
      noramlData: {
        params: [],
        type: "",
        only: true,
      },
      activeNames: ["1"],
    };
  },
  methods: {
    trans() {
      console.log("trans");
      axios
        .post("/transProps", this.params, {
          headers: { "Content-Type": "application/json" },
        })
        .then(
          (response) => {
            console.log(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
    },
    trans2() {
      console.log("trans2");
      axios
        .post("/tParams", this.params, {
          headers: { "Content-Type": "application/json" },
        })
        .then(
          (response) => {
            console.log(response.data);
            let data = response.data;
            this.noramlData.params = data.paramDetail;
            this.noramlData.type = data.type;
            this.noramlData.only = data.only;
            console.log("数据详情" + this.noramlData.params);
          },
          (error) => {
            console.log(error);
          }
        );
    },
    handleChange(val) {
      console.log(val);
    },
    // getpart(){
    //    while(typeof(value)==='object'){

    //     }

    //   for(let p in this.noramlData.params){
    //     console.log(p);
    //     let value=this.noramlData.params[p];

    //     console.log(value)

    //   }
    // },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
  },
};
</script>

<style>
.text-style {
  height: auto;
}
.paramStyle {
  height: 50px;
  width: 500px;
}
.btnstyle {
  margin-top: 5%;
  position: absolute;
}
</style>
