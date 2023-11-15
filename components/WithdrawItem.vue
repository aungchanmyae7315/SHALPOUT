<template>
    <main class="withdraw">



        <el-row class="profile_btns">
            <el-col :span="8">
                <nuxt-link type="text" to="/topup">
                    <el-button class="deposit_btn">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wallet"
                            class="svg-inline--fa fa-wallet " role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z">
                            </path>
                        </svg>
                        <h6>Deposit</h6>
                    </el-button>
                </nuxt-link>
            </el-col>
            <el-col :span="8">
                <nuxt-link type="text" to="/withdraw">
                    <el-button class="withdrawal_btn">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="right-from-bracket"
                            class="svg-inline--fa fa-right-from-bracket " role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z">
                            </path>
                        </svg>
                        <h6>Withdraw</h6>
                    </el-button>
                </nuxt-link>
            </el-col>
            <el-col :span="8">
                <nuxt-link type="text" to="/history">
                    <el-button class="history_btn">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock-rotate-left"
                            class="svg-inline--fa fa-clock-rotate-left " role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z">
                            </path>
                        </svg>
                        <h6>History</h6>
                    </el-button>
                </nuxt-link>
            </el-col>
            <!-- <div style="padding:0 5px">
                <el-button type="text" class="show_only_deposit">
                    <h4>Deposit</h4>
                </el-button>
            </div> -->

        </el-row>
        <el-card v-if="active == 1" class="bank_card">
            <el-row v-for="bank in banks" :key="bank">
                <div class="" @click="bankOff(bank.type)">
                    <el-radio class="bank_detail" v-model="selectBank" :label="bank">
                        <el-col :span="20" style="text-align: left;">
                            <div class="">
                                <img :src="bank.bank_image" alt class="" />
                                <span class="bank_name">{{ bank.type }}</span>

                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="check_icon_btn">
                                <i v-if="selectBank.type == bank.type" class="el-icon-success"></i>
                                <i v-else class="el-icon-remove-outline"></i>
                            </div>
                        </el-col>
                    </el-radio>
                </div>
            </el-row>
            <el-button class="selectBank_btn" @click="selectBank_btn('ruleForm')" type="success">Withdraw</el-button>
        </el-card>

        <el-card class="bankinfo" v-if="active == 2">
            <img :src="selectBank.bank_image" alt="" style="margin-bottom:20px;">
        
            <el-form @submit.native.prevent :model="ruleForm" ref="ruleForm" class="demo-ruleForm">

                <p style="text-align: left;">{{ $t('Account Name') }}</p>
                <el-form-item prop="account_name" :rules="[{ required: true, message: $t('account_name_required') }]"
                    class="tran_input">

                    <el-input ref="test" type="text" :placeholder="$t('Enter Account Name')"
                        v-model="ruleForm.account_name"></el-input>
                </el-form-item>
                <p style="text-align: left;">{{ $t('Account Number') }}</p>
                <el-form-item prop="account_number" :rules="[{ required: true, message: $t('account_number_required') }]"
                    class="tran_input">

                    <el-input ref="test" type="text" :placeholder="$t('Enter Account Number')"
                        v-model="ruleForm.account_number"></el-input>
                </el-form-item>
                <p style="text-align: left;">{{ $t('Withdraw Amount') }}</p>
                <el-form-item prop="tran_amount" :rules="[{ required: true, message: $t('amount_required') }]"
                    class="tran_input">

                    <el-input ref="test" type="text" :placeholder="$t('Enter transferred amount')"
                        v-model="ruleForm.tran_amount"></el-input>
                </el-form-item>





                <el-row>
                    <el-radio-group v-model="radio_amount" size="medium" class="swipe_button1" @change="select_amount">
                        <el-radio-button label="5000">5,000</el-radio-button>
                        <el-radio-button label="10000">10,000</el-radio-button>
                        <el-radio-button label="50000">50,000</el-radio-button>
                        <el-radio-button label="100000">100,000</el-radio-button>
                        <el-radio-button label="200000">200,000</el-radio-button>
                        <el-radio-button label="500000">500,000</el-radio-button>
                    </el-radio-group>
                </el-row>


            </el-form>
            <div class="btn_group">
                <el-button class="cancel_btn" @click="cancel()" type="info">Back</el-button>
                <el-button class="selectBank_btn" @click="WithdrawSubmit('ruleForm')" type="success">Confirm</el-button>
            </div>
           
        </el-card>

        <!--       
            <el-row class="deposit_inputs">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px"
                    class="demo-ruleForm">
                    <el-col :span="5">
                        <el-form-item prop="phone" :rules="[{ required: true, message: 'Please Enter Phone Number' }]">
                            <el-input label="Phone Number" type="phone" placeholder="Phone Number" v-model="ruleForm.phone"
                                autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item prop="bank_name" :rules="[{ required: true, message: 'Please Enter Bank Name' }]">
                            <el-input label="" type="text" placeholder="Enter Bank Name" v-model="ruleForm.bank_name"
                                autocomplete="off"> </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item prop="amount" :rules="[{ required: true, message: 'Please Enter Amount' }]">
                            <el-input label="" type="text" placeholder="Enter Amount" v-model="ruleForm.amount"
                                autocomplete="off">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item prop="tran_number"
                            :rules="[{ required: true, message: 'Please Enter Transaction Number' }]">
                            <el-input label="" type="text" placeholder="Enter Transaction Number"
                                v-model="ruleForm.tran_number" autocomplete="off"> </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-button class="deposit_btn" :loading="login_loading" @click="slipUpload('ruleForm')"
                         type="success">Confirm</el-button>
                    </el-col>

                </el-form>
               
            </el-row> -->




    </main>
</template>

<script>
// import ProfileDetail from '~/components/ProfileDetail';
export default {

    components: {
        // ProfileDetail,
        // TheFooter
    },
    mounted() {
        let token = localStorage.getItem("token");
        if (token) {
            this.$axios
                .get("profile", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
                .then((response) => {
                    this.profile = response.data.data;
                    this.$store.commit("profile", this.profile)
                    console.log(response, 'profile api')

                })
            this.$axios
                .get("bank_api", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
                .then((response) => {
                    console.log(response, 'bank api')
                    this.banks = response.data.data

                })
        }

    },
    data() {
        return {
            active: 1,
            percentage: 0,

            radio_amount: '',
            title: 'Deposite',
            selectBank: '',
            banks: [],
            ruleForm: {
                account_name: '',
                account_number: '',
                tran_amount: '',
            },

        }
    },
    head() {
        var lang = localStorage.getItem('locale')
        if (lang == 'en') {
            var url = 'https://www.bkk2d.com/sitemap/'
        } else {
            var url = 'https://www.bkk2d.com/sitemap/'
        }
        return {
            title: this.title,
            meta: [
                {
                    hid: 'Shal Pout',
                    name: 'Shal Pout',
                    content: 'Shal Pout'
                },

            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/images/bkk2d.png', defer: true },
                { rel: 'canonical', href: url }
            ]
        }
    },
    methods: {
        selectBank_btn() {
            if(this.selectBank) {
                if (this.active++ > 1) this.active = 2;
            }else {
                this.$message({
                showClose: true,
                message: "Please Select A Bank",
                type: "warning",
                duration: 2000,
                });
            }
            
        },
        select_amount() {
            this.ruleForm.tran_amount = ''
            this.ruleForm.tran_amount = this.radio_amount
        },
        copyTestingCode(selectBank) {
            this.$message({
                message: this.$t("copy_success"),
                position: "top",
                showClose: true,
            });
            console.log(selectBank, 'leee pal')
            let testingCodeToCopy = document.querySelector("#code" + selectBank);
            testingCodeToCopy.setAttribute("type", "text");
            testingCodeToCopy.setAttribute("readonly", true);
            testingCodeToCopy.select();
            this.$message({
                message: this.$t("copy_success"),
                position: "top",
                showClose: true,
            });
            try {
                var successful = document.execCommand("copy");
                var msg = successful ? "successful" : "unsuccessful";

            } catch (err) {
                alert("Oops, unable to copy");
            }
            testingCodeToCopy.setAttribute("type", "hidden");
            if(process.client){
            window.getSelection().removeAllRanges();
            }
        },
        cancel() {
            if (this.active-- > 1) this.active = 1;
        },
        WithdrawSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.submitted = true;
                    let token = localStorage.getItem("token");
                    let profile = JSON.parse(localStorage.getItem('profile'))
                    var data_deposit = {

                        phone:profile.phone,
                        account_name:this.ruleForm.account_name,
                        account_number:this.ruleForm.account_number,
                        bank_name: this.selectBank.type,
                        amount: this.ruleForm.tran_amount,

                    }
                    console.log(data_deposit, '?????????/')

                    if (token) {
                        this.$axios
                            .post("wallet_withdraw", data_deposit, {
                                headers: {
                                    Authorization: "Bearer " + token,
                                },
                            })


                            .then((response) => {

                                console.log(response, 'register success')
                                if (response.data.status == 'success') {
                                    this.$message({
                                    showClose: true,
                                    message: "Topup Success",
                                    type: "success",
                                    duration: 2000,
                                    });
                                    if (this.active-- > 1) this.active = 1;
                                    this.selectBank = '';
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
}
</script>

<style >
.bank_detail {
    align-items: center;
    background-color: #ddd;
    margin: 20px auto;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    padding: 10px;

}

.bank_detail .el-radio__inner {
    display: none;
}

.bank_detail .check_icon_btn {
    font-size: 25px;
    position: relative;
    top: 4px;
    text-align: right;
}

.bank_detail img {
    width: 60px;
    height: 60px;
    border-radius: 9px;

}

.bank_detail .el-radio__input.is-checked+.el-radio__label {
    font-weight: bold;
    color: #000;
}

.bank_detail.is-checked {
    border: 2px solid #05a11f;
}


.bank_detail .bank_item {
    padding-left: 30px;
    padding-top: 20px;

}

.bank_detail .bank_item svg {
    bottom: 5px;
    height: 20px;
    position: absolute;
    right: 5px;
    width: 20px;
}

.bank_img {
    width: 50px;
    height: 50px;
}

.profile_item {
    position: relative;
    align-items: center;
    background: linear-gradient(270deg, #1ca734, #b69439) !important;
    border: 1px solid #fbff00;
    border-radius: 150px 10px 10px 150px;
    box-shadow: 2px 2px 10px 3px;
    box-shadow: 1px 1px 5px #fcff31b2, -1px -1px 5px #259206a4;
    display: flex;
    gap: 3em;
    height: 180px;
    margin: 50px auto;

}

.profile_img {
    width: 250px;
    background: linear-gradient(45deg, #99a406, #05a11f);
    border: 5px solid;
    border-image: linear-gradient(45deg, #99a406, #05a11f) 5;
    border-radius: 50%;
    box-shadow: 0.5px 0.5px 10px #99a406, -0.5px -0.5px 10px #05a11f;
    height: 264px;
    outline: 10px solid transparent;
}

.user_logout svg {
    width: 23px;
    padding: 0 3px;
}

.user_logout .el-button span {
    position: relative;
    padding: 2px;
    bottom: 3px;
}

.profile_btns {
    padding: 20px 0;
    text-align: center;
}

.profile_btns svg {
    width: 22px;
    display: block;
}

.profile_btns .el-col-8 {
    padding: 0 5px;
}

.profile_btns .el-button {
    width: 100%;
    margin: 0 5px;
    text-align: -webkit-center;
}

.profile_btns .el-button h6 {
    margin: 0;
}

.profile_btns .show_only_deposit {
    width: 100% !important;
    padding: 12px 10px;
    margin-top: 8px;
    background-color: #ffc107;
    color: #000;
    font-weight: bold;
    border: 0;
    cursor: unset;
}

.profile_btns .show_only_deposit:active {
    border: 0 !important;
}

.profile_btns .deposit_btn {
    background-color: #fff;
    color: #000;
    border: 0;
}
.withdraw .profile_btns .withdrawal_btn {
    background-color: #ffc107;
    color: #000;
    border: 0;
}

.deposit_inputs .el-col {
    margin-right: 10px;
}

.deposit_btn {
    width: 100% !important;
}

.bank_card {
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
}

.selectBank_btn {
    position: relative;
    width: 100% !important;
    padding: 20px 10px;
    margin-top: 8px;
    background-color: #ffc107;
    color: #000;
    font-weight: bold;
    border: 0;
    cursor: pointer;

}

.bankinfo {
    position: relative;
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
}

.bankinfo img {
    width: 60px;
    height: 60px;
    display: block;
}

.bankinfo .swipe_button1 .el-radio-button__inner {
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    color: #fff;
    border: 1px solid #b8b8b8 !important;
    background-color: #393939;
}

.bankinfo .swipe_button1 {
    margin-top: 20px;
}

.bankinfo .swipe_button1 .el-radio-button {
    width: 33%;
    padding: 0 3px;
}

.bankinfo .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background-color: #05a11f !important;
    color: #fff;
    font-weight: bold;
    box-shadow: unset;
    border: 0;
}

.copy_bank_account {
    display: -webkit-box;
    background-color: #393939;
    color: #fff;
    margin: 15px auto;
    padding: 10px;
    border-radius: 13px;

}

.copy_bank_account p {
    margin: 0
}

.copy_bank_account .el-col-6 {
    padding-top: 10px;
}
.btn_group {
    margin-top:30px;
}
.btn_group .el-button {
    width:47% !important;
    padding:20px 10px !important;
}


</style>