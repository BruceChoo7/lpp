<template>
    <div id="container">

      <main style="backgroundColor:yellow;height:550px">
        <div id="input">
          <el-input v-model="input" placeholder="用户账号" class="input"></el-input><br>
          <el-input v-model="input" placeholder="登录密码" class="input"></el-input>
        </div>
        <el-row>
          <el-button type="primary" round style="marginLeft:660px">登录</el-button>
        </el-row>
        


      </main>


      
    </div>
      
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style>
#container{
    box-sizing: border-box
  }
*{
    margin: 0;
    padding: 0;
  }
.input{
  width: 200px;
  margin-left: 600px;
}
</style>