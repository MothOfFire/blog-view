import { defineConfig } from 'vite'
//导入router路由
import vue from '@vitejs/plugin-vue';
//自动导入引用
import AutoImport from 'unplugin-auto-import/vite';
//自动导入组件
import Components from 'unplugin-vue-components/vite';
// element-plus ant-design-vue
import { ElementPlusResolver, AntDesignVueResolver } from 'unplugin-vue-components/resolvers';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver()
      ]
    }),
    Components({
      dts: './src/components.d.ts',
      //imports 指定组件所在位置，默认为src/components
      dirs: ['src/components'],
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,//css in js
        }),
        ElementPlusResolver(),
      ],
    }),
  ],
  css: {},
  resolve: {
    alias: {
      '@': '/src'
    },
  },
  server: {
    
  },
  build: {

  },
})
