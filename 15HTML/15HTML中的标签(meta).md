# HTML中的标签

head标签必须是第一个

title 太简单不讲了

- base标签

  会给页面里所有的url相对地址提供一个基础（包括src、href）

  ```html
  <base href="http://www.w3cschool.cn" target="_blank">
  <img src="/planets.gif" width="145" height="126" alt="Planets">
  等同于
  <img src="http://www.w3cschool.cn/planets.gif" width="145" height="126" alt="Planets">
  ```

  这个操作非常危险；不推荐使用；

- meta标签

  在 head 中可以出现任意多个 meta 标签。一般的 meta 标签由 name 和 content 两个属性来定义。name 表示元信息的名，content 则用于表示元信息的值。

  meta可以传递很多重要信息，在现代网页开发中非常重要特别是对于移动端开发显得尤为重要；

  - 具有 charset 属性的 meta

    （html5开始新增的，用来描述编码形式；建议放在第一行）<meta charset="UTF-8" >

  - 具有 http-equiv 属性的 meta

    相当于执行一个命令，不需要重复写name。例如，下面一段代码，相当于添加了 content-type 这个 http 头，并且指定了 http 编码方式；一步到位；

    ```html
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    ```

    - 除了content-type 还有以下几种

      1. content-language 指定内容的语言；（修改语言就是这个）

      2. default-style 指定默认样式表；

      3. refresh 刷新；

      4. set-cookie 模拟 http 头 set-cookie，设置 cookie；

      5. x-ua-compatible 模拟 http 头 x-ua-compatible，声明 ua 兼容性；

      6. content-security-policy 模拟 http 头 content-security-policy，声明内容安全策略。

  - name 为 viewport 的 meta （移动端开发很重要）

    这个名为 viewport 的 meta 其实并没有在html标准中，原因是：

    ### meta标签完全可以自定义，只需要写入和读取双方约定好name和content格式即可

    ```html
    <meta name="viewport" content="width=500, initial-scale=1">
    ```

    这类 meta 的 name 属性为 viewport，它的 content 是一个复杂结构，是用逗号分隔的键值对，键值对的格式是 key=value。全部属性如下：

    - width：页面宽度，可以取值具体的数字，也可以是 device-width，表示跟设备宽度相等。
    - height：页面高度，可以取值具体的数字，也可以是 device-height，表示跟设备高度相等。
    - initial-scale：初始缩放比例。
    - minimum-scale：最小缩放比例。
    - maximum-scale：最大缩放比例。
    - user-scalable：是否允许用户缩放。

  - 其它预定义的 meta

    - application-name：如果页面是 Web application，用这个标签表示应用名称。
    - author: 页面作者。
    - description：页面描述，这个属性可能被用于搜索引擎或者其它场合。
    - generator: 生成页面所使用的工具，主要用于可视化编辑器，如果是手写 HTML 的网页，不需要加这个 meta。
    - keywords: 页面关键字，对于 SEO 场景非常关键。
    - referrer: 跳转策略，是一种安全考量。
    - theme-color: 页面风格颜色，实际并不会影响页面，但是浏览器可能据此调整页面之外的 UI（如窗口边框或者 tab 的颜色）。

    

## 总结

meta标签比较重要，而且可以自定义；还有一些常用的meta标签如下：

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<!-- 默认使用最新浏览器 -->
<meta http-equiv="Cache-Control" content="no-siteapp">
<!-- 不被网页(加速)转码 -->
<meta name="robots" content="index,follow">
<!-- 搜索引擎抓取 -->
<meta name="renderer" content="webkit">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
<meta name="apple-mobile-web-app-capable" content="yes">
<!-- 删除苹果默认的工具栏和菜单栏 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<!-- 设置苹果工具栏颜色 -->
```

