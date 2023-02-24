module.exports = {
  skipQuestions: ['scope', 'body', 'breaking', 'footer'],
  types: [
    { value: 'feat', name: '新功能' },
    { value: 'fix', name: '修补bug' },
    { value: 'upd', name: '功能更新' },
    { value: 'revert', name: '恢复' },
    { value: 'test', name: '添加测试' },
    { value: 'ci', name: '自动化流程相关' },
    { value: 'build', name: '打包相关' },
    { value: 'docs', name: '文档' },
    { value: 'chore', name: '杂项' },
  ],
};
