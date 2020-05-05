javascript 语法分析
================

### 表达式
#### Menber

+ a.b
+ a[b]
+ foo `string`
    模板字符串，会将自身根据量拆分为字符串和表达式
    ``` javascript
    function foo(){
        console.log(arguments)
    }
    let name = 'whutyzy'
    foo `hello ${name}welcome`
    // 输出arguments 数组['hello:',',     welcome'],'whutyzy']
    ```
+ super.b
+ super[b]
+ new.target
+ new Foo()

    Foo()的优先级比new运算符高
    ``` javascript
    function class1 (s){
        console.log('1',s)
    }
    function class2 (s){
        console.log('2',s)
        return class1
    }
    new new class2('hi')
    ```
merber表达式返回一个reference对象
#### New
+ new Foo

example: 不同情况下new的优先级不一样，比如`new Foo`和`new Foo()`两者就不一样。
+ `new new a()`，先执行`new a()`，再执行`new`
+ `new a()()`，先执行``，再执行``
#### Call

+ foo()
+ super()
+ foo()['b']
+ foo().b
+ foo()`string`

example: `new a()["b"]`，先执行`new a()`，再去取`b`

#### 类型转换
#### 装箱 boxing
在处理`'hello'.length`这段代码时，会默认的进行装箱（boxing）处理，也就是将`'hello'`处理为字符串对象，然后再读取length属性。
String作为普通函数调用时，只是做一个类型转换处理,作为构造函数调用时，会返回一个字符串对象，结构类似数组，但不是数组
``` javascript
String(1) // "1"
new String('abc') // String {0: "a", 1: "b", 2: "c", length: 3}
```
#### 拆箱 unboxing
`1 + {}`，这里会先使用对象的valueOf方法返回的值，然后再进行相加

更新：拆箱调用方法优先级 `Symbol.toPrimitive`>`valueOf`>`toString`
`toPrimitive`会优先调用`valueOf`，没有再调`toString`
#### 最佳实践
void运算符，把后面的结果全部运算成undefined返回



