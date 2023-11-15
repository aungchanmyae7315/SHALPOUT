i
<template>
    <div class="login_form">
      <img src="/images/logo.png" alt="" class="login_logo" />
      <h4>Play Game</h4>
      <el-form  :model="ruleForm" status-icon :rules="rules" ref="ruleForm" >
          <el-form-item prop="phone" :rules="[{ required: true, message:'Please Enter Phone Number' }]">
           
            <el-input label="" type="phone" placeholder="Enter Phone Number" v-model="ruleForm.phone" autocomplete="off">
            </el-input>
          </el-form-item>
        
          <el-form-item prop="password" :rules="[{ required: true, message:'Please Enter Password' }]">
           
            <el-input label="" type="otp" placeholder="Enter Password" v-model="ruleForm.password" autocomplete="off">
            </el-input>
          </el-form-item>
            <el-button class="play_game_btn" :loading="login_loading"  @click="Login('ruleForm')"  type="success">Play Game</el-button>
            <nuxt-link  to="/register">
            <el-button class="register_btn" type="success" >Register</el-button>
            </nuxt-link>
            <el-button class="forgot_btn" type="text">Forgot Passowrd ?</el-button>
            

        </el-form>
 
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        login_loading:false,
        ruleForm: {
          phone: '',
          password: '',
        },
      }
    },
    mounted() {

    
    },
    methods: {
      
      Login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
         
            this.submitted = true;
            this.$axios.post("https://backend.shalpouts.com/api/login", {
              phone: this.ruleForm.phone.replace(/[^\d]/g, ""),
              password: this.ruleForm.password
            })
            .then((response) => {

              console.log(response, 'register success')
              if(response.data.message == 'success') {
                alert('login success')
                this.userInfo = response.data
                this.token = response.data.success.token
                this.$store.commit("logIn", this.userInfo); 
                this.$store.commit("accessToken", this.token);
              }


            })
            .catch((error) => {
              this.$message({
                showClose: true,
                message: error,
                type: "warning",
                duration: 2000,
              });
            });
         
         
          //

          //if (this.active++ > 2) this.active = 0;
        } else {
          console.log("error submit!!");
          return false;
        }
      })
    },
    },
  };
  </script>
  
  <style>
    .login_form {
      background-color: rgba(0,0,0,.5);
      border: 3px solid #c0c000;
      border-radius: 10px;
      margin: 0 auto;
      max-width: 500px;
      position: relative;
      text-align: center;
      padding:20px;
      margin-top:80px;
    }
    .login_form .login_logo {
      width:35%;
    }
    .login_form h4 {
      color:#fff;
      font-weight: bold;
      padding:10px 0;
    }
    .login_form .el-form-item {
      margin-left:0 !important;
    }
    .el-form-item__content {
      margin-left:0 !important;
    }
    .login_form .el-form-item svg {
      position: absolute;
      top:0;
      right:0;
      padding:10px;
      color:#000;
    }
    .play_game_btn , .register_btn {
      width:100%;
      color:#fff;
      font-weight: bold;
  
    }
    .play_game_btn {
      margin-bottom: 20px;
      background:linear-gradient(180deg,#6ac600,#008f32);
      border: 3px solid #8f0;
      border-radius: 10px;
    }
    .login_form .register_btn {
      background: linear-gradient(140deg,#b98100,#00ae0f);
      border: 1px solid #f1c500;
      border-radius: 10px;
    }
    .forgot_btn {
      color:#fff;

    }
    .login_form .el-button+.el-button  {
      margin:0;
      font-size: 16px;
    }
  </style>
  