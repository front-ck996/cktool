// g	全局搜索。
// i	不区分大小写搜索。
// m	多行搜索。
// s	允许 . 匹配换行符。
// u	使用 unicode 码的模式进行匹配。
// y	执行“粘性 (sticky)”搜索，匹配从目标字符串的当前位置开始。
// regex
const re = /^a1.*?(ff)$/
const reStr = 'a 1123afsrfwrasff'

// exec
console.log(re.exec(reStr))

// test
console.log(re.test(reStr))

// match
console.log(reStr.match(re))

// matchAll
// console.log(...reStr.matchAll(re))

console.log(reStr.search(/wra/))

console.log(reStr.replace(/[wra|f]/,''))

console.log(reStr.split(/[wra|f]/g,))

console.log(reStr.match(/\S/g))