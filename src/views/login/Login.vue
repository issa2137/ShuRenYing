<template>
<!--  背景图片还没定-->
  <div class="container_main">
<!--    <div>-->
<!--      <div>-->
<!--        <div></div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <ul>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
  <div class="container right-panel-active" ref="container">
    <!-- Overlay -->
    <div class="container__overlay">
      <div class="overlay">
      </div>
    </div>
    <!-- Sign Up -->
    <div class="container__form container--signup">
      <div class="form_head">
        <h2>用户登录</h2>
      </div>
      <el-form
          :title="登录"
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="70px"
          class="form"
      >
        <el-form-item label="账户" prop="account" >
          <el-input v-model="ruleForm.account" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
              v-model="ruleForm.pass"
              type="password"
              autocomplete="off"/>
        </el-form-item>
        <el-form-item label="验证码" prop="reset">
          <el-input v-model.number="ruleForm.reset"/>
        </el-form-item>
        <el-form-item >
          <div class="btns">
            <el-button  type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
            <el-button  type="primary" @click="resetForm(ruleFormRef)">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
       <div class="extend">
          <router-link to="#" style="text-decoration: none;color: #008997; font-size: 14px">注册</router-link>
      </div>
    </div>
  </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
//验证码
const checkReset = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入验证码'))
  }
  // setTimeout(() => {
  //   if (!Number.isInteger(value)) {
  //     callback(new Error('Please input digits'))
  //   } else {
  //     if (value < 18) {
  //       callback(new Error('Age must be greater than 18'))
  //     } else {
  //       callback()
  //     }
  //   }
  // }, 1000)
}
//验证账户
const validateAccount = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入账号'))
  } else {
    callback()
  }
}
//验证密码
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  }  else {
    callback()
  }
}

const ruleForm = reactive({
  account: '',
  pass: '',
  reset: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  account: [{ validator: validateAccount, trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }],
  reset: [{ validator: checkReset, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style>
@import "@/views/login/Login.css";
</style>