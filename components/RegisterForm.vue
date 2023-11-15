i
<template>
  <div class="register_form">
    <h1>Fill Information</h1>
    <el-form v-if="active === 1" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px"
      class="demo-ruleForm">
      <el-form-item prop="user_name" :rules="[{ required: true, message:'Please Enter User Name' }]">
                <label for="">User Name</label>
                <el-input label="User Name" type="user_name" placeholder="User Name" v-model="ruleForm.user_name" autocomplete="off">
                </el-input>
            </el-form-item>
            <el-form-item prop="phone" :rules="[{ required: true, message:'Please Enter Phone Number' }]">
        <label for="">Phone</label>
        <el-input label="" type="phone" placeholder="Enter Phone Number" v-model="ruleForm.phone" autocomplete="off">
        </el-input>
      </el-form-item>
      <!-- <label for="" style="margin-bottom:10px;">Choose Payment Type</label>
            <el-select class="payment_type_select" v-model="payment_type" placeholder="Choose Payment Type">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select> -->
      <!-- <el-form-item  prop="bank_acc_name">
                <label for="">Bank Account Name:</label>
                <el-input label="" type="Bank Account Name" placeholder="Bank Account Name" v-model="ruleForm.bank_acc_name" autocomplete="off">
                </el-input>
            </el-form-item>
            <el-form-item  prop="bank_acc_number">
                <label for="">Bank Account Number:</label>
                <el-input label="" type="Bank Account Number" placeholder="Bank Account Number" v-model="ruleForm.bank_acc_number" autocomplete="off">
                </el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
                <label for="">Password</label>
                <el-input type="password" placeholder="Password" v-model="ruleForm.password" autocomplete="off">
                </el-input>
            </el-form-item>
            <el-form-item label="" prop="confirm password">
                <label for="">Confirm Password</label>
                <el-input type="Confirm Password" placeholder="Confirm Password" v-model="ruleForm.confirm_password" autocomplete="off">
                </el-input>
            </el-form-item> -->

      <el-button class="register_btn" :loading="login_loading" @click="EnterPhone('ruleForm')"
        type="success">Confirm</el-button>



    </el-form>
    <el-form v-if="active === 2" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px"
      class="demo-ruleForm">
      <el-form-item prop="otp_code" :rules="[{ required: true, message:'Please Enter OTP Code' }]">
        <label for="">OTP</label>
        <el-input label="" type="otp" placeholder="Enter OTP" 
              pattern="/^-?\d+\.?\d*$/"
              onkeypress="if(this.value.length==6) return false;"
              v-model="ruleForm.otp_code" autocomplete="off">
        </el-input>
      </el-form-item>

      <el-button class="register_btn" :loading="login_loading" @click="EnterOTP('ruleForm')"
        type="success">Next</el-button>



    </el-form>
    <el-form v-if="active === 3" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px"
      class="demo-ruleForm">
      <el-form-item prop="password" :rules="[{ required: true, message:'Please Enter Password' }]">
        <label for="">Password</label>
        <el-input label="" type="otp" placeholder="Enter Password" v-model="ruleForm.password" autocomplete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="confirm_password" :rules="[{ required: true, message:'Please Enter Confirm Password' }]">
        <label for="">Confirm Password</label>
        <el-input label="" type="otp" placeholder="Enter Confirm Password" v-model="ruleForm.confirm_password" autocomplete="off">
        </el-input>
      </el-form-item>

      <el-button class="register_btn" :loading="login_loading" @click="Register('ruleForm')"
        type="success">Register</el-button>



    </el-form>

  </div>
</template>
  
<script>

export default {
  data() {
    return {
      active: 1,
      // options: [{
      //   value: 'Option1',
      //   label: 'Option1'
      // }, {
      //   value: 'Option2',
      //   label: 'Option2'
      // }, {
      //   value: 'Option3',
      //   label: 'Option3'
      // }, {
      //   value: 'Option4',
      //   label: 'Option4'
      // }, {
      //   value: 'Option5',
      //   label: 'Option5'
      // }],
      // value: '',

      login_loading: false,
      payment_type: '',
      ruleForm: {
        user_name: '',
        phone: '',
        otp_code:'',
        payment_type: '',
        bank_acc_name: '',
        bank_acc_number: '',
        password: '',
        confirm_password: '',
      },
    }
  },
  mounted() {


  },
  methods: {
    EnterPhone(formName) {

      this.$refs[formName].validate((valid) => {

        if (valid) {
          this.submitted = true;
          this.fullscreenLoading = true;
          let formData = new FormData();
          // formData.append("name", this.ruleForm.name);
          formData.append("phone", this.ruleForm.phone.replace(/[^\d]/g, ""));
          formData.append("type", 'register');
          // formData.append("user_name", this.ruleForm.user_name);
          // formData.append("payment_type", this.payment_type);
          // formData.append("bank_acc_name", this.ruleForm.bank_acc_name);
          // formData.append("bank_acc_number", this.ruleForm.bank_acc_number);
          // formData.append("password", this.ruleForm.password);
          // formData.append("confirm_password", this.ruleForm.confirm_password)
          // formData.append("countryName", this.results.countryCode);
          // // formData.append("profile", this.image);

          console.log(formData, 'formdata')
          this.$axios
            .post("https://backend.shalpouts.com/api/sent_otp", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log(response, 'sentotp')
              if (response.data.status == 'success') {
               if (this.active++ > 2) this.active = 0;
              }
              /* setInterval,clearInterval*/
            })
            .catch((error) => {
              this.submitted = false;
              console.log(error);
            });
          //if (this.active++ > 2) this.active = 0;
        } else {
          console.log("error submit!!");
          return false;
        }
      })
    },
    EnterOTP(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitted = true;
          this.$axios.post("https://backend.shalpouts.com/api/check_otp", {
            type:"register",
            phone: this.ruleForm.phone.replace(/[^\d]/g, ""),
            otp_code: Number(this.ruleForm.otp_code)
          })
            .then((response) => {

              console.log(response, 'register success')
              if(response.data.status == 'success') {
                if (this.active++ > 2) this.active = 0;
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
    Register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.ruleForm.password == this.ruleForm.confirm_password) {
            this.submitted = true;
            this.$axios.post("https://backend.shalpouts.com/api/register", {
              name:this.ruleForm.user_name,
              phone: this.ruleForm.phone.replace(/[^\d]/g, ""),
              password: this.ruleForm.password
            })
            .then((response) => {

              console.log(response, 'register success')
              if(response.data.status == 'success') {
                if (this.active++ > 2) this.active = 0;
              }else {
                this.$message({
                showClose: true,
                message: 'User Already Exit',
                type: "warning",
                duration: 2000,
              });
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
          }else {
            this.$message({
                showClose: true,
                message: 'Password mar nay par tal',
                type: "warning",
                duration: 2000,
              });
          }
         
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
.register_form h1 {
  color: #ffc107;
  font-weight: bold;
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

.register_form .el-input__inner {
  background-color: #000;
  border: 2px solid #00640a;
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
  color: #000;
  font-weight: bold;
  background: linear-gradient(180deg, #f6ce07 10%, #e2bf0c 100.01%);
  border: 1px solid #ffd52e;
  border-radius: 20px;
  margin-top: 20px;
  color: #000;

}

.register_btn:hover {
  background: linear-gradient(180deg, #a48905 10%, #657408 100.01%);
  border: 1px solid #ffd52e;
}

.register_form .el-button+.el-button {
  margin: 0;
  font-size: 16px;
}
</style>
  