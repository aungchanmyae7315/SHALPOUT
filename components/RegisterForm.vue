i
<template>
  <div class="register_form">
    
    <v-form
      ref="form"
      @submit.prevent="EnterPhone"
      v-model="valid" 
      lazy-validation
      v-if="active === 1"
      
    >   
    <h1>{{ $t('အချက်အလက်ဖြည့်ပါ') }}</h1>
     <p>{{ $t('loginName') }}</p>
         <v-text-field
          variant="solo"
          v-model="user_name"
          :placeholder="$t('loginName')" 
          :rules="[v => !!v || 'User Name is required']"
          required
          ></v-text-field>
          <p>{{ $t('loginPhone') }}</p>
          <v-text-field
          variant="solo"
          v-model="phone"
          :placeholder="$t('loginPhone')" 
          :rules="[v => !!v || 'Phone Number is required']"
          required
          ></v-text-field>
        <!-- <el-form-item prop="user_name" :rules="[{ required: true, message:'Please Enter User Name' }]">
                <label for="">User Name</label>
                <el-input size="large" label="User Name" type="user_name" placeholder="User Name" v-model="ruleForm.user_name" autocomplete="off">
                </el-input>
            </el-form-item>
            <el-form-item prop="phone" :rules="[{ required: true, message:'Please Enter Phone Number' }]">
        <label for="">Phone</label>
        <el-input label="" size="large" type="phone" placeholder="Enter Phone Number" v-model="ruleForm.phone" autocomplete="off">
        </el-input>
      </el-form-item> -->

      <v-btn size="large" class="register_btn" :disabled="loading" :loading="loading" @click="EnterPhone"
        type="success">{{ $t('confirm') }}</v-btn>



    </v-form>
    <v-form
      ref="form"
      @submit.prevent="EnterOTP"
      v-model="valid" 
      lazy-validation
      v-if="active === 2"
      style="padding-top:50px;"
      
    >
      <!-- <v-text-field
          variant="solo"
          v-model="otp_code"
          label="OTP code" 
          pattern="/^-?\d+\.?\d*$/"
          :rules="[v => !!v || 'User Name is required']"
          required
        ></v-text-field> -->
        <div style="text-align: center;">
          <img style="width:100px;padding-bottom: 20px;" src="https://shalpout.com/static/media/shal_pout.4cf8032a60f50a460fbc.png"/>
        <p>{{ $t('verifyOtp') }}</p>
        <v-otp-input
        v-model="otp_code"
        :loading="loading"
        :disabled="loading" 
        length="6"
        variant="solo-filled"
      ></v-otp-input>

        <v-btn
          :disabled="otp_code.length < 6 || loading"
          class="register_btn"
          color="#000"
          size="large"
          variant="tonal"
          @click="EnterOTP"
          
        >{{ $t('confirm') }}</v-btn>
        </div>
       
     


    </v-form>
    <v-form
      ref="form"
      @submit.prevent="Register"
      v-model="valid" 
      lazy-validation
      v-if="active === 3"
      style="padding-top:50px;"
      
    > 
    <p>{{ $t('newpass') }}</p>
      <v-text-field
          variant="solo"
          v-model="password"
          :placeholder="$t('newpass')" 
          :rules="[v => !!v || 'Password is required']"
          required
          ></v-text-field>
      <p>{{ $t('conpass') }}</p>
          <v-text-field
          variant="solo"
          v-model="confirm_password"
          :placeholder="$t('conpass')" 
          :rules="[v => !!v || 'Confirm Password is required']"
          required
          ></v-text-field>
      <!-- <el-form-item prop="password" :rules="[{ required: true, message:'Please Enter Password' }]">
        <label for="">Password</label>
        <el-input size="large" label="" type="otp" placeholder="Enter Password" v-model="ruleForm.password" autocomplete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="confirm_password" :rules="[{ required: true, message:'Please Enter Confirm Password' }]">
        <label for="">Confirm Password</label>
        <el-input size="large" label="" type="otp" placeholder="Enter Confirm Password" v-model="ruleForm.confirm_password" autocomplete="off">
        </el-input>
      </el-form-item> -->

      <v-btn size="large" class="register_btn" :disabled="loading" :loading="loading" @click="Register"
        type="success">{{ $t('confirm') }}</v-btn>



    </v-form>
    <v-dialog
      
      v-model="RegisterDialog"
      width="300"
      class="logindialog"
    >
      <v-card>
        <v-card-text>
          <v-icon size="large">mdi-check-circle-outline</v-icon>
         <h1 style="color:green;font-weight: bold;">Success</h1>
         <p>Register Successful!</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="goHome">Welcome</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      
      v-model="errorDialog"
      width="300"
      class="errordialog"
    >
      <v-card>
        <v-card-text>
          <v-icon size="large">mdi-close-circle-outline</v-icon>
         <h1 style="color:#545454;font-weight: bold;">Sorry !</h1>
         <p>Validation Error.</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="errorDialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
  
<script>
  import { useStore } from '~/store/state';
export default {
  data() {
    return {
      store : useStore(),
      active: 1,
      loading: false,
      otp: '',
      RegisterDialog:false,
      errorDialog:false,
      valid:false,
      loading: false,
      payment_type: '',
      user_name: '',
        phone: '',
        otp_code:'',
        payment_type: '',
        bank_acc_name: '',
        bank_acc_number: '',
        password: '',
        confirm_password: '',
    }
  },
  mounted() {
    console.log(this.active,'active')

  },
  methods: {
    goHome() {
      this.RegisterDialog = false
      this.$router.push('/');
      // if (process.client) {
      //   window.location.reload();
      // }
    },
    onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
        }, 2000)
      },
    async EnterPhone () {
          const { valid } = await this.$refs.form.validate()

             if (valid) {
              this.loading = true
            $fetch('/sent_otp', {
              params: {
                type:"register",
                phone: this.phone.replace(/[^\d]/g, ""),
            },
            method:'post',
            baseURL:'https://backend.shalpouts.com/api'
          })
   
           
            .then((response) => {

              console.log(response, 'sent otp success')
              if(response.status == 'success') {
                this.loading = false
                  
                this.active = 2
              }else {
                this.loading = false
                this.$snackbar.add({
                  type: 'warning',
                  text: 'Error Otp'
              })
              }


            })
            .catch((error) => {
              console.log(error)
            });
          // console.log(formData, 'formdata')
          // this.$axios
          //   .post("https://backend.shalpouts.com/api/sent_otp", formData, {
          //     headers: {
          //       "Content-Type": "multipart/form-data",
          //     },
          //   })
          //   .then((response) => {
          //     console.log(response, 'sentotp')
          //     if (response.data.status == 'success') {
          //      if (this.active++ > 2) this.active = 0;
          //     }
          //     /* setInterval,clearInterval*/
          //   })
          //   .catch((error) => {
          //     this.submitted = false;
          //     console.log(error);
          //   });
          //if (this.active++ > 2) this.active = 0;
        } else {
          console.log("error submit!!");
          return false;
        }
    
    },
    async EnterOTP () {
          const { valid } = await this.$refs.form.validate()

             if (valid) {
              this.loading = true
            $fetch('/check_otp', {
              params: {
                type:"register",
                phone: this.phone.replace(/[^\d]/g, ""),
                otp_code: Number(this.otp_code)
            },
            method:'post',
            baseURL:'https://backend.shalpouts.com/api'
          })
  
           
            .then((response) => {

              console.log(response, 'check otp success')
              if(response.status == 'success') {
                this.loading = false
                this.active = 3
                
              }else {
                this.loading = false
                this.errorDialog = true
              }


            })
            .catch((error) => {
              this.$snackbar.add({
                  type: 'warning',
                  text: error
              })
            });
          // this.$axios.post("https://backend.shalpouts.com/api/check_otp", {
          //   type:"register",
          //   phone: this.ruleForm.phone.replace(/[^\d]/g, ""),
          //   otp_code: Number(this.ruleForm.otp_code)
          // })
          //   .then((response) => {

          //     console.log(response, 'register success')
          //     if(response.data.status == 'success') {
          //       if (this.active++ > 2) this.active = 0;
          //     }


          //   })
          //   .catch((error) => {
          //     this.$message({
          //       showClose: true,
          //       message: error,
          //       type: "warning",
          //       duration: 2000,
          //     });
          //   });
          //

          //if (this.active++ > 2) this.active = 0;
        } else {
          console.log("error submit!!");
          return false;
        }

    },
    async Register () {
          const { valid } = await this.$refs.form.validate()

             if (valid) {
              this.loading = true
              if(this.password == this.confirm_password) {
                $fetch('/register', {
              params: {
                name:this.user_name,
                phone: this.phone.replace(/[^\d]/g, ""),
                password: this.password
            },
            method:'post',
            baseURL:'https://backend.shalpouts.com/api'
          })

            .then((response) => {

              console.log(response, 'register success')
              if(response.status == 'success') {
                this.loading = false
                this.RegisterDialog = true
                this.userInfo = response.message
                this.token = response.data.token
                console.log(this.token)
                console.log(this.userInfo)
                const state = useState();
               console.log(state,'//////////')
            
                 this.store.accessToken(this.token)
                 this.store.logIn(this.userInfo)
                  //this.$router.push('/games');
              }else {
                this.loading = false
                this.errorDialog = true
              }


            })
            .catch((error) => {
              this.$snackbar.add({
                  type: 'error',
                  text: error
              })
              if (this.active++ > 2) this.active = 0;
            });
              }else {
                this.$snackbar.add({
                  type: 'error',
                  text: 'pls check your password'
              })
                if (this.active++ > 2) this.active = 0;
              }
           
          }else {
            console.log('error sumit')
          }
         
          //

          //if (this.active++ > 2) this.active = 0;
     
        }
  },
};
</script>
  
<style>
.register_form h1 {
  color: #ffc107;
  font-weight: bold;
  padding-bottom: 30px;
}

.register_form {
  border-radius: 10px;
  margin: 0 auto;
  max-width: 500px;
  position: relative;
  text-align: center;
  padding: 10px 20px 40px 20px;
}

.register_form label {
  color: #c59607;
  float: left;
  margin: 0;
  font-size: 16px;
}

.register_form .el-input--large .el-input__wrapper {
  background-color: #000;
  border: 2px solid #00640a;
  color: #fff;
}
.register_form .el-input--large .el-input__inner {
  color: #fff;
}
.payment_type_select {
  width: 100%;
  margin-bottom: 10px;
}

.register_form .login_logo {
  width: 35%;
}

.register_form .el-form-item {
  margin-left: 0 !important;
  margin-bottom: 10px;
}

.el-form-item__content {
  margin-left: 0 !important;
}

.register_form .el-form-item svg {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  color: #000;
}

.register_btn {
  width: 100%;
  font-weight: bold;
  background: linear-gradient(180deg, #f6ce07 10%, #e2bf0c 100.01%);
  border: 1px solid #ffd52e;
  border-radius: 20px;
  margin-top: 20px;
  color:#000 !important;
}

.register_btn:hover {
  background: linear-gradient(180deg, #a48905 10%, #657408 100.01%);
  border: 1px solid #ffd52e;
}

.register_form .el-button+.el-button {
  margin: 0;
  font-size: 16px;
}
.register_form p {
  color:#fff;
}
</style>
  