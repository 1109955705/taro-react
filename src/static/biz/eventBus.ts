// 组件通信，一个触发与监听的过程
class EventBus {
  list
  static instance: any
  static getInstance() {
    if(!EventBus.instance) {
      EventBus.instance = new EventBus()
    }
    return EventBus.instance
  }
  constructor () {
    // 存储事件
    this.list = this.list || new Map()
  }
  // 监听事件
  on(key, fn) {
    if (!this.list[key]) {
        this.list[key] = [];
    }
    this.list[key].push(fn);
  }
  // 触发事件
  emit() {  
    let key = [].shift.call(arguments),
        fns = this.list[key];

    if (!fns || fns.length === 0) {
        return false;
    }
    fns.forEach(fn => {
        fn.apply(this, arguments);
    });
  }
}
const eventBus = EventBus.getInstance()
export default eventBus