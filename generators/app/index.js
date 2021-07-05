// 此文件作为Generator 的核心入口
// 需要导出一个继承自 Yeoman Genterator 的 类型
// Yeoman Genterator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过父类提供的一些工具方法实现一些功能，列如文件写入

const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "your project name",
        default: this.appname, // 默认 为项目生成目录的名字
      },
    ]).then((answers) => {
      this.answers = answers;
    });
  }
  writing() {
    // yeoman 自动在生成文件阶段调此方法
    // 第一种，我们这里尝试往项目目录中写入文件
    // this.fs.write(this.destinationPath("temp.txt"), Math.random().toString());

    // 第二种方式
    // 获取模版路径
    let temp = this.templatePath("bar.html");
    // 输出路径
    let outp = this.destinationPath("bar.html");
    // 插入的字面量
    // let content = {
    //   title: "自定义模版",
    //   success: true,
    //   user: { name: "用户名" },
    // };
    let content = this.answers;
    let temp1 = this.templatePath("foo.txt");
    // 输出路径
    let outp1 = this.destinationPath("foo.txt");

    this.fs.copyTpl(temp1, outp1, content);
    this.fs.copyTpl(temp, outp, content);
  }
};
