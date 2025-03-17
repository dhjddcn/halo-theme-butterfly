/**
 * @date: 2025/3/17
 * @author: 小红
 * @fileName: MicroApp
 * @Description: 无界微服务注册
 */
import router from '../../router'

import WuJieVue from './v3.tsx'

import apps from '@/apps.ts'
import type { cacheOptions } from 'wujie'

export const isDev = import.meta.env.DEV

export type MicroAppConfig = cacheOptions & {
  title: string
}

// 默认配置
const LocalConfig = {
  alive: true,
  sync: true,
  attrs: { src: isDev ? 'http://localhost:9999/' : '//117.72.108.242:6789/app/' },
  plugins: [
    {
      // 对子应用的template进行的aaa替换成bbb
      htmlLoader: (code: string) => {
        try {
          code = code.replace(/(<html\b[^>]*)>/s, '$1 style="position: fixed;">')
        } catch (e: any) {
          console.log('code.replace 解析 失败', e)
        }
        return code
      },
    },
  ],
}

/**
 * 注册无界子应用和路由
 */
function registerApp(conf: MicroAppConfig) {
  router.addRoute({
    path: `/${conf.name}`,
    name: conf.name,
    component: <WuJieVue {...({ ...LocalConfig, ...conf } as any)} />,
  })
}

/**
 * 注册微服务
 */
export default {
  install() {
    for (let i = 0; i < apps.length; i++) registerApp(apps[i])
  },
}
