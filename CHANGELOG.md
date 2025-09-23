# Change Log

All notable changes to the "xyaml-support" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.3.5] - 2025-09-23

### Changed
- 下调 `engines.vscode` 至 `^1.83.0`，提升与 Cursor 等 VS Code 分支的兼容性
- 移除显式 `activationEvents` 声明（VS Code 会依据 `contributes.languages` 自动生成触发）
- 将 `@types/vscode` 对齐至与引擎匹配的 `^1.83.0`

## [0.3.4] - 2025-09-04

### Fixed
- 修复格式化时XML内部YAML整体后移两格的问题
- 改进了YAML缩进计算算法，现在以XML标签内第一个YAML行为基准计算相对缩进

## [0.3.3] - 2025-09-04

### Added
- 添加了XYAML格式化支持
- 支持XML和YAML混合内容的智能缩进

## [Unreleased]

- Initial release
