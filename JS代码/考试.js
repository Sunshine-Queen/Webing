// 1.扭蛋机

//扭蛋机别人正确的
// JavaScript V8
function main() {
    let N = parseInt(readline())
    let res = ''
    while (N > 0) {
        if (N % 2 === 0) {
            res += '3'
            N = (N - 2) / 2
        } else {
            res += '2'
            N = (N - 1) / 2
        }
    }
    res = res.split('').reverse().join('')
    print(res)
}

main()
    //
let num = readline();

let res = '';

while (num > 0) {
    if (num % 2 === 0) {
        res = res + '3'
        num = (num - 2) / 2
    } else {
        res = res + '2'
        num = (num - 1) / 2
    }
}

console.log(res.split('').reverse().join(''))
    //3.简单表达式计算
while (line = readline()) {
    var lines = line.split("\r");
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] == 'END') break;
        else console.log(eval(lines[i]));
    }
}
//6.比较两个版本字符串version1和version2
while (line = readline()) {
    var lines = line.split(" ");
    var str1 = lines[0];
    var str2 = lines[1];
    var version1 = str1.split('.');
    var version2 = str2.split('.');
    var len = version1.length < version2.length ? version1.length : version2.length;

    for (var i = 0; i < len; i++) {
        if (parseInt(version1[i]) > parseInt(version2[i])) {
            console.log(1);
            break;
        } else if (parseInt(version1[i]) < parseInt(version2[i])) {
            console.log(-1);
            break;
        } else {
            continue;
        }
    }
    if ((i === len) && (version1[i - 1] === version2[i - 1])) { //等位数
        if (version1.length > version2.length) {
            console.log(1);
        } else if (version1.length < version2.length) {
            console.log(-1);
        } else {
            console.log(0);
        }

    }
}