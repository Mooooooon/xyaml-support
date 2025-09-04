import * as vscode from 'vscode';
import { XYAMLFormatter } from './formatter';

export function activate(context: vscode.ExtensionContext) {
    console.log('XYAML Support extension is now active!');

    // 注册格式化提供器
    const formatter = new XYAMLFormatter();
    const disposable = vscode.languages.registerDocumentFormattingEditProvider(
        { language: 'xyaml' },
        formatter
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log('XYAML Support extension is deactivated.');
}