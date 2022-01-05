<template>
  <div style="width: 300px">
    <!-- c<h5>{{ paramValue.propName }}</h5> -->
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="参数名">
        <el-input v-model="paramValue.propName"></el-input>
      </el-form-item>
      <el-form-item label="参数值">
        <el-input v-model="sizeForm.value"></el-input>
      </el-form-item>
      <el-form-item label="是否多值">
        <el-radio-group v-model="sizeForm.resource" size="mini">
          <el-radio border label="是"></el-radio>
          <el-radio border label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item size="mini">
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ParamDetailEdit",
  props: ["paramName", "paramValue"],
  data() {
    return {
      sizeForm: {
        name: "",
        value: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      se:{},
      myArr:[23,343,565]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
  mounted() {
    // this.sizeForm.name=this.paramName;
    // this.sizeForm.value=this.paramValue;
    console.log("data is" + this.paramValue.propName);
    console.log(this.paramName);
    let mySet=new Set(this.myArr);
    se=new Set();
    se.add("mytet");
    mySet.add(67);
    mySet.add("test");
    console.log(se.size);
    console.log(mySet.size);
    // 用...(展开操作符)操作符将Set转换为Array
    console.log([...mySet]);
  },
};
</script>

<style></style>
