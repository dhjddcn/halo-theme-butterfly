export default class LazyLoad {
  constructor(options) {
    // 默认选项
    const defaultOptions = {
      elements_selector: ".lazy",
      container: document,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_bg_hidpi: "bg-hidpi",
      data_bg_multi: "bg-multi",
      data_bg_multi_hidpi: "bg-multi-hidpi",
      data_poster: "poster",
      class_applied: "applied",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      class_entered: "entered",
      class_exited: "exited",
      unobserve_completed: true,
      unobserve_entered: false,
      cancel_on_exit: true,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_cancel: null,
      use_native: false
    };

    // 合并选项
    this.options = { ...defaultOptions, ...options };
    this.loadingCount = 0;

    // 创建 IntersectionObserver
    if (window.IntersectionObserver && !this.useNativeLazyLoad()) {
      this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
        root: this.options.container === document ? null : this.options.container,
        rootMargin: this.options.thresholds || `${this.options.threshold}px`
      });
    }

    // 在线状态监听
    if (window.navigator.onLine) {
      window.addEventListener("online", this.handleOnline.bind(this));
    }

    // 初始化
    this.update();
  }

  // 处理元素可见性变化
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        this.handleEntry(entry.target, entry);
      } else {
        this.handleExit(entry.target, entry);
      }
    });
  }

  // 元素进入视口处理
  handleEntry(target, entry) {
    this.setStatus(target, "entered");
    this.addClass(target, this.options.class_entered);
    this.removeClass(target, this.options.class_exited);
    if (this.options.unobserve_entered) {
      this.unobserve(target);
    }
    if (!this.hasStatus(target) || this.getStatus(target) !== "loaded") {
      this.load(target);
    }
    if (this.options.callback_enter) {
      this.options.callback_enter(target, entry);
    }
  }

  // 元素离开视口处理
  handleExit(target, entry) {
    if (!this.isElementUnobserved(target)) {
      this.removeClass(target, this.options.class_exited);
      if (this.options.cancel_on_exit && this.hasStatus(target) && this.getStatus(target) === "loading" && target.tagName === "IMG") {
        this.cancelLoading(target);
        this.restoreOriginalAttributes(target);
        this.removeClass(target, this.options.class_loading);
        this.decreaseLoadingCount();
        this.removeStatus(target);
        if (this.options.callback_cancel) {
          this.options.callback_cancel(target, entry);
        }
      }
      if (this.options.callback_exit) {
        this.options.callback_exit(target, entry);
      }
    }
  }

  // 处理在线状态变化
  handleOnline() {
    const elements = this.getElements();
    elements.filter(this.isElementInErrorState.bind(this)).forEach(element => {
      this.removeClass(element, this.options.class_error);
      this.removeStatus(element);
    });
    this.update();
  }

  // 更新
  update(elements = null) {
    const targets = elements ? this.getElements(elements) : this.getElements();
    this.setToLoadCount(targets.length);
    if (!this.useNativeLazyLoad()) {
      if (this.observer) {
        targets.forEach(target => this.observe(target));
      }
    } else {
      targets.forEach(target => {
        if (this.isElementLazyLoadable(target)) {
          this.setNativeLazyLoad(target);
        }
      });
      this.setToLoadCount(0);
    }
  }

  // 销毁
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    const elements = this.getElements();
    elements.forEach(element => {
      delete element.llOriginalAttrs;
    });
    delete this.observer;
    delete this.options;
    delete this.loadingCount;
    delete this.toLoadCount;
  }

  // 加载所有
  loadAll(elements = null) {
    const targets = elements ? this.getElements(elements) : this.getElements();
    targets.forEach(target => {
      if (!this.isElementUnobserved(target)) {
        this.load(target);
      }
    });
  }

  // 加载元素
  load(target) {
    if (!this.isElementLazyLoadable(target)) {
      return;
    }
    this.observe(target);
    if (this.isElementImage(target)) {
      this.loadImage(target);
    } else if (this.isElementIframe(target)) {
      this.loadIframe(target);
    } else if (this.isElementVideo(target)) {
      this.loadVideo(target);
    } else {
      this.loadBackground(target);
    }
  }

  // 加载图片元素
  loadImage(img) {
    this.setStatus(img, "loading");
    this.addClass(img, this.options.class_loading);
    this.handleLoadingCallback(img);
    img.src = img.getAttribute(`data-${this.options.data_src}`);
  }

  // 加载视频元素
  loadVideo(video) {
    this.setStatus(video, "loading");
    this.addClass(video, this.options.class_loading);
    this.handleLoadingCallback(video);
    const sources = Array.from(video.querySelectorAll("source"));
    sources.forEach(source => {
      source.src = source.getAttribute(`data-${this.options.data_src}`);
    });
    video.poster = video.getAttribute(`data-${this.options.data_poster}`);
    video.load();
  }

  // 加载iframe元素
  loadIframe(iframe) {
    this.setStatus(iframe, "loading");
    this.addClass(iframe, this.options.class_loading);
    this.handleLoadingCallback(iframe);
    iframe.src = iframe.getAttribute(`data-${this.options.data_src}`);
  }

  // 加载背景图片
  loadBackground(element) {
    const bg = element.getAttribute(`data-${this.options.data_bg}`);
    if (bg) {
      element.style.backgroundImage = `url("${bg}")`;
      this.addClass(element, this.options.class_applied);
      this.setStatus(element, "applied");
    }
  }

  // 取消加载
  cancelLoading(element) {
    if (this.isElementImage(element)) {
      element.src = "";
    }
    this.decreaseLoadingCount();
  }

  // 恢复原始属性
  restoreOriginalAttributes(element) {
    if (element.llOriginalAttrs) {
      const originalAttrs = element.llOriginalAttrs;
      element.src = originalAttrs.src;
      element.srcset = originalAttrs.srcset;
      element.sizes = originalAttrs.sizes;
    }
  }

  // 添加类名
  addClass(element, className) {
    element.classList.add(className);
  }

  // 移除类名
  removeClass(element, className) {
    element.classList.remove(className);
  }

  // 检查是否有指定状态
  hasStatus(element) {
    return element.dataset.llStatus !== undefined;
  }

  // 获取状态
  getStatus(element) {
    return element.dataset.llStatus;
  }

  // 设置状态
  setStatus(element, status) {
    element.dataset.llStatus = status;
  }

  // 移除状态
  removeStatus(element) {
    delete element.dataset.llStatus;
  }

  // 观察元素
  observe(element) {
    this.observer.observe(element);
  }

  // 取消观察元素
  unobserve(element) {
    this.observer.unobserve(element);
  }

  // 是否是图片元素
  isElementImage(element) {
    return element.tagName === "IMG";
  }

  // 是否是视频元素
  isElementVideo(element) {
    return element.tagName === "VIDEO";
  }

  // 是否是iframe元素
  isElementIframe(element) {
    return element.tagName === "IFRAME";
  }

  // 元素是否已取消观察
  isElementUnobserved(element) {
    return this.hasStatus(element) && this.getStatus(element) === "entered" && element.tagName === "IMG";
  }

  // 元素是否处于错误状态
  isElementInErrorState(element) {
    return this.hasStatus(element) && this.getStatus(element) === "error";
  }

  // 元素是否可延迟加载
  isElementLazyLoadable(element) {
    return element.tagName === "IMG" || element.tagName === "IFRAME" || element.tagName === "VIDEO" || (element.tagName !== "IMG" && element.hasAttribute(`data-${this.options.data_bg}`));
  }

  // 获取元素数组
  getElements(elementsSelector = null) {
    const container = this.options.container;
    if (elementsSelector === null) {
      return Array.from(container.querySelectorAll(this.options.elements_selector));
    } else {
      return Array.from(container.querySelectorAll(elementsSelector));
    }
  }

  // 设置需要加载的元素数量
  setToLoadCount(count) {
    this.toLoadCount = count;
  }

  // 减少加载中计数
  decreaseLoadingCount() {
    this.loadingCount--;
  }

  // 判断是否使用了浏览器原生的 lazy load 特性
  useNativeLazyLoad() {
    return this.options.use_native && "loading" in HTMLImageElement.prototype;
  }

  // 设置浏览器原生 lazy load 特性
  setNativeLazyLoad(element) {
    element.setAttribute("loading", "lazy");
    this.setStatus(element, "native");
  }

  // 处理加载中回调
  handleLoadingCallback(element) {
    this.loadingCount++;
    if (this.options.callback_loading) {
      this.options.callback_loading(element);
    }
  }
}
