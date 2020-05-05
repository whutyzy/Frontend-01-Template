# 学习总结

### 语言分类

### 产生式（BNF）

用来表示上下文无关的语言，是一种用来描述计算机语言语法的符号集，广泛的应用在程序设计语言，指令集，通信协议的语法表示中

*  用尖括号括起来的名称表示语法结构名
*  语法结构分成接触结构和需要用其他结构定义的复合结构
    *  基础结构称为终结符
    *  复合结构称为非终结符
*  引号和中间的字符表示终结符
*  可以有括号
*  *  表示重复多次
*  | 表示或
*  \* 表示至少一次

#### 定义一个加/减法

```
<Number> = "0"|"1"|"2"|...|"9"
<DecimalNumber> = "0"|(("1"|"2"...|"9")<Number>)
<AddExpression> = <MultiplicationExpression>  |
<MultiplicationExpression> "+" <MultiplicationExpression> |
<MultiplicationExpression> "-" <MultiplicationExpression>
```

#### 定义一个乘/除法

```
<MultiplicationExpression> = <DecimalNumber> |                  
<MultiplicationExpression> "*" <DecimalNumber>|
<MultiplicationExpression> "/" <DecimalNumber>|
```

#### 复合表达式

1 * 2 \* 3

```
<LogicalExpression> = <AddExpression> |
<LogicalExpression> "||" <AddExpression> |
<LogicalExpression> "&&" <AddExpression>
```

### 括号表达式

```
<PrimaryExpression> = "(" <LogicalExpression> ")"
```

### 图灵完备性

图灵机，又称图灵计算、图灵计算机，是由数学家艾伦·麦席森·图灵（1912 ～ 1954）提出的一种抽象计算模型，即将人们使用纸笔进行数学运算的过程进行抽象，由一个虚拟的机器替代人们进行数学运算。对于一个问题，对于任意输入，只要人类可以保证算出结果（不管花多少时间），那么图灵机就可以保证算出结果（不管花多少时间）。当一门语言可以实现图灵机能做到的所有事情，那么就可以称为图灵完备性

*  命令式---图灵机
    *  goto
    *  if/while
*  声明式--lambda
    *  递归

#### 一般命令式编程语言

*  atom
    *  identifier
    *  literal
*  expression
    *  atom
    *  operator
    *  punctuator
*  statement
    *  expression
    *  keyword
    *  punctuator
*  structrure
    *  function
    *  class
    *  process
    *  namespace
*  program
    *  program
    *  module
    *  package
    *  library

### unicode

Unicode（统一码、万国码、单一码）是计算机科学领域里的一项业界标准，包括字符集、编码方案等。Unicode 是为了解决传统的字符编码方案的局限而产生的，它为每种语言中的每个字符设定了统一并且唯一的二进制编码，以满足跨语言、跨平台进行文本转换、处理的要求。

#### ascii

ASCII 码使用指定的 7 位或 8 位二进制数组合来表示 128 或 256 种可能的字符。标准 ASCII 码也叫基础 ASCII 码，使用 7 位二进制数（剩下的 1 位二进制为 0）来表示所有的大写和小写字母，数字 0 到 9、标点符号，以及在美式英语中使用的特殊控制字符。一般字符编码方案都会兼容 ascii 码标准

#### cjk

CJK Unified Ideographs 编码区间为`U+4E00`到`U+9FFF`，中日韩文字字符集合

#### js 编码相关 api

*  codePointAt(pos)
    参数：pos 这个字符串中需要转码的元素的位置
    返回值：返回 一个 Unicode 编码点值的非负整数
*  numObj.toSting([radix])
    radix 指定要用于数字到字符串的转换的基数(从 2 到 36)。如果未指定 radix 参数，则默认值为 10
    返回值：返回指定 Number 对象的字符串表示形式

```javascript
'哈士奇'.codePointAt(0).toString(16) // 54c8
'哈士奇'.codePointAt(1).toString(16) // 58eb
'哈士奇'.codePointAt(2).toString(16) // 5947
let \u54c8\u58eb\u5947 = 1
console.log(哈士奇) 
```
### js词法
* InputElement
    * whitespace
        * Tab => 横向制表符
        * Vt => 竖向制表符
        * FF => FormFeed 换页符
        * SP => Space 普通空格
        * nbsp => no break space
        * zwnbsp => zero width np break space
    * LineTerminator 
        * LF => /n
        * CR => /r
    * Commoent
        * SingleLineComment 当行注释
        * MutiLineComment 多行注释
    * Token
        * Punctuator 符号 * ** /
        * IdentifierName
            * Keywords 关键字 let const
            * Identifier 标识符 用户自己定义的，如document，count
                * Identifier start :UnicodeIdStart | $ | _
                * Identifier part  :UnicodeIdContinue | & | <ZWNJ>| <ZWj>
        * Literal(直接量)
            * Numner
                * DecimalLiteral
                    * 0
                    * 0.
                    * .2
                    * 1e3
                * BinaryIntegerLiteral 0b111
                * OctallIntgerLiteral Oo10
                * HexIntergerLiteral OxFF
            * String
                * character 字符 A
                * codePoint 码点 97
                * Encoding utf
                    * UTF-8
                    * UTF-16 实际以16居多
            * Boolean 
            * Null
            * Undefined
            
        


名词解释：
* UnicodeIdStart：any Unicode code point with the Unicode property "ID_Start"      
* UnicodeIdContinue：any Unicode code point with the Unicode property "ID_Continue"    
* ZWNJ: Zero width non-joiner 放置在一些经常会被当成连字的字符之间，用于将它们分别以独立形式显示,代码中以`&zwnj`表示
* ZWJ:  Zero width joiner 放置在一些通常不会被标记为连字的字符之间，用于将这些字符以连字形式显示，代码中以`&zwj`表示

### 拓展思考
* 0.1 * 0.2 === 0.3 ？

根据国际标准IEEE 754，javascript浮点数的64个二进制位，从最左边开始，是这样组成的
+ 第一位表示符号正负
+ 2-12位，表示指数部分，用E来表示
+ 13-64位，存储小数部分，用M来表示
按照IEEE标准，1≤M<2，也就是说，M可以写成1.xxxxxx的形式，其中xxxxxx表示小数部分。IEEE 754规定，在计算机内部保存M时，默认这个数的第一位总是1，因此可以被舍去，只保存后面的xxxxxx部分。比如保存1.01的时候，只保存01，等到读取的时候，再把第一位的1加上去。这样做的目的，是节省1位有效数字。以52位浮点数为例，留给M只有51位，将第一位的1舍去以后，等于可以保存52位有效数字。
其中指数部分，11位最大值是2048，因为要表示负数，所以区间应为[-1023,1024]

#### 相关api
* TypedArray

