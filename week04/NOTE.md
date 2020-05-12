# 语句，对象

### 语法细节

#### for 循环作用域

```javascript
for (let i = 0; i < 10; i++) {
    let i = 0
    console.log(i)
}
```

可以等效于下面的代码

```javascript
{
    let i = 0
    {
        let i = 0
        console.log(i)
    }
    i++
    // 重复上段代码
}
```

#### var 提前声明
下面代码可以正常运行
```javascript
function run() {
    for (i = 0; i < 10; i++) {
        console.log(i)
    }
    var i
}
run()
```
