<script setup lang="ts">
/**
 * 通过组合式 API（CompositionAPI），我们可以使用导入的 API 函数来描述组件逻辑
 * <script setup> 中的导入和顶层变量/函数都能够在模板中直接使用。
*/
import { Search } from '@element-plus/icons-vue';
import { watch, ref } from 'vue';
const value = ref<string>('');
const value1 = ref<string>('');
watch(value, () => {
  console.log(value.value);
});
watch(value1, () => {
  console.log(value1.value);
});
function hello() {
  alert('Hello Vue3,this use compositionAPI');
}

</script>

<template>
  <a-space direction="vertical">
    <a-input v-model:value="value" placeholder="Basic usage" />
    <a-input v-model:value.lazy="value1" autofocus placeholder="Lazy usage" />
  </a-space>
  <el-button type="primary" :icon="Search" circle @click="hello" class="btn" />
</template>

<style scoped>
  .btn {
    width: 50px;
    height: 50px;
  }
</style>
