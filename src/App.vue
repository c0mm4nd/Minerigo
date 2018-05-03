<template>
  <div id="app" >

    <el-container>
      
      <el-aside width="300px">
        PoolLogo
        
      </el-aside>
      
      <el-container>
        <el-header>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">消息中心</el-menu-item>
            <el-menu-item index="3">订单管理</el-menu-item>
          </el-menu>  
        </el-header>
        
        <el-main>


        </el-main>
        
      </el-container>
    </el-container>  
  </div>

</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      config: {}
    }
  },
  mounted(){
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-size: 24px;
  /* font-family: Helvetica, sans-serif; */
  text-align: center;
}

  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
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
