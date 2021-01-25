# MVC

以我的理解来解释什么是MVC

首先 M ： model 可以理解为各种方法函数的集合，用于处理数据的操作，包括数据逻辑、数据请求与数据存储等功能。如：

```js
var model = {
  init: () => {},
  fetch: () => {},
  save: () => {},
  update: () => {}
}
```

V: view 为 dom用于展示代码在页面哪一块，查找标签，负责用户界面。`var view=document.querySelector('#xxx')`

C： Controller 负责处理v和m的请求，也等于是v跟m的沟通桥梁，也是 **中心**

```js
var controller={
      view:null,
      model:null,
      init:function(view,model){  //初始化控制器
           this.view=view
           this.model=model
           this.model.init()
           this.bindEvent()
}
  bindEvent:function(){}  //事件函数
}
```

> 为了让数据可控，C应该是中心，V 要 传递信息到M 要调用C中的方法，M要传递信息到 V 用于更新 也应该调用C中的方法，但是我们在实际开发中经常允许V 和 M直接通讯



