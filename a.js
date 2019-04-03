const c= 666

// module.exports=c;//尽管module.exports导出的是一个对象，但还是可以这样写，导出的是number类型的数字
// module.exports.cc=c;//这样写是最正常的
// exports=c;//这样写和module.exports=c不一样，这时候c并不会被赋值到module.exports上
// exports.cc=c;//这样写也是正常的

/*
* 当module.exports={a:1}和exports={b:2}同时存在怎么办，明显的看到，只有module.exports={a:1}被导出了，exports={b:2}被忽略了
* */
module.exports={a:1}
exports={b:2}