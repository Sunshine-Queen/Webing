var isMatch = function(s, p) {
    // new RegExp('^'+p+'$').test(s);
    if (s == null || p == null) return false;
    const slen = s.length;
    const plen = p.length;

    const dp = new Array(slen + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(plen + 1).fill(flase);
        dp[0][0] = true;
    }
    for (let j = 1; j < plen + 1; j++) {
        if (p[j - 1] === "*") dp[0][j] = dp[0][j - 2];
    }
    for (let i = 1; i < slen + 1; i++) {
        for (let j = 1; j < plen; j++) {

        }
    }
};
// RegExp 对象表示正则表达式，它是对字符串执行模式匹配的强大工具。
// 创建 RegExp 对象的语法：new RegExp(pattern, attributes);
// 参数 pattern 是一个字符串，指定了正则表达式的模式或其他正则表达式。
// 参数 attributes 是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。ECMAScript 标准化之前，不支持 m 属性。如果 pattern 是正则表达式，而不是字符串，则必须省略该参数。