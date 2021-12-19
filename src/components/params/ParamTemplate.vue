<template>
  <div class="text-style">
    <el-input
      type="textarea"
      :rows="8"
      placeholder="参数模版输入"
      v-model="params"
    >
    </el-input>
    <el-button type="primary" plain size="mini" @click="trans"
      >参数转换</el-button
    >
    <el-form
      :model="formData"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      style="width: 500px"
      size="mini"
    >
      <div v-for="(p, i) in formData.paramsList" :index="p" :key="i">
        <!-- {{ i }}<el-input v-model="paramsList[i]"></el-input> -->
        <div v-show="p.type === 'array'">
          <div v-for="(pa, i) in p" :key="i">
            <el-input v-model="p[i]"></el-input>
            <div>{{ i }}----{{ pa }}</div>
            <!-- <div v-show="p.type === array">
            <div>数据类型：{{ p.type }}</div>
            <div>{{ i }}----{{ pa }}</div>
          </div> -->
          </div>
        </div>

        <!-- {{ p }} -->
      </div>
      <!-- <div v-for="(params, i) in paramsList" :key="i">
        <div>{{ params.type }}+{{ params[i] }}</div>
      </div> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >生成</el-button
        >
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
// import qs from "qs";
export default {
  name: "ParamTemplate",
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
    };
  },
  methods: {
    trans() {
      console.log("tranlate param" + JSON.stringify(this.params));
      //   let a = this.params.replace('"', $quot);
      axios
        .post("/transParams", {
          params: this.params,
        })
        .then(
          (response) => {
            this.paramsList = response.data;
            console.log(this.paramsList);
            for (let p in this.paramsList) {
              console.log(p);
              let lastp = JSON.parse(this.paramsList[p]);
              console.log(lastp.type);
              console.log(lastp);
              this.formData.paramsList.unshift(lastp);
              //   console.log(console.log(this.paramsList[p].type));
            }
          },
          (error) => {
            console.log(error);
          }
        );
    },
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
</style>
