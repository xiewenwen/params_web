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
        <el-descriptions-item>
          <template slot="label"> 参数值 </template>
          {{ param }}
        </el-descriptions-item>
      </el-descriptions>
    </div>

    <div v-for="(value, key) in pros" :key="key">
      <ParamDetailEdit :paramValue="value" :paramName="key"></ParamDetailEdit>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import qs from "qs";
import ParamDetailEdit from "./ParamDetailEdit.vue";

export default {
  name: "ParamTemplate",
  components: {
    ParamDetailEdit,
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
      pros: [],
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
            console.log("具体的参数" + response.data);
            let getdata = response.data;
            for (let value in getdata) {
              console.log(value);
              console.log(getdata[value]);
              //获得参数数组
              this.pros.unshift(getdata[value]);
            }
            console.log(this.pros);
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
