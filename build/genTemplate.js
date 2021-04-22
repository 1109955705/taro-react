
const fs = require('fs');
const glob = require('glob');
const chalk = require('chalk');
const inquirer = require('inquirer');
const path = require('path');
const dayjs = require('dayjs');
const execSync = require('child_process').execSync;

async function run() {
  const answers = await inquirer
  .prompt([
    {
      type: 'list',
      name: 'type',
      message: '请选择生成模板',
      choices: [
        {
          name: 'component（生成公用组件）。例如：输入 ui/layout，会在src/components目录下生成 ui/layout组件模板目录',
          value: 'component',
        },
        {
          name: 'page（生成页面）。例如：输入 page-a/page-b，会在src/pages目录下生成 page-a/page-b 页面模板目录',
          value: 'page',
        },
        {
          name: 'page:component（生成页面的components目录）。例如：输入 page-a/page-b/components/ui/layout，会在src/pages/page-a/page-b/components/目录下生成 ui/layout组件模板目录',
          value: 'page:component:scoped',
        },
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入页面或组件模板名',
    },
  ]);
  
  const { type } = answers;

  // 例如: page:component 生成页面的components目录
  const [distType, srcType, scoped = ''] = type.split(':');
  const name = answers.name.trim();

  if (/[^a-zA-Z0-9\/\-]/g.test(name)) {
    throw new Error('页面或组件模板名只能是字母或数字或/-等字符');
  }

  const names = name.split('/').map((n) => {
    const pascal = helper.pascalCase(n);
    const kebab = helper.kebabCase(pascal, { trimHeadKebab: true });
    const camel = helper.camelCase(kebab);

    return {
      pascal,
      kebab,
      camel,
    };
  });
  console.log('xxx', names)
  return
  // 取最后一个作为页面模块名
  const { [names.length - 1]: {
    pascal: pascalName,
    kebab: kebabName,
    camel: camelName,
   } } = names;

  const templateFiles = glob.sync(`./build/templates/${(srcType || distType)}/**/*.{ts,vue,css,less,sass}`);

  let gitName = '';
  let gitEmail = '';

  /** 获取当前git账号的姓名和邮箱
   * @see {@link https://git-scm.com/docs/pretty-formats}
   */
  try {
    // 姓名
    gitName = execSync('git show -s --format=%cn').toString().trim();
    // 邮箱
    gitEmail = execSync('git show -s --format=%ce').toString().trim();
  } catch (error) {
    //
  }

  templateFiles.forEach((file) => {
    const fileRelativePath = file
      .replace(
        `./build/templates/${(srcType || distType)}`,
        `../src/${distType}s/${names.map((p) => p.kebab).join('/')}`,
      );
    let fileString = fs.readFileSync(file).toString();
    // 做替换
    fileString = fileString
      .replace(/@pascalName/g, pascalName)
      .replace(/@camelName/g, camelName)
      .replace(/@kebabName/g, kebabName)
      .replace(/@filePath/g, fileRelativePath.replace('../', ''))
      .replace(/@dateTime/g, dayjs().format('YYYY-MM-DD HH:mm:ss'));

    fileString = fileString.replace(/@authorName/g, `${gitName}<${gitEmail}>`);

    fileString = fileString.replace(/@scoped/g, scoped ? ` ${scoped}` : '');

    // 路径为 kebabCase 命名格式
    const distPath = path.resolve(
      __dirname,
      fileRelativePath,
    );

    mkdirsSync(path.dirname(distPath));

    console.log(chalk.cyan(`[写入]: ${distPath}`));

    if (fs.existsSync(distPath)) {
      throw new Error(`文件: ${distPath} 已存在`);
    }

    fs.writeFileSync(distPath, fileString);
  });
}

run();

