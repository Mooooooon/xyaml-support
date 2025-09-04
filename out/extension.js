"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const formatter_1 = require("./formatter");
function activate(context) {
    console.log('XYAML Support extension is now active!');
    // 注册格式化提供器
    const formatter = new formatter_1.XYAMLFormatter();
    const disposable = vscode.languages.registerDocumentFormattingEditProvider({ language: 'xyaml' }, formatter);
    context.subscriptions.push(disposable);
}
function deactivate() {
    console.log('XYAML Support extension is deactivated.');
}
//# sourceMappingURL=extension.js.map