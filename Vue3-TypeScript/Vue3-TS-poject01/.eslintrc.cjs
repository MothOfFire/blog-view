module.exports = {
    //运行环境
    "env": {
        "browser": true,//浏览器端
        "es2021": true, // es2021
        "node": true,
        "jest": true
    },
    //规则继承
    "extends": [
        //全部规则是默认关闭的，这个配置项是开启推荐规则，推荐规则参考文档
        "eslint:recommended",
        // TS 语法规则
        "plugin:@typescript-eslint/recommended",
        // Vue3 语法规则
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-recommended",
    ],
    // 要为特定类型文件指定处理器
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    // 指定解析器 ESprima 是默认解析器
    "parser": "vue-eslint-parser",
    //指定解析器选项
    "parserOptions": {
        "ecmaVersion": "latest", //校验 ECMA 最新版本
        "parser": "@typescript-eslint/parser",
        "jsxPragma": "React",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        }
    },
    // Eslint 支持第三方插件
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    // eslint 规则
    "rules": {
        //eslint（https://eslint.bootcss.com/docs/rules）
        'no-var': 'reeor', //要求使用 let 或者 const，不能使用 var
        'no-multiple-empty-lines': ['warn', { max: 1 }],//不允许多个空行
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unexpected-multiline': 'error', //禁止多余空行
        'no-useless-escape': 'off', //禁止不必要的转义字符

        // typescript（https://typescript-eslint.io/rules）
        '@typescript-eslint/no-unused-vars': 'off',//禁止定义未使用的变量
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/no-explicit-any': 'off', //禁止使用 any 类型
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 typescript 模板
        '@typescript-eslint/semi': 'off',

        // eslint-plugin-vue（https://eslint.vuejs.org/rules）
        'vue/multi-word-component-names': 'off', //要求组件名称始终以 “-” 连接单词
        'vue/script-setup-uses-vars': 'error', //防止 <script setup></script> 使用<template></template>
        'vue/no-mutating-props': 'off', //不允许组件 props 改变
        'vue/attribute-hyphenation': 'off' // 对模板中自定义组件强制执行属性命名样式
    }
}
