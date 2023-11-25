i
<template>
    <div class="login_form">
      <img src="/images/logo.png" alt="" class="login_logo" />
      <h4>Play Game</h4>
      <v-form
      ref="form"
      @submit.prevent="Login"
      v-model="valid" 
      lazy-validation
      
    >
        
          <v-text-field
            prepend-icon="mdi-phone"
            variant="solo"
            v-model="phone"
            placeholder="Phone Number"
            :rules="[v => !!v || 'Phone Number is required']"
            required
          >
          <template v-slot:prepend-icon>        
          <v-icon icon="home" />
        </template>
        </v-text-field>
          <v-text-field
          
          prepend-icon="mdi-lock-outline"
          variant="solo"
            v-model="password"
            placeholder="Password" 
            :rules="[v => !!v || 'Password is required']"
            required
          >
          
        </v-text-field>

          <v-btn class="play_game_btn mt-1" size="large"  :disabled="loading" :loading="loading" @click="Login">{{ $t('playGame') }}</v-btn>
          <nuxt-link to="register">
            <v-btn class="register_btn mt-5" size="large" >{{$t('register') }}</v-btn>
          </nuxt-link>
         
          <v-btn class=" mt-5" value="text" outline size="large" type="text" >{{$t('forgetPass') }}</v-btn>
        </v-form>


        <v-dialog
      
      v-model="Dialog"
      width="300"
      class="logindialog"
    >
      <v-card>
        <v-card-text>
          <v-icon size="large">mdi-check-circle-outline</v-icon>
         <h1 style="color:green;font-weight: bold;">Success</h1>
         <p>Login Successful!</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="Dialog = false">Welcome</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
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
          <v-btn color="primary" block @click="RegisterDialog = false">Welcome</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script >
  import { useStore } from '~/store/state';
  export default {
   
    data() {
      return {
        loading:false,
        RegisterDialog:false,
        valid:false,
        Dialog:false,
        snackbar: false,
        store : useStore(),
        phone: '',
        phoneRules: [
           v => !!v || 'Phone is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        password: '',
      passwordRules: [
              v => !!v || 'Password is required',
              v => (v && v.length <= 6) || 'Name must be less than 10 characters'
      ],
      }
    },
    mounted() {
      this.updateIsLoggedIn();
        this.updateLang();
    
    },
    methods: {
      updateIsLoggedIn() {
          this.store.updateIsLoggedIn(this.hasUserInfo());
        },
        hasUserInfo() {
        return Boolean(localStorage.getItem("userInfo"));
        },
        updateLang() {
          
            this.store.updateLang(this.hasLang());
        },
        hasLang() {
            return Boolean(localStorage.getItem("locale"));
        },

        async Login () {
          const { valid } = await this.$refs.form.validate()

             if (valid) {
              this.loading = true
            $fetch('/login', {
              params: {
              phone: this.phone.replace(/[^\d]/g, ""),
              password: this.password
            },
            method:'post',
            baseURL:'https://backend.shalpouts.com/api'
          })
           
            .then((response) => {
              console.log(response, 'login success')
              if(response.message == 'success') {
                  this.RegisterDialog = true
                this.loading = false
                
                this.userInfo = response.message
                this.token = response.data.token
                console.log(this.token)
                this.Dialog = true

                console.log(this.Dialog,'/////////LoginDia')
                const state = useState();
                 console.log(state,'//////////')
                
                
                 this.store.accessToken(this.token)
                 this.store.logIn(this.userInfo)
                  this.$snackbar.add({
                    type: 'success',
                    text: response.message
                })
                // $store.commit("logIn", this.userInfo); 
                // this.store.commit("accessToken", this.token);
                this.$router.push('/games')
                // if (process.client) {
                //     window.location.reload();
                //   }
               
                
              }else {
                this.loading = false
                this.$snackbar.add({
                  type: 'warning',
                  text: response.message
              })
              }


            })
           
        } else {
          console.log("error submit!!");
          return false;
        }
      },

    },
  };
  </script>
  
  <style>
    .login_form {
      background-color: rgba(0,0,0,.5);
      border: 3px solid #c0c000;
      border-radius: 10px;
      margin: 50px auto;
      max-width: 500px;
      position: relative;
      text-align: center;
      padding:20px;
    }
    .login_form .login_logo {
      width:35%;
    }
    .login_form h4 {
      color:#fff;
      font-weight: bold;
      padding:10px 0;
    }
    .login_form .v-field__field {
      color:#000;
    }
 .login_form .v-field {
    background-color: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
   }
   .login_form  .v-input--center-affix .v-input__prepend {
    background-color: #fff;
    margin:0;
    color:#000;
    width:45px;
    padding:10px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
   }
   
   
    .play_game_btn , .register_btn {
      width:100%;
      color:#fff;
      font-weight: bold;
  
    }
    .play_game_btn {
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
    
  </style>
  