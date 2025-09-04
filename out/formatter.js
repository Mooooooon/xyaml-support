"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XYAMLFormatter = void 0;
const vscode = require("vscode");
class XYAMLFormatter {
    provideDocumentFormattingEdits(document, options) {
        const edits = [];
        const lines = [];
        // 解析所有行
        for (let i = 0; i < document.lineCount; i++) {
            const line = document.lineAt(i);
            const parsedLine = this.parseLine(line.text);
            lines.push(parsedLine);
        }
        // 计算正确的缩进层级
        this.calculateIndentation(lines);
        // 生成格式化后的内容
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const originalLine = document.lineAt(i);
            const formattedText = this.formatLine(line, options);
            if (originalLine.text !== formattedText) {
                const range = new vscode.Range(originalLine.range.start, originalLine.range.end);
                edits.push(vscode.TextEdit.replace(range, formattedText));
            }
        }
        return edits;
    }
    parseLine(text) {
        const trimmed = text.trim();
        const originalIndent = text.length - text.trimStart().length;
        // 空行
        if (!trimmed) {
            return {
                content: '',
                originalContent: text,
                indentLevel: 0,
                originalIndentLevel: 0,
                xmlTagLevel: 0,
                lineType: 'empty'
            };
        }
        // 注释行
        if (trimmed.startsWith('#')) {
            return {
                content: trimmed,
                originalContent: text,
                indentLevel: 0,
                originalIndentLevel: originalIndent,
                xmlTagLevel: 0,
                lineType: 'comment'
            };
        }
        // XML 自闭合标签
        if (trimmed.match(/^<\w+[^>]*\/>$/)) {
            const tagMatch = trimmed.match(/^<(\w+)/);
            return {
                content: trimmed,
                originalContent: text,
                indentLevel: 0,
                originalIndentLevel: originalIndent,
                xmlTagLevel: 0,
                lineType: 'xml-self-closing',
                tagName: tagMatch ? tagMatch[1] : undefined
            };
        }
        // XML 结束标签
        if (trimmed.match(/^<\/\w+>$/)) {
            const tagMatch = trimmed.match(/^<\/(\w+)>/);
            return {
                content: trimmed,
                originalContent: text,
                indentLevel: 0,
                originalIndentLevel: originalIndent,
                xmlTagLevel: -1,
                lineType: 'xml-close',
                tagName: tagMatch ? tagMatch[1] : undefined
            };
        }
        // XML 开始标签
        if (trimmed.match(/^<\w+[^>]*>$/)) {
            const tagMatch = trimmed.match(/^<(\w+)/);
            return {
                content: trimmed,
                originalContent: text,
                indentLevel: 0,
                originalIndentLevel: originalIndent,
                xmlTagLevel: 1,
                lineType: 'xml-open',
                tagName: tagMatch ? tagMatch[1] : undefined
            };
        }
        // YAML 内容
        return {
            content: trimmed,
            originalContent: text,
            indentLevel: 0,
            originalIndentLevel: originalIndent,
            xmlTagLevel: 0,
            lineType: 'yaml'
        };
    }
    calculateIndentation(lines) {
        let xmlDepth = 0;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            switch (line.lineType) {
                case 'empty':
                case 'comment':
                    // 保持XML层级的缩进
                    line.indentLevel = xmlDepth;
                    break;
                case 'xml-close':
                    xmlDepth = Math.max(0, xmlDepth - 1);
                    line.indentLevel = xmlDepth;
                    break;
                case 'xml-open':
                    line.indentLevel = xmlDepth;
                    xmlDepth += 1;
                    break;
                case 'xml-self-closing':
                    line.indentLevel = xmlDepth;
                    break;
                case 'yaml':
                    // 简化的YAML缩进计算：基于原始缩进 + XML深度
                    const yamlIndentLevel = Math.floor(line.originalIndentLevel / 2);
                    line.indentLevel = xmlDepth + yamlIndentLevel;
                    break;
            }
        }
    }
    formatLine(line, options) {
        if (line.lineType === 'empty') {
            return '';
        }
        if (line.lineType === 'comment') {
            // 注释保持顶级缩进或XML层级缩进
            const indent = ' '.repeat(line.indentLevel * (options.tabSize || 2));
            return indent + line.content;
        }
        const indent = ' '.repeat(line.indentLevel * (options.tabSize || 2));
        return indent + line.content;
    }
}
exports.XYAMLFormatter = XYAMLFormatter;
//# sourceMappingURL=formatter.js.map