# javascript类  
对于类的探究，一直说js没有类只有对象，那到底什么是类，js中的class又是什么，为何要以这种形式来表示类？  
1.  类理论-什么是类和对象？  
  * 类可以理解为一个种类，如人类，用代码表示可以写为:
```js  
class 人类 {
  constructor(性别) {
    this.性别 = 性别
    this.眼睛 = 2
    this.鼻子 = 1
  }
  // 定义一个行为 
  行走 () {
    console.log('ddd...')
  }
}
// 对象即个体
const 陈某某 = new 人类('男')
陈某某.行走() // ddd...
```
>由此可以看出类可以说是一个模型，他提供了DNA，当我们对他输入数据时生成一个新的对象即为实例化（一个新的人诞生），这个对象拥有继承自父类的信息及行为，例如眼睛、鼻子的数量等，以及一个行走所发出的声音。  
  * 类的第二个概念为多态  
  对象陈某某有了自己的行走方式叫  
  ```js  
  陈某某.行走 = function () {
    console.log('jump')
  }
  ```
  但同时也能使用父类中的行走方式，行为不同但名字相同。  
  ___
# 基于类 vs 基于原型   
> 先给出结论： javascript 是基于原型，而java、c++ 才是基于类。    

基于类的面向对象语言，比如 Java 和 C++，是构建在两个不同实体的概念之上的：即类和实例。  
  * 类（class）：定义了所有用于具有某一组特征对象的属性（可以将 Java 中的方法和变量以及 C++ 中的成员都视作属性）。类是抽象的事物，而不是其所描述的全部对象中的任何特定的个体。例如Employee 类可以用来表示所有雇员的集合。  
  * 实例（instance）：类的实例化体现；或者说，是类的一个成员。例如， Victoria 可以是Employee 类的一个实例，表示一个特定的雇员个体。实例具有和其父类完全一致的属性。     

基于原型的语言（如 JavaScript）并不存在这种区别：它只有对象。基于原型的语言具有所谓原型对象（prototypical object）的概念。原型对象可以作为一个模板，新对象可以从中获得原始的属性。任何对象都可以指定其自身的属性，既可以是创建时也可以在运行时创建。而且，任何对象都可以作为另一个对象的原型（prototype），从而允许后者共享前者的属性。  
##  定义类  
在基于类的语言中，需要专门的类定义符（class definition）定义类。在定义类时，允许定义特殊的方法，称为构造器（constructor），来创建该类的实例。在构造器方法中，可以指定实例的属性的初始值以及一些其他的操作。您可以通过将new 操作符和构造器方法结合来创建类的实例。

JavaScript 也遵循类似的模型，但却不同于基于类的语言。在 JavaScript 中你只需要定义构造函数来创建具有一组特定的初始属性和属性值的对象。任何 JavaScript 函数都可以用作构造器。 也可以使用 new 操作符和构造函数来创建一个新对象。  
## 子类和继承  
基于类的语言是通过对类的定义中构建类的层级结构的。在类定义中，可以指定新的类是一个现存的类的子类。子类将继承父类的全部属性，并可以添加新的属性或者修改继承的属性。例如，假设Employee 类只有 name 和 dept 属性，而 Manager 是Employee 的子类并添加了 reports 属性。这时，Manager 类的实例将具有所有三个属性：name，dept 和reports。

JavaScript 通过将构造器函数与原型对象相关联的方式来实现继承。这样，您可以创建完全一样的 Employee — Manager 示例，不过需要使用略微不同的术语。首先，定义 Employee 构造器函数，指定 name 和dept 属性；然后，定义 Manager 构造器函数，指定 reports 属性。最后，将一个新的Employee 对象赋值给 Manager 构造器函数的 prototype 属性。这样，当创建一个新的Manager 对象时，它将从 Employee 对象中继承 name and dept 属性。  
## 添加和移除属性  
在基于类的语言中，通常在编译时创建类，然后在编译时或者运行时对类的实例进行实例化。一旦定义了类，无法对类的属性进行更改。然而，在 JavaScript 中，允许运行时添加或者移除任何对象的属性。如果您为一个对象中添加了一个属性，而这个对象又作为其它对象的原型，则以该对象作为原型的所有其它对象也将获得该属性。  
## 区别摘要  
下面的表格摘要给出了上述区别。本节的后续部分将描述有关使用 JavaScript 构造器和原型创建对象层级结构的详细信息，并将其与在 Java 中的做法加以对比。  
<img src="https://img-blog.csdn.net/20161215202840808?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcHJlaGlzdG9yaWNhbA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" />  

___

## Employee 示例Edit
本节的余下部分将使用如下图所示的 Employee 层级结构。  
<img src="https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3060/348e1b336920b84d7c5435b1fca6152c/figure8.1.png" />  
例子中会使用以下对象：

* Employee 具有 name 属性（默认值为空的字符串）和 dept 属性（默认值为 "general"）。
* Manager 是 Employee的子类。它添加了 reports 属性（默认值为空的数组，以
* Employee 对象数组作为它的值）。
* WorkerBee 是 Employee的子类。它添加了 projects 属性（默认值为空的数组，以字符串数组作为它的值）。
* SalesPerson 是 WorkerBee的子类。它添加了 quota 属性（其值默认为 100）。它还重载了dept 属性值为 "sales"，表明所有的销售人员都属于同一部门。
* Engineer 基于 WorkerBee。它添加了 machine 属性（其值默认为空的字符串）同时重载了dept 属性值为 "engineering"。
## 创建层级结构Edit  
可以有几种不同的方式来定义适当的构造器函数，从而实现雇员的层级结构。如何选择很大程度上取决于您希望在您的应用程序中能做到什么。

本节介绍了如何使用非常简单的（同时也是相当不灵活的）定义，使得继承得以实现。在定义完成后，就无法在创建对象时指定属性的值。新创建的对象仅仅获得了默认值，当然允许随后加以修改。图例 8.2 展现了这些简单的定义形成的层级结构。

在实际应用程序中，您很可能想定义构造器，以允许您在创建对象时指定属性值。（参见 更灵活的构造器 获得进一步的信息）。当前，这些简单的定义只是说明了继承是如何实现的。  
<img src="https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3035/0f9c80e111ae00ee96dae8f7cc1eb7a6/figure8.2.png" />  
> 下面关于 Employee 的 Java 和 JavaScript 的定义是非常类似的。唯一的不同是在 Java 中需要指定每个属性的类型，而在 JavaScript 中则不需要，同时 Java 的类必须创建一个显式的构造器方法。  

```js  
function Employee () {
  this.name = "";
  this.dept = "general";
}
```
```java  
public class Employee {
  public String name;
  public String dept;
  public Employee () {
  this.name = "";
  this.dept = "general";
  }
}
```
> Manager 和 WorkerBee 的定义表示在如何指定继承链中上一层对象时，两者存在不同点。在 JavaScript 中，您会添加一个原型实例作为构造器函数prototype 属性的值，而这一动作可以在构造器函数定义后的任意时刻执行。而在 Java 中，则需要在类定义中指定父类，且不能在类定义之外改变父类。  
> ```js  
> function Manager () {
> this.reports = [];
> }
> Manager.prototype = new Employee;
> function WorkerBee () {
> this.projects = [];
> }
> WorkerBee.prototype = new Employee;
> ```

```java
public class Manager extends Employee {
  public Employee[] reports;
  public Manager () {
  this.reports = new Employee[0];
  }
  }
  public class WorkerBee extends Employee {
  public String[] projects;
  public WorkerBee () {
  this.projects = new String[0];
  }
}
```