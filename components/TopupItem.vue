<template>
    <main class="topup">



        <v-row class="profile_btns">
            <v-col cols="4" lg="4">
                <nuxt-link type="text" to="/deposite">
                    <v-btn size="large" class="deposit_btn">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wallet"
                            class="svg-inline--fa fa-wallet " role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z">
                            </path>
                        </svg>
                        <h6>Deposit</h6>
                    </v-btn>
                </nuxt-link>
            </v-col>
            <v-col cols="4" lg="4">
                <nuxt-link type="text" to="/withdraw">
                    <v-btn size="large" class="withdrawal_btn">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="right-from-bracket"
                            class="svg-inline--fa fa-right-from-bracket " role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z">
                            </path>
                        </svg>
                        <h6>Withdraw</h6>
                    </v-btn>
                </nuxt-link>
            </v-col>
            <v-col cols="4" lg="4">
                <nuxt-link type="text" to="/history">
                    <v-btn size="large" class="history_btn">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock-rotate-left"
                            class="svg-inline--fa fa-clock-rotate-left " role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z">
                            </path>
                        </svg>
                        <h6>History</h6>
                    </v-btn>
                </nuxt-link>
            </v-col>
            <v-row style="width:100%;">
                <v-col>
                    <v-btn width="98%" size="large" type="text" class="show_only_deposit">
                        <span>Deposit</span>
                    </v-btn>
                </v-col>

            </v-row>

        </v-row>
        <div class="bg_green">
            <v-row>
                <v-col v-for="(bank, index) in banks" :key="index" cols="12" lg="4">
                    <v-radio-group v-model="radios">
                        <v-radio :label="bank.type" :value="bank.type">
                            <template style="color:#fff !important;" v-slot:label>
                                <div>
                                    <v-card width="100%" @click="addClass(bank.id)"
                                        v-bind:class="{ bank_bgColor: (bank.id === activeId) }" :title="bank.type"
                                        :subtitle="bank.account_number">

                                        <template v-slot:prepend>
                                            <v-avatar size="45">
                                                <v-img :src="bank.bank_image" alt="John"></v-img>
                                            </v-avatar>

                                        </template>
                                        <template v-slot:append>
                                            <v-avatar class="copy_icon">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copy"
                                                    class="svg-inline--fa fa-copy " role="img"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z">
                                                    </path>
                                                </svg>
                                            </v-avatar>
                                        </template>

                                    </v-card>
                                </div>
                            </template>
                        </v-radio>

                    </v-radio-group>
                </v-col>
            </v-row>


            <v-form ref="form" @submit.prevent="TopupSubmit" v-model="valid" lazy-validation>

                <v-row class="deposit_inputs">

                    <v-col cols="12" lg="3">

                        <v-text-field :height="20" variant="solo" v-model="tran_amount" placeholder="Deposit Amount"
                            :rules="[v => !!v || 'Deposit amount is required']" required></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="3">
                        <v-text-field variant="solo" v-model="transaction_number" placeholder="Enter Transaction Number"
                            :rules="[v => !!v || 'Enter Transaction Number is required']" required></v-text-field>
                    </v-col>

                    <v-col cols="12" lg="3">
                        <v-file-input prepend-icon="mdi-camera" clearable label="File input"
                            variant="solo-filled"></v-file-input>
                    </v-col>
                    <v-col cols="12" lg="3">
                        <v-btn class="topup_submit_btn"  :disabled="loading"
                        :loading="loading"  @click="TopupSubmit" type="success">Confirm</v-btn>
                    </v-col>



                </v-row>
            </v-form>

        </div>



    </main>
</template>

<script>
import { useStore } from '~/store/state';
// import ProfileDetail from '~/components/ProfileDetail';
export default {

    components: {
        // ProfileDetail,
        // TheFooter
    },
    mounted() {

        let token = localStorage.getItem("token");
        if (token) {
            $fetch('/profile', {
                headers: {
                    Authorization: "Bearer " + token,
                },
                method: 'post',
                baseURL: 'https://backend.shalpouts.com/api'
            })
                .then((response) => {
                    this.profile = response.data;
                    console.log(this.profile, 'profile api')
                    let store = useStore()
                    store.profile(this.profile)

                })
            $fetch('/bank_api', {
                headers: {
                    Authorization: "Bearer " + token,
                },
                method: 'post',
                baseURL: 'https://backend.shalpouts.com/api'
            })
                .then((response) => {

                    this.banks = response.data
                    console.log(this.banks, 'bank api')

                })
        }

    },
    data() {
        return {
            loading:false,
            state: useStore(),
            radios: '',
            activeId: 0,

            isSet: false,

            active: 1,
            percentage: 0,

            radio_amount: '',
            title: 'Deposite',
            valid: false,
            selectBank: '',
            banks: [],
            phone: '',
            bank_name: '',
            tran_amount: '',
            transaction_number: ''

        }
    },
    head() {
        var lang = localStorage.getItem('locale')

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

        addClass: function (id) {
            console.log(id, 'okkkkk iddddd')
            this.activeId = id;


        },

        toggleIsSet(index) {

            // this.isSet = !this.isSet
        },
        selectBank_btn() {
            if (this.selectBank) {
                if (this.active++ > 1) this.active = 2;
            } else {
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
            // window.getSelection().removeAllRanges();
        },
        cancel() {
            if (this.active-- > 1) this.active = 1;
        },
        async TopupSubmit() {
            const { valid } = await this.$refs.form.validate()

            if (valid) {
                
                let token = localStorage.getItem("token");
                let profile = JSON.parse(localStorage.getItem('profile'))
                var data_deposit = {

                    phone: profile.phone,
                    bank_name: this.radios,
                    admin_account: this.radios,
                    amount: this.tran_amount,
                    transaction_number: this.transaction_number,

                }
                this.loading = true
                console.log(data_deposit, '/////')
                if (token) {
                    if (this.radios) {
                        $fetch('/wallet_deposit', {
                            params: {
                                phone: profile.phone,
                                bank_name: this.radios,
                                admin_account: this.radios,
                                amount: this.tran_amount,
                                transaction_number: this.transaction_number,
                            },
                            headers: {
                                Authorization: "Bearer " + token,
                            },
                            method: 'post',
                            baseURL: 'https://backend.shalpouts.com/api'
                        })


                            .then((response) => {

                                console.log(response, 'wallet_deposit success')
                                if (response.status == 'success') {
                                    this.loading = false
                                    this.$snackbar.add({
                                        type: 'success',
                                        text: 'Wallet Deposit Success'
                                    })

                                    this.radios = '';
                                } else {
                                    this.loading = false
                                    this.$snackbar.add({
                                        type: 'error',
                                        text: response.status
                                    })
                                }


                            })
                            .catch((error) => {
                                this.loading = false
                                this.$snackbar.add({
                                    type: 'error',
                                    text: error
                                })
                            });
                    } else {
                        this.loading = false
                        this.$snackbar.add({
                            type: 'warning',
                            text: 'Please Select a Bank'
                        })
                    }

                }

                //

                //if (this.active++ > 2) this.active = 0;
            } else {
                console.log("error submit!!");
                return false;
            }


        }
    },
}
</script>

<style >
.is-active {
    color: #fff;
}


.v-radio-group>.v-input__control {
    background-color: #ddd;
    border-radius: 9px;
}


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
    padding-top: 20px;

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


.topup .profile_btns .deposit_btn {
    background-color: #ffc107;
    height: 63px;
    color: #000;
    border: 0;
}



.deposit_btn,
.withdrawal_btn,
.history_btn,
.topup_btn {
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

.topup .v-img__img--cover {
    background-size: cover;
    object-fit: unset;
}

.topup .v-avatar {
    border-radius: 9px;
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
    margin-top: 30px;
}

.btn_group .el-button {
    width: 47% !important;
    padding: 20px 10px !important;
}
</style>