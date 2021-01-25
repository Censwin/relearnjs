# FLUX

1. 什么是flux？

   Flux 是一种架构模式；是单向数据流的鼻祖；redux的前身；flux推翻了MVC框架；（MVC见另外一篇文档）

2. flux 有4部分组成：Action、Dispatcher、Store、View.   

### Store  

flux 中的 Store 类似于 model，用来存储数据 以及 对数据进行操作；其实也可以叫他data但是太土了

```js
const data = {
  'name': '',
  'age': 10,
};
const DataStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues: function() {
    return data;
  },
  emitChange: function() {
    this.emit('change');
  },
});
```

### Action

Action 就是动作，这个动作可以是加减乘除等等，当需要增加一个功能的时候只需要增加一个action即可

```js
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
export const increment = (name) => {
  AppDispatcher.dispatch({
    type: INCREMENT,
    name // 这里对应的是仓库的属性值，表示这个动作改变的是这个值
  });
};
........

```

### Dispatcher

Dispatcher 是flux 的核心，加上这个Dispatcher一切变得神奇

```js
import {Dispatcher} from 'flux';
export default new Dispatcher();
```

当我们设置好action和store之后我们需要把两者关联到Dispatcher，这样一来当我们触发相应的action时 dispatch 就会去找对应的操作修改store

> Action 	中 我们这样绑定

```js
export const increment = (name) => {
  Dispatcher.dispatch({
    type: 'increment',
    name // 这里对应的是仓库的属性值，表示这个动作改变的是这个值
  });
};
```

> Store 中我们这样绑定

```js
DataStore.dispatchToken = Dispatcher.register((action) => {
  if (action.type === 'increment') {
    data[action.name] ++;
    DataStore.emitChange();
  }
});
```

### View

view怎么触发？

```
import {increment} from 'actions' // 上面我们定义的
<button onClick={increment('name')}>修改</button>
```

