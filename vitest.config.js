import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config' // 原先的 vite 設定檔案
import utils from '@vue/test-utils'
export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true
    // 在這裡加入測試設定
  },
  plugins: [
    utils
  ]
}))
