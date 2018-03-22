<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div class="login-wrap" v-show="showLogin">
      <h3>登录</h3>
      <p v-show="showMessage">{{Message}}</p>
      <!--ref="form" :model="form"-->
      <el-form>
        <el-form-item>
          <el-input type="text" placeholder="请输入用户名" v-model="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" placeholder="请输入密码" v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">立即创建</el-button>
        </el-form-item>
      </el-form>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>

    <div class="register-wrap" v-show="showRegister">
      <h3>注册</h3>
      <p v-show="showMessage">{{Message}}</p>
      <!--ref="form"-- :model="form_register"-->
      <el-form>
        <el-form-item>
          <el-input type="text" placeholder="请输入用户名" v-model="newUsername"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" placeholder="请输入密码" v-model="newPassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">注册</el-button>
        </el-form-item>
      </el-form>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
    </div>
  </div>
</template>

<style>
  .login-wrap {
    text-align: center;
  }

  .el-input {
    width: 250px;
  }

  p {
    color: red;
  }

  span {
    cursor: pointer;
  }

  span:hover {
    color: #41b883;
  }
</style>

<script>
  import {setCookie, getCookie} from '../assets/js/cookie.js'
  export default{
    data(){
      return {
        showLogin: true,
        showRegister: false,
        showMessage: false,
        Message: '',
        username: '',
        password: '',
        newUsername: '',
        newPassword: ''
      }
    },
    mounted(){
      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
      if (getCookie('username')) {
        this.$router.push('/home')
      }
    },
    methods: {
      login: function () {
        //setTimeout(function () {
          this.$router.push('/home')
       // }.bind(this), 1000)
        /*if (this.username == "" || this.password == "") {
          //this.Message="请输入用户名或密码";
          //this.showMessage=true;
          this.$message('请输入用户名或密码');
        } else {
          let data = {'username': this.username, 'password': this.password}
          /!*接口请求*!/
          this.$http.post('http://localhost:8080/admin/login.action?', data).then((res)=> {
            console.log(res)
            /!*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*!/
            if (res.data == -1) {
              this.Message = "该用户不存在"
              this.showMessage = true
            } else if (res.data == 0) {
              this.Message = "密码输入错误"
              this.showMessage = true
            } else if (res.data == 'admin') {
              /!*路由跳转this.$router.push*!/
              this.$router.push('/main')
            } else {
              this.Message = "登录成功"
              this.Message = true
              setCookie('username', this.username, 1000 * 60)
              setTimeout(function () {
                this.$router.push('/home')
              }.bind(this), 1000)
            }
          })
        }*/
      },
      register: function () {
        if (this.newUsername == "" || this.newPassword == "") {
          alert("请输入用户名或密码")
        } else {
          let data = {'username': this.newUsername, 'password': this.newPassword}
          this.$http.post('http://localhost/vueapi/index.php/Home/user/register', data).then((res)=> {
            console.log(res)
            if (res.data == "ok") {
              this.Message = "注册成功"
              this.showMessage = true
              this.username = ''
              this.password = ''
              /*注册成功之后再跳回登录页*/
              setTimeout(function () {
                this.showRegister = false
                this.showLogin = true
              }.bind(this), 1000)
            }
          })
        }
      },
      ToRegister: function () {
        this.showLogin = false;
        this.showRegister = true;
      },
      ToLogin: function () {
        this.showLogin = true;
        this.showRegister = false;
      }
    }
  }
</script>
