// 组件通信，一个触发与监听的过程 Taro.Events有默认实现
class EventBus {
  list;

  static instance: any;

  static getInstance() {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  constructor() {
    // 存储事件
    this.list = this.list || new Map();
  }

  // 监听事件
  on(key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  }

  // 触发事件
  emit(...args) {
    const key = [].shift.call(args);
    const fns = this.list[key];

    fns.forEach((fn) => {
      fn.apply(this, args);
    });
  }
}

const eventBus = EventBus.getInstance();
export default eventBus;
