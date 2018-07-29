<template>
    <div>
       <van-nav-bar
        title="用户登录"
        left-text="返回"
        left-arrow
        @click-left="goBack"
        />
 
        <div class="register-panel">
        <van-field
            v-model="userName"
            label="用户名"
            icon="question"
            placeholder="请输入用户名"
            required
            :error-message="usernameErrorMsg"
        />
 
        <van-field
            v-model="passWord"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
            :error-message="passwordErrorMsg"
        />
        <div class="register-button">
            <van-button
             type="primary"
             @click="registerAction" 
             size="large"
             :loading='openLoading'
             >登录</van-button>
        </div>
       </div>
 
    </div>
</template>

<script>
    import axios from 'axios';
    import { Toast } from 'vant';
     export default {
        data() {
            return {
                userName: '',
                passWord: '',
                openLoading:false,
                usernameErrorMsg:'',
                passwordErrorMsg:''
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)   
            },
            registerAction(){
                if(this.checkForm()){
                    this.registerSubmit()
                }
            },
            checkForm(){
                let isOk= true
                if(this.userName.length<5){
                    this.usernameErrorMsg="用户名不能小于5位"
                    isOk= false
                }else{
                    this.usernameErrorMsg=''
                }
                if(this.passWord.length<6){
                    this.passwordErrorMsg="密码不能少于6位"
                    isOk= false
                }else{
                    this.passwordErrorMsg=''
                }
                return isOk
            },

            registerSubmit(){
                this.openLoading = true
                axios({
                     method: 'post',
                    url:'http://localhost:3000/user/login',
                    data: {
                        userName: this.userName,
                        passWord: this.passWord
                    }
                })
                .then(response=>{
                    if(response.data.code == '0'){
                        Toast.success('登录成功')
                        
                    }else if(response.data.code == '1'){
                        Toast.fail(response.data.message)
                    }
                    this.openLoading = false
                })
                .catch(error=>{
                    console.log(error);
                     this.openLoading = false
                })
            }
        },
    }
</script>

<style scoped>
    .register-panel{
        width:96%;
        border-radius: 5px;
        margin:20px auto;
        padding-bottom:50px;
    }
    .register-button{
        padding-top:10px;
    }
</style>