/*
 * @Author: 贾晨昊
 * @Date: 2025-04-21 14:53:37
 * @LastEditors: 贾晨昊
 * @LastEditTime: 2025-04-21 15:04:43
 * @Description: 
 */
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { index, template } from '../template/modalVue2';

export const apiMountVue2 = vscode.commands.registerCommand(
    'extension.createDirectoryVue2',
    async (uri: vscode.Uri) => {
      // 获取用户输入的目录名
      const componentName = await vscode.window.showInputBox({
        prompt: '输入弹窗名称',
        validateInput: (value) => {
          if (!value) return '名称不能为空!';
          if (/[<>:"/\\|?*]/.test(value)) return '名称不能包含特殊字符!';
          return null;
        }
      });

      if (!componentName) return;

      // 目标目录路径
      const targetDir = path.join(uri.fsPath, componentName);

      try {
        // 创建目录
        await fs.promises.mkdir(targetDir);

        // 生成 index.ts
        const indexPath = path.join(targetDir, 'index.js');
        const indexContent = index;
        await fs.promises.writeFile(indexPath, indexContent);

        // 生成 template.vue
        const templatePath = path.join(targetDir, 'template.vue');
        const templateContent = template;
        await fs.promises.writeFile(templatePath, templateContent);

        vscode.window.showInformationMessage(`Component "${componentName}" created successfully!`);
        
        // 自动打开生成的文件（可选）
        const doc = await vscode.workspace.openTextDocument(templatePath);
        vscode.window.showTextDocument(doc);
      } catch (error) {
        vscode.window.showErrorMessage(`Failed to create component: ${error}`);
      }
    }
  );