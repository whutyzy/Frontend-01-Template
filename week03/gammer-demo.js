class foo{
    constructor() {
        this.b = 1
    }
}
new foo()["b"] // 1
foo["b"] = function (params) {}

new foo["b"]
new (foo()["b"]) // error

function a() {
    console.log('a')
    return a1
}


function a1() {
    console.log('a2')
    return {a:'a'}
}

new a()()


