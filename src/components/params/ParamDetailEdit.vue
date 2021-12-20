<template>
<div>
    <h2>{{paramName}}</h2>
<el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
  <el-form-item label="参数名">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item label="参数值">
    <el-input v-model="sizeForm.value"></el-input>
  </el-form-item>
  <el-form-item label="是否多值">
    <el-radio-group v-model="sizeForm.resource" size="medium">
      <el-radio border label="是"></el-radio>
      <el-radio border label="否"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item size="large">
    <el-button type="primary" @click="onSubmit">保存</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
    name:"ParamDetailEdit",
    props:['paramName,paramValue'],
     data() {
      return {
        sizeForm: {
          name: '',
          value: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    mounted(){
        this.sizeForm.name=this.paramName;
        this.sizeForm.value=this.paramValue;
        // console.log('data is'+this.data);
    }
}
</script>

<style>

</style>