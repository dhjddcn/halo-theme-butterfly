import { defineComponent, ref, watchEffect, onMounted, onUnmounted } from 'vue'
import { bus, startApp as rawStartApp, destroyApp } from 'wujie'

export default defineComponent({
  name: 'WuJieVue',
  props: {
    width: { type: String, default: '100%' },
    height: { type: String, default: '100%' },
    name: { type: String, required: true },
    url: { type: String, required: true },
    loading: { type: Object as () => HTMLElement, default: undefined },
    sync: { type: Boolean, default: undefined },
    prefix: { type: Object, default: undefined },
    alive: { type: Boolean, default: undefined },
    props: { type: Object, default: undefined },
    attrs: { type: Object, default: undefined },
    replace: { type: Function, default: undefined },
    fetch: { type: Function, default: undefined },
    fiber: { type: Boolean, default: undefined },
    degrade: { type: Boolean, default: undefined },
    plugins: { type: Array as () => unknown[], default: () => [] },
    beforeLoad: { type: Function, default: null },
    beforeMount: { type: Function, default: null },
    afterMount: { type: Function, default: null },
    beforeUnmount: { type: Function, default: null },
    afterUnmount: { type: Function, default: null },
    activated: { type: Function, default: null },
    deactivated: { type: Function, default: null },
    loadError: { type: Function, default: null },
  },
  setup(props, { emit }) {
    const wujieRef = ref<HTMLDivElement | null>(null)
    let startAppQueue = Promise.resolve()

    // 事件监听
    const handleEmit = (event: string, ...args: any[]) => {
      emit(event, ...args)
    }

    // 启动子应用
    const startApp = async () => {
      try {
        await rawStartApp({
          name: props.name,
          url: props.url,
          el: wujieRef.value as any,
          loading: props.loading,
          alive: props.alive,
          fetch: props.fetch as any,
          props: props.props,
          attrs: props.attrs,
          replace: props.replace as any,
          sync: props.sync,
          prefix: props.prefix,
          fiber: props.fiber,
          degrade: props.degrade,
          plugins: props.plugins as any,
          beforeLoad: props.beforeLoad as any,
          beforeMount: props.beforeMount as any,
          afterMount: props.afterMount as any,
          beforeUnmount: props.beforeUnmount as any,
          afterUnmount: props.afterUnmount as any,
          activated: props.activated as any,
          deactivated: props.deactivated as any,
          loadError: props.loadError as any,
        })
      } catch (error) {
        console.error('Wujie 子应用加载失败:', error)
      }
    }

    // 队列启动
    const execStartApp = () => {
      startAppQueue = startAppQueue.then(startApp)
    }

    onMounted(() => {
      bus.$onAll(handleEmit)
      execStartApp()
    })

    onUnmounted(() => {
      bus.$offAll(handleEmit)
      destroyApp(props.name)
    })

    // 监听 name 和 url 变化，重新启动子应用
    watchEffect(() => {
      execStartApp()
    })

    return () => <div ref={wujieRef} style={{ width: props.width, height: props.height }} />
  },
})
