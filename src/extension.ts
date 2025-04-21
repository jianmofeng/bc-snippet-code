import * as vscode from 'vscode';
import { apiMountVue2 } from './extensions/apiMount-vue2';
import { apiMount } from './extensions/apiMount';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(apiMount);
  context.subscriptions.push(apiMountVue2);
}