// 业务函数test、test1、test...
function test() {
    alert(2);
    return 'hello!';
}
// 统计当前所有函数谁耗时最长

// 侵入代码统计时有可能造成变量污染
/* function test(){
    // start
    var start='';
    alert(2);
    // end
    var end='';
    console.log(start-end);
} */

// 无侵入式
Function.prototype.before = function (fn) {
    var __self = this;
    return function () {
        fn.apply(__self, arguments);
        return __self.apply(__self, arguments);
    }
}

Function.prototype.after = function (fn) {
    var __self = this;
    return function () {
        var relsult = __self.apply(__self, arguments);
        fn.apply(__self, arguments);
        return relsult;
    }
}

// 默认函数执行两次
// before回调和before一起送到after去
// after也要送到before去
/* test.before(function () {
    alert(1);
});
test.after(function () {
    alert(3);
}); */
test.before(function () {
    alert(1);
}).after(function () {
    alert(3);
})();