## 转义

### 转义字符
> 含义：对它后续的几个字符进行替代并解释
> 功能： 编码无法用字母表直接表示的特殊数据，无法直接用键盘录入的字符，

### 元字符的转义
- 量词 `*`或`?`或`+`或`-`或`^`或`$`或`|`等，直接在前面加上反斜杠`\`
- 括号`[]`和`{}`只需要转义开括号，但是`()`两个都要转义

### 字符组的转义
- `^`字符在中括号`[]`中，且在第一个位置时候
- `|`在中括号`[]`中，且不在首位位置
- 右中括号`]`在中括号`[]`中，且不在首位
- 其他单个长度的元字符在中括号`[]`中，一般不需要转义
