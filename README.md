# XYAML Support

## 中文说明

欢迎使用XYAML Support扩展！这是一个为Visual Studio Code开发的扩展，专门支持`.xyaml`文件格式。

XYAML是一种创新的文件格式，将XML的结构化标签与YAML的简洁数据表示完美结合，为配置文件和数据存储提供了强大而灵活的解决方案。

### 主要功能

#### 🎨 语法高亮
- 精确识别XML标签和YAML内容
- 支持复杂的XML属性语法高亮
- 完整支持XML标签嵌套结构
- 原生支持中文键名和中文冒号（：）
- 自动高亮YAML各种数据类型：字符串、数字、布尔值、列表、字典等

#### 📐 智能格式化
- **文档格式化**：使用`Shift+Alt+F`或右键菜单"格式化文档"
- **智能缩进**：自动计算XML嵌套层级和YAML缩进
- **层级保持**：正确处理YAML键值对的父子关系
- **中文支持**：完美支持中文键名的格式化
- **混合格式**：同时处理XML标签和YAML内容的格式化需求

#### 🔧 完整支持
- **XML标签**：支持开始标签、结束标签、自闭合标签
- **XML属性**：完整支持带属性的XML标签
- **XML嵌套**：支持多层XML标签嵌套
- **YAML语法**：支持所有标准YAML语法特性
- **中文友好**：原生支持中文键名和全角冒号

### 使用示例

```xyaml
<xyaml version="1.0" encoding="utf-8">
# XYAML格式演示

<character_information character="菲兰" class="法师">
  基本信息：
    姓名：菲兰
    职业：法师
    等级：45
  
  属性：
    力量：12
    敏捷：18
    智力：25
  
  技能列表：
    - 火球术
    - 冰箭
    - 传送术
</character_information>

<database_config type="production">
  连接设置：
    主机："db.example.com"
    端口：5432
    用户名："admin"
  
  连接池配置：
    最大连接数：100
    最小连接数：5
    超时时间：30
</database_config>

# 全局配置
应用配置：
  名称："XYAML演示应用"
  版本："1.0.0"
  调试模式：false
  
  功能模块：
    - 用户管理
    - 数据同步
    - 报告生成
</xyaml>
```

### 安装方法

1. 打开Visual Studio Code
2. 进入扩展市场（Ctrl+Shift+X）
3. 搜索"XYAML Support"
4. 点击安装

### 使用方法

1. **语法高亮**：创建或打开`.xyaml`文件即可自动启用
2. **格式化文档**：
   - 快捷键：`Shift+Alt+F`
   - 右键菜单：选择"格式化文档"
   - 命令面板：`Ctrl+Shift+P` → "Format Document"

---

## English Documentation

Welcome to the XYAML Support extension for Visual Studio Code!

XYAML is an innovative file format that perfectly combines XML's structured tags with YAML's concise data representation, providing a powerful and flexible solution for configuration files and data storage.

### Key Features

#### 🎨 Syntax Highlighting
- Precise recognition of XML tags and YAML content
- Support for complex XML attribute syntax highlighting
- Complete support for nested XML tag structures
- Native support for Chinese key names and Chinese colons (：)
- Automatic highlighting of various YAML data types: strings, numbers, booleans, lists, dictionaries, etc.

#### 📐 Smart Formatting
- **Document Formatting**: Use `Shift+Alt+F` or right-click menu "Format Document"
- **Smart Indentation**: Automatically calculate XML nesting levels and YAML indentation
- **Hierarchy Preservation**: Correctly handle parent-child relationships of YAML key-value pairs
- **Chinese Support**: Perfect support for formatting Chinese key names
- **Mixed Format**: Handle formatting requirements for both XML tags and YAML content

#### 🔧 Complete Support
- **XML Tags**: Support for opening tags, closing tags, self-closing tags
- **XML Attributes**: Complete support for XML tags with attributes
- **XML Nesting**: Support for multi-level XML tag nesting
- **YAML Syntax**: Support for all standard YAML syntax features
- **Chinese Friendly**: Native support for Chinese key names and full-width colons

### Usage Example

```xyaml
<xyaml version="1.0" encoding="utf-8">
# XYAML Format Demo

<character_information character="Faelan" class="Mage">
  basic_info:
    name: Faelan
    class: Mage
    level: 45
  
  attributes:
    strength: 12
    agility: 18
    intelligence: 25
  
  skills:
    - Fireball
    - Ice Arrow
    - Teleport
</character_information>

<database_config type="production">
  connection:
    host: "db.example.com"
    port: 5432
    username: "admin"
  
  pool_settings:
    max_connections: 100
    min_connections: 5
    timeout: 30
</database_config>

# Global Configuration
app_config:
  name: "XYAML Demo Application"
  version: "1.0.0"
  debug_mode: false
  
  modules:
    - User Management
    - Data Sync
    - Report Generation
</xyaml>
```

### Installation

1. Open Visual Studio Code
2. Go to Extensions marketplace (Ctrl+Shift+X)
3. Search for "XYAML Support"
4. Click Install

### How to Use

1. **Syntax Highlighting**: Automatically enabled when creating or opening `.xyaml` files
2. **Document Formatting**:
   - Keyboard shortcut: `Shift+Alt+F`
   - Right-click menu: Select "Format Document"
   - Command Palette: `Ctrl+Shift+P` → "Format Document"

### Version History

- **v0.3.0**: Added complete document formatting support with smart YAML indentation
- **v0.2.0**: Enhanced XML tag nesting support and improved demo file
- **v0.1.0**: Added Chinese key name support and comprehensive syntax highlighting
- **v0.0.1**: Initial release with basic syntax highlighting

### Contributing

This extension is open source. Feel free to contribute improvements or report issues on our GitHub repository.

### License

MIT License

**享受使用 XYAML Support！/ Enjoy using XYAML Support!**