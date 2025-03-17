import type { MicroAppConfig } from '@/core/micro/MicroApp'

/**
 * @date: 2025/3/17
 * @author: 小红
 * @fileName: apps
 * @Description: 子应用配置
 */
const apps: MicroAppConfig[] = [
  {
    name: 'demo1',
    title: '本地子应用',
    url: '//localhost:8888/demo1/',
  },
  // {
  //   path: 'demo1',
  //   name: '本地子应用',
  //   url: isDev ? '//localhost:8888/demo1/' : '//localhost:4174/demo1/'
  // }
]

export default apps
// 获取当前运行环境
