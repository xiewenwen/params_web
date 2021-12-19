<template>
  <el-container>
    <el-header></el-header>
    <el-container>
      <el-aside width="200px"
        ><el-menu
          :default-active="$route.path"
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>接口参数</span>
            </template>
            <el-menu-item index="/paramTemplate">参数模版</el-menu-item>
            <el-menu-item index="/paramList">参数列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据构造</span>
            </template>
            <el-menu-item index="/paramList">构造列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Container",
  //   components: {
  //     Aside,
  //   },
  data() {
    return {
      router: "router",
      activePath: "/paramList",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #9ed3ae;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: white;
  color: #333;
  text-align: left;
  line-height: 200px;
}

.el-main {
  background-color: white;
  margin-top: 0px;
  padding-top: 0px;
  color: #333;
  text-align: left;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
